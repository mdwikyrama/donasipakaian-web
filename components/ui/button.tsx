import type { ButtonHTMLAttributes, ReactNode } from "react";
import { cn } from "@/lib/cn";

type ButtonVariant = "primary" | "secondary" | "ghost" | "danger";

export type ButtonProps = ButtonHTMLAttributes<HTMLButtonElement> & {
  leftIcon?: ReactNode;
  rightIcon?: ReactNode;
  variant?: ButtonVariant;
};

const variants: Record<ButtonVariant, string> = {
  primary:
    "bg-emerald-700 text-white hover:bg-emerald-800 focus-visible:ring-emerald-700",
  secondary:
    "bg-white text-slate-900 ring-1 ring-slate-200 hover:bg-slate-50 focus-visible:ring-emerald-700",
  ghost:
    "bg-transparent text-slate-700 hover:bg-slate-100 focus-visible:ring-slate-500",
  danger:
    "bg-rose-700 text-white hover:bg-rose-800 focus-visible:ring-rose-700",
};

export function Button({
  children,
  className,
  leftIcon,
  rightIcon,
  type = "button",
  variant = "primary",
  ...props
}: ButtonProps) {
  return (
    <button
      className={cn(
        "inline-flex h-10 items-center justify-center gap-2 rounded-md px-4 text-sm font-semibold transition focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-offset-2 disabled:cursor-not-allowed disabled:opacity-60",
        variants[variant],
        className,
      )}
      type={type}
      {...props}
    >
      {leftIcon}
      <span>{children}</span>
      {rightIcon}
    </button>
  );
}
