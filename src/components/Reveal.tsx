import {
  createElement,
  type CSSProperties,
  type ElementType,
  type ReactNode,
} from "react";
import { useInView } from "@/lib/motion";
import { cn } from "@/lib/utils";

type Variant = "mask" | "fade" | "rule" | "image";

const motionVars = (delay?: number, duration?: number) => {
  const style: Record<string, string> = {};
  if (delay) style["--reveal-delay"] = `${delay}ms`;
  if (duration) style["--reveal-duration"] = `${duration}ms`;
  return style as CSSProperties;
};

type RevealProps = {
  as?: ElementType;
  variant?: Variant;
  delay?: number;
  duration?: number;
  threshold?: number;
  className?: string;
  children?: ReactNode;
};

export const Reveal = ({
  as = "div",
  variant = "fade",
  delay,
  duration,
  threshold,
  className,
  children,
}: RevealProps) => {
  const { ref, inView } = useInView<HTMLElement>({ threshold });

  return createElement(
    as,
    {
      ref,
      className,
      "data-reveal": variant,
      "data-inview": inView ? "true" : "false",
      style: motionVars(delay, duration),
    },
    children
  );
};

/** Hårfin linje som ritas ut från vänster när den kommer i vy. */
export const Rule = ({
  className,
  delay,
  duration,
}: {
  className?: string;
  delay?: number;
  duration?: number;
}) => (
  <Reveal
    variant="rule"
    delay={delay}
    duration={duration}
    className={cn("rule", className)}
  />
);

type RevealTextProps = {
  as?: ElementType;
  text: string;
  className?: string;
  delay?: number;
  step?: number;
};

/**
 * Ord-för-ord maskad reveal för display-rubriker.
 * Varje ord maskas separat, med en liten förskjutning i tid.
 */
export const RevealText = ({
  as = "span",
  text,
  className,
  delay = 0,
  step = 55,
}: RevealTextProps) => {
  const { ref, inView } = useInView<HTMLElement>({ threshold: 0.2 });
  const words = text.split(" ");

  return createElement(
    as,
    { ref, className },
    words.map((word, index) => (
      <span
        key={`${word}-${index}`}
        className="inline-block whitespace-pre"
        data-reveal="mask"
        data-inview={inView ? "true" : "false"}
        style={motionVars(delay + index * step, 1000)}
      >
        {index < words.length - 1 ? `${word} ` : word}
      </span>
    ))
  );
};
