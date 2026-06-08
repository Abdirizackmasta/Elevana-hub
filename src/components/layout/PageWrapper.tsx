import { ReactNode } from "react";
import clsx from "clsx";

export default function PageWrapper({
  children,
  className,
}: {
  children: ReactNode;
  className?: string;
}) {
  return (
    <div
      className={clsx(
        "min-h-screen bg-[#0a0412] text-white antialiased",
        "selection:bg-purple-500/30 selection:text-white",
        className
      )}
    >
      {children}
    </div>
  );
}