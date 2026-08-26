import { cn } from "@/lib/utils";

/** Varumärket i löpande text: alltid versaler och kursivt. */
export const Brand = ({ className }: { className?: string }) => (
  <span className={cn("italic uppercase", className)}>VEXA</span>
);
