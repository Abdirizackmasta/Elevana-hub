import { ReactNode } from "react";
import clsx from "clsx";

export default function Section({
  children,
  className,
  id,
}: {
  children: ReactNode;
  className?: string;
  id?: string;
}) {
  return (
    <section
      id={id}
      className={clsx(
        "py-16 md:py-24 lg:py-28",
        className
      )}
    >
      {children}
    </section>
  );
}