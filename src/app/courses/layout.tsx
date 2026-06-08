import React from "react";
import PageWrapper from "@/components/layout/PageWrapper";
import Navbar from "@/components/layout/Nav";

export const metadata = {
  title: "Courses - ElevenaHub",
};

export default function CoursesLayout({ children }: { children: React.ReactNode }) {
  return (
    <PageWrapper>
      <Navbar />
      <main className="pt-20">{children}</main>
    </PageWrapper>
  );
}
