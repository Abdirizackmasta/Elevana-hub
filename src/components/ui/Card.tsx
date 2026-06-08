import { ReactNode } from "react";
import clsx from "clsx";

export default function Card({
  children,
  className,
}: {
  children: ReactNode;
  className?: string;
}) {
  return (
    <div
      className={clsx(
        "rounded-2xl border border-purple-500/20 bg-white/5 backdrop-blur-md",
        "shadow-[0_20px_60px_rgba(0,0,0,0.4)]",
        className
      )}
    >
      {children}
    </div>
  );
}