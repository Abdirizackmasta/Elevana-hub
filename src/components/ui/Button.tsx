import { ReactNode } from "react";
import clsx from "clsx";

type ButtonProps = {
  children: ReactNode;
  variant?: "primary" | "ghost";
  className?: string;
};

export default function Button({
  children,
  variant = "primary",
  className,
}: ButtonProps) {
  return (
    <button
      className={clsx(
        "rounded-xl px-6 py-3 text-sm font-semibold transition",
        "active:scale-[0.98]",
        variant === "primary" &&
          "bg-gradient-to-r from-purple-600 to-purple-400 text-white shadow-[0_8px_32px_rgba(109,33,232,0.4)] hover:-translate-y-1 hover:shadow-[0_16px_48px_rgba(109,33,232,0.5)]",
        variant === "ghost" &&
          "border border-purple-500/20 bg-white/5 text-purple-200 backdrop-blur-md hover:border-purple-400/60 hover:text-white",
        className
      )}
    >
      {children}
    </button>
  );
}