import { cn } from "@/lib/cn";
import type { HTMLAttributes, ReactNode } from "react";

export type SectionHeadingProps = HTMLAttributes<HTMLDivElement> & {
  eyebrow?: ReactNode;
  title: ReactNode;
  description?: ReactNode;
  align?: "left" | "center";
};

export function SectionHeading({
  className,
  eyebrow,
  title,
  description,
  align = "left",
  ...props
}: SectionHeadingProps) {
  return (
    <div
      className={cn(
        "flex flex-col gap-3",
        align === "center" ? "items-center text-center" : "items-start text-left",
        className,
      )}
      {...props}
    >
      {eyebrow ? (
        <span className="rounded-full border border-primary/30 bg-primary/10 px-3 py-1 text-xs font-semibold uppercase tracking-[0.14em] text-primary-foreground">
          {eyebrow}
        </span>
      ) : null}
      <h2 className="font-display text-balance text-3xl font-semibold tracking-[var(--tracking-display)] sm:text-4xl">
        {title}
      </h2>
      {description ? (
        <p className="max-w-2xl text-base text-muted-foreground sm:text-lg">{description}</p>
      ) : null}
    </div>
  );
}
