import type { CSSProperties } from "react";
import { useInView, useScrollProgress } from "@/lib/motion";
import { cn } from "@/lib/utils";

const BAY = 10;

type FacadeProps = {
  bays?: number;
  floors?: number;
  floorHeight?: number;
  ground?: number;
  attic?: number;
  drift?: number;
  delay?: number;
  className?: string;
};

/**
 * Hårlinjefasad som ritas i lager: mark → kontur → våningsband →
 * vertikaler → fönster → butiksöppningar. Scroll ger en diskret drift.
 */
export const Facade = ({
  bays = 14,
  floors = 3,
  floorHeight = 10.8,
  ground = 1.72,
  attic = 0.38,
  drift = 0,
  delay = 0,
  className,
}: FacadeProps) => {
  const floorH = BAY * (floorHeight / 10);
  const atticH = floorH * attic;
  const groundH = floorH * ground;

  const width = bays * BAY;
  const height = atticH + floors * floorH + groundH;

  const atticY = atticH;
  const groundY = atticH + floors * floorH;
  const plinthY = height - groundH * 0.12;
  const eavesY = atticH * 0.18;

  const bayIndexes = Array.from({ length: bays }, (_, index) => index);
  const every = (step: number) =>
    bayIndexes.filter((bay) => bay > 0 && bay % step === 0);

  const windowW = BAY * 0.42;
  const windowH = floorH * 0.68;
  const windowX = (BAY - windowW) / 2;
  const windowY = (floorH - windowH) / 2;

  const atticWindowW = BAY * 0.52;
  const atticWindowH = atticH * 0.48;
  const atticWindowX = (BAY - atticWindowW) / 2;
  const atticWindowY = atticH * 0.34;

  const floorWindows = (floor: number) => {
    const y = atticY + floor * floorH + windowY;
    return bayIndexes
      .map((bay) => {
        const x = bay * BAY + windowX;
        return `M${x} ${y}h${windowW}v${windowH}h${-windowW}Z`;
      })
      .join("");
  };

  const atticWindows = bayIndexes
    .map((bay) => {
      const x = bay * BAY + atticWindowX;
      return `M${x} ${atticWindowY}h${atticWindowW}v${atticWindowH}h${-atticWindowW}Z`;
    })
    .join("");

  /* Vertikaler som binder våningarna — varannan bay för lugn rytm. */
  const mullions = every(2)
    .map((bay) => {
      const x = bay * BAY;
      return `M${x} ${atticY}V${plinthY}`;
    })
    .join("");

  const shopOpenings = every(3)
    .map((bay) => {
      const x = bay * BAY - BAY * 0.15;
      const w = BAY * 2.3;
      const top = groundY + groundH * 0.18;
      const h = plinthY - top;
      return `M${x} ${top}h${w}v${h}h${-w}Z`;
    })
    .join("");

  const strokes = [
    /* Marklinjen — samma bas som herons hårlinje */
    { d: `M0 ${height}H${width}`, delay: 0, duration: 1400 },
    /* Siluett upp från marken */
    {
      d: `M0 ${height}V${eavesY}H${width}V${height}`,
      delay: 280,
      duration: 2400,
    },
    /* Takfot och nock */
    {
      d: `M0 ${eavesY}H${width}M0 0H${width}`,
      delay: 900,
      duration: 1200,
    },
    /* Våningsband */
    {
      d: `M0 ${atticY}H${width}M0 ${groundY}H${width}M0 ${plinthY}H${width}`,
      delay: 1100,
      duration: 1500,
    },
    /* Vertikaler */
    {
      d: mullions,
      delay: 1500,
      duration: 1800,
    },
    /* Vindsfönster */
    {
      d: atticWindows,
      delay: 1900,
      duration: 1600,
    },
    /* Våning för våning */
    ...Array.from({ length: floors }, (_, floor) => ({
      d: floorWindows(floor),
      delay: 2200 + floor * 320,
      duration: 1700,
    })),
    /* Butiksöppningar sist */
    {
      d: shopOpenings,
      delay: 2200 + floors * 320 + 200,
      duration: 1500,
    },
  ];

  const { ref: viewRef, inView } = useInView<SVGSVGElement>({
    threshold: 0,
    rootMargin: "0px",
  });

  const scrollRef = useScrollProgress<SVGSVGElement>((progress) => {
    const element = scrollRef.current;
    if (!element) return;
    const t = progress - 0.5;
    element.style.setProperty("--shift", `${(t * -2 * drift).toFixed(2)}px`);
    element.style.setProperty("--drift-x", `${(t * drift * 0.35).toFixed(2)}px`);
  });

  const setRef = (node: SVGSVGElement | null) => {
    viewRef.current = node;
    scrollRef.current = node;
  };

  return (
    <svg
      ref={setRef}
      viewBox={`0 0 ${width} ${height}`}
      preserveAspectRatio="xMaxYMax meet"
      data-reveal="draw"
      data-inview={inView ? "true" : "false"}
      aria-hidden
      focusable="false"
      fill="none"
      stroke="currentColor"
      strokeWidth={1}
      vectorEffect="non-scaling-stroke"
      className={cn("overflow-visible", className)}
      style={
        {
          "--draw-root-delay": `${delay}ms`,
          transform:
            "translate3d(var(--drift-x, 0px), calc(var(--enter, 22px) + var(--shift, 0px)), 0)",
        } as CSSProperties
      }
    >
      {strokes.map((stroke, index) => (
        <g
          key={index}
          style={
            {
              "--draw-delay": `${stroke.delay + delay}ms`,
              "--draw-duration": `${stroke.duration}ms`,
            } as CSSProperties
          }
        >
          <path d={stroke.d} pathLength={1} vectorEffect="non-scaling-stroke" />
        </g>
      ))}
    </svg>
  );
};
