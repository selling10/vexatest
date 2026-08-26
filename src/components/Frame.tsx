import type { CSSProperties } from "react";
import { useInView } from "@/lib/motion";
import type { ResponsiveImage } from "@/assets/images";
import { cn } from "@/lib/utils";

type FrameProps = {
  image: ResponsiveImage;
  sizes: string;
  ratio?: number;
  height?: string;
  delay?: number;
  priority?: boolean;
  className?: string;
};

export const Frame = ({
  image,
  sizes,
  ratio,
  height,
  delay,
  priority = false,
  className,
}: FrameProps) => {
  const { ref, inView } = useInView<HTMLDivElement>({ threshold: 0.12 });

  return (
    <div
      ref={ref}
      className={cn("min-w-0 w-full", className)}
      style={
        height
          ? { height }
          : { aspectRatio: ratio ?? image.width / image.height }
      }
    >
      <div
        data-reveal="image"
        data-inview={inView ? "true" : "false"}
        className="h-full w-full overflow-hidden"
        style={
          delay
            ? ({ "--reveal-delay": `${delay}ms` } as CSSProperties)
            : undefined
        }
      >
        <picture>
          <source type="image/webp" srcSet={image.srcSet} sizes={sizes} />
          <img
            src={image.fallback}
            srcSet={image.srcSet}
            sizes={sizes}
            alt={image.alt}
            width={image.width}
            height={image.height}
            loading={priority ? "eager" : "lazy"}
            decoding="async"
            className="h-full w-full max-w-full object-cover"
          />
        </picture>
      </div>
    </div>
  );
};
