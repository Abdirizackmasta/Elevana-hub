"use client";

import { useState } from "react";
import Link from "next/link";

export default function Navbar() {
  const [open, setOpen] = useState(false);

  return (
    <nav className="fixed top-0 left-0 right-0 z-50 backdrop-blur-xl bg-[#0a0412]/80 border-b border-white/10">
      <div className="max-w-6xl mx-auto px-4 sm:px-6 lg:px-10 h-16 flex items-center justify-between">

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
          <Link className="px-3 py-2 text-sm text-gray-300 hover:text-white hover:bg-white/5 rounded-lg" href="/">
            Home
          </Link>
          <Link className="px-3 py-2 text-sm text-gray-300 hover:text-white hover:bg-white/5 rounded-lg" href="/courses">
            Courses
          </Link>
          <Link className="px-3 py-2 text-sm text-gray-300 hover:text-white hover:bg-white/5 rounded-lg" href="/contact">
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
          className="md:hidden flex flex-col gap-1.5"
        >
          <span className="w-6 h-0.5 bg-white"></span>
          <span className="w-6 h-0.5 bg-white"></span>
          <span className="w-6 h-0.5 bg-white"></span>
        </button>
      </div>

      {/* Mobile Menu */}
      {open && (
        <div className="md:hidden px-4 pb-4 border-t border-white/10 bg-[#0a0412]/95 backdrop-blur-xl">
          <div className="flex flex-col gap-2 mt-3">
            <Link onClick={() => setOpen(false)} className="p-3 rounded-lg hover:bg-white/5" href="/">
              Home
            </Link>
            <Link onClick={() => setOpen(false)} className="p-3 rounded-lg hover:bg-white/5" href="/courses">
              Courses
            </Link>
            <Link onClick={() => setOpen(false)} className="p-3 rounded-lg hover:bg-white/5" href="/contact">
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
    </nav>
  );
}