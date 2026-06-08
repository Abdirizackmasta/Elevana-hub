import { ReactNode } from "react";
import clsx from "clsx";

export default function Badge({
  children,
  className,
}: {
  children: ReactNode;
  className?: string;
}) {
  return (
    <div
      className={clsx(
        "inline-flex items-center gap-2 rounded-full border border-purple-500/30 bg-purple-500/10 px-4 py-2 text-xs text-purple-300",
        "shadow-[0_0_20px_rgba(109,33,232,0.2)]",
        className
      )}
    >
      {children}
    </div>
  );
}