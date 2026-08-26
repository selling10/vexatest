import { cn } from "@/lib/utils";
import type { AnchorHTMLAttributes, ButtonHTMLAttributes, ReactNode } from "react";

type CtaVariant = "primary" | "secondary" | "text";
type CtaTone = "light" | "dark";

type SharedProps = {
  variant?: CtaVariant;
  tone?: CtaTone;
  showLine?: boolean;
  className?: string;
  children: ReactNode;
};

type CtaLinkProps = SharedProps &
  AnchorHTMLAttributes<HTMLAnchorElement> & {
    href: string;
  };

type CtaButtonProps = SharedProps &
  ButtonHTMLAttributes<HTMLButtonElement> & {
    href?: never;
  };

export type CtaProps = CtaLinkProps | CtaButtonProps;

const styles: Record<CtaVariant, Record<CtaTone, string>> = {
  primary: {
    light:
      "border border-ink/20 px-5 py-3 hover:border-ink/45 hover:bg-ink/[0.03]",
    dark: "border border-rosa/35 px-5 py-3 hover:border-rosa/65 hover:bg-rosa/[0.04]",
  },
  secondary: {
    light:
      "opacity-65 underline decoration-ink/30 underline-offset-[0.45em] hover:opacity-100 hover:decoration-ink/70",
    dark:
      "opacity-65 underline decoration-rosa/30 underline-offset-[0.45em] hover:opacity-100 hover:decoration-rosa/70",
  },
  text: {
    light:
      "text-meta opacity-50 underline decoration-ink/20 underline-offset-[0.45em] hover:opacity-100 hover:decoration-ink/50",
    dark:
      "text-meta opacity-50 underline decoration-rosa/20 underline-offset-[0.45em] hover:opacity-100 hover:decoration-rosa/50",
  },
};

const CtaContent = ({
  children,
  showLine,
}: {
  children: ReactNode;
  showLine: boolean;
}) => (
  <>
    {children}
    {showLine ? (
      <span
        aria-hidden
        className="block h-px w-10 shrink-0 origin-left bg-current transition-transform duration-500 ease-vexa group-hover:scale-x-[1.6]"
      />
    ) : null}
  </>
);

export const Cta = ({
  variant = "primary",
  tone = "light",
  showLine,
  className,
  children,
  ...rest
}: CtaProps) => {
  const line = showLine ?? variant === "primary";
  const classes = cn(
    "group inline-flex items-center gap-3 uppercase transition-all duration-300 ease-vexa",
    variant === "text" ? "text-meta" : "text-meta-lg",
    styles[variant][tone],
    className
  );

  if ("href" in rest && rest.href !== undefined) {
    const { href, ...anchorRest } = rest as CtaLinkProps;
    return (
      <a href={href} className={classes} {...anchorRest}>
        <CtaContent showLine={line}>{children}</CtaContent>
      </a>
    );
  }

  const buttonRest = rest as CtaButtonProps;
  const { type = "button", ...buttonProps } = buttonRest;
  return (
    <button type={type} className={classes} {...buttonProps}>
      <CtaContent showLine={line}>{children}</CtaContent>
    </button>
  );
};
