import { useInView } from "@/lib/motion";
import { cn } from "@/lib/utils";

/**
 * Hårfina lodräta linjer som ger sektionen grafisk struktur.
 * Ritas ut nedåt, en efter en, och ligger bakom innehållet.
 */
export const GridLines = ({
  count = 5,
  className,
}: {
  count?: number;
  className?: string;
}) => {
  const { ref, inView } = useInView<HTMLDivElement>({ threshold: 0 });

  return (
    <div
      ref={ref}
      aria-hidden
      className={cn(
        "pointer-events-none absolute inset-y-0 left-0 right-0 overflow-hidden",
        className
      )}
    >
      <div className="page relative h-full">
        {Array.from({ length: count }, (_, index) => (
          <span
            key={index}
            className="absolute top-0 h-full w-px origin-top bg-current opacity-[0.07] transition-transform duration-[1400ms] ease-vexa"
            style={{
              left: `${((index + 1) / (count + 1)) * 100}%`,
              transform: inView ? "scaleY(1)" : "scaleY(0)",
              transitionDelay: `${index * 90}ms`,
            }}
          />
        ))}
      </div>
    </div>
  );
};
