import type { CSSProperties } from "react";
import { cn } from "@/lib/utils";
import logoSrc from "@/assets/vexa.png";

/**
 * Original-PNG:en, oförändrad. Renderas som mask så att samma fil blir
 * svart på rosa och rosa på svart.
 */
export const Logo = ({ className }: { className?: string }) => (
  <span
    role="img"
    aria-label="VEXA Industrihus"
    className={cn("logo-mask", className)}
    style={
      {
        "--logo-src": `url(${logoSrc})`,
        aspectRatio: "822 / 412",
      } as CSSProperties
    }
  />
);
