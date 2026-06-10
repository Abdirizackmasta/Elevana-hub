"use client";

import { useEffect, useRef, useState } from "react";
import Link from "next/link";
import { usePathname } from "next/navigation";
import { X, Menu } from "lucide-react";

export default function Navbar() {
  const [open, setOpen] = useState(false);
  const menuRef = useRef<HTMLDivElement | null>(null);
  const pathname = usePathname();

  const linkClass = (path: string) =>
    pathname === path
      ? "text-purple-400 font-semibold"
      : "text-gray-300 hover:text-white hover:bg-white/5";

  // close on outside click
  useEffect(() => {
    const handleClickOutside = (e: any) => {
      if (menuRef.current && !menuRef.current.contains(e.target)) {
        setOpen(false);
      }
    };

    document.addEventListener("mousedown", handleClickOutside);
    return () => document.removeEventListener("mousedown", handleClickOutside);
  }, []);

  return (
    <>
      <nav className="fixed top-0 left-0 right-0 z-50 backdrop-blur-xl bg-[#0a0412]/80 border-b border-white/10">
        <div className="mx-auto px-6 sm:px-10 h-16 flex items-center justify-between">
          
          {/* Logo */}
          <Link href="/" className="flex items-center gap-2">
            <div className="w-9 h-9 rounded-lg bg-gradient-to-br from-purple-600 to-purple-400 flex items-center justify-center font-bold">
              E
            </div>
            <span className="font-bold tracking-tight">
              Elevena<span className="text-purple-400">Hub</span>
            </span>
          </Link>

          {/* Desktop Links */}
          <div className="hidden md:flex items-center gap-2">
            <Link href="/" className={`px-3 py-2 text-sm rounded-lg transition ${linkClass("/")}`}>
              Home
            </Link>

            <Link href="/courses" className={`px-3 py-2 text-sm rounded-lg transition ${linkClass("/courses")}`}>
              Courses
            </Link>

            <Link href="/contact" className={`px-3 py-2 text-sm rounded-lg transition ${linkClass("/contact")}`}>
              Contact
            </Link>
          </div>

          {/* CTA */}
          <div className="hidden md:block">
            <Link
              href="/courses"
              className="px-4 py-2 rounded-lg bg-purple-600 hover:bg-purple-500 text-sm font-semibold shadow-lg shadow-purple-600/30 transition"
            >
              Browse Courses →
            </Link>
          </div>

          {/* Mobile Button */}
          <button
            onClick={() => setOpen(!open)}
            className="md:hidden p-2 rounded-lg hover:bg-white/5 transition"
            aria-label="Toggle navigation menu"
          >
            {open ? <X /> : <Menu />}
          </button>
        </div>
      </nav>

      {/* 🌫️ Background overlay */}
      {open && (
        <div className="fixed inset-0 bg-black/40 backdrop-blur-sm z-40" />
      )}

      {/* 📱 Mobile Menu */}
      {open && (
        <div
          ref={menuRef}
          className="md:hidden fixed top-16 left-0 right-0 z-50 px-4 pb-4 border-t border-white/10 bg-[#0a0412]/95 backdrop-blur-xl"
        >
          <div className="flex flex-col gap-2 mt-3">
            <Link
              onClick={() => setOpen(false)}
              href="/"
              className={`p-3 rounded-lg transition ${linkClass("/")}`}
            >
              Home
            </Link>

            <Link
              onClick={() => setOpen(false)}
              href="/courses"
              className={`p-3 rounded-lg transition ${linkClass("/courses")}`}
            >
              Courses
            </Link>

            <Link
              onClick={() => setOpen(false)}
              href="/contact"
              className={`p-3 rounded-lg transition ${linkClass("/contact")}`}
            >
              Contact
            </Link>

            <Link
              onClick={() => setOpen(false)}
              href="/courses"
              className="mt-2 text-center p-3 rounded-lg bg-purple-600 font-semibold"
            >
              Browse Courses →
            </Link>
          </div>
        </div>
      )}
    </>
  );
}