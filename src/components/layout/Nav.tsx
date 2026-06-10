"use client";

import { useEffect, useRef, useState } from "react";
import Link from "next/link";
import { usePathname } from "next/navigation";
import { X, Menu } from "lucide-react";

export default function Navbar() {
  const [open, setOpen] = useState(false);
  const [underlineStyle, setUnderlineStyle] = useState({ left: 0, width: 0 });

  const menuRef = useRef<HTMLDivElement | null>(null);
  const pathname = usePathname();
  const linkRefs = useRef<Record<string, HTMLAnchorElement | null>>({});

  const links = [
    { name: "Home", path: "/" },
    { name: "Courses", path: "/courses" },
    { name: "Contact", path: "/contact" },
  ];

  // lock scroll
  useEffect(() => {
    document.body.style.overflow = open ? "hidden" : "";
  }, [open]);

  // outside click
  useEffect(() => {
    const handleClickOutside = (e: MouseEvent) => {
      if (menuRef.current && !menuRef.current.contains(e.target as Node)) {
        setOpen(false);
      }
    };

    document.addEventListener("mousedown", handleClickOutside);
    return () => document.removeEventListener("mousedown", handleClickOutside);
  }, []);

  // 🎯 move underline when route changes
  useEffect(() => {
    const activeLink = linkRefs.current[pathname];
    if (activeLink) {
      const rect = activeLink.getBoundingClientRect();
      const parentRect = activeLink.parentElement?.getBoundingClientRect();

      if (parentRect) {
        setUnderlineStyle({
          left: rect.left - parentRect.left,
          width: rect.width,
        });
      }
    }
  }, [pathname]);

  return (
    <>
      <nav className="fixed top-0 left-0 right-0 z-50 w-full backdrop-blur-xl bg-[#0a0412]/80 border-b border-white/10">
        <div className="mx-auto flex h-16 w-full max-w-7xl items-center justify-between px-4 sm:px-6 lg:px-10">

          {/* Logo */}
          <Link href="/" className="flex items-center gap-2 flex-shrink-0">
            <div className="w-9 h-9 rounded-lg bg-gradient-to-br from-purple-600 to-purple-400 flex items-center justify-center font-bold">
              E
            </div>
            <span className="font-bold tracking-tight">
              Elevena<span className="text-purple-400">Hub</span>
            </span>
          </Link>

          {/* Desktop Links */}
          <div className="hidden md:flex relative items-center gap-2">
            {links.map((link) => (
              <Link
                key={link.path}
                href={link.path}
                ref={(el) => {
                  linkRefs.current[link.path] = el;
                }}
                className={`relative px-3 py-2 text-sm rounded-lg transition ${
                  pathname === link.path
                    ? "text-purple-400 font-semibold bg-purple-600/30"
                    : "text-gray-300 hover:text-white"
                }`}
              >
                {link.name}
              </Link>
            ))}
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

          {/* Mobile toggle */}
          <button
            onClick={() => setOpen(!open)}
            className="md:hidden p-2 rounded-lg hover:bg-white/5 transition flex-shrink-0"
          >
            {open ? <X /> : <Menu />}
          </button>
        </div>
      </nav>

      {/* 🌫️ overlay */}
      {open && (
        <div className="fixed inset-0 z-40 bg-black/50 backdrop-blur-sm" />
      )}

      {/* 📱 mobile menu */}
      {open && (
        <div
          ref={menuRef}
          className="fixed top-16 left-0 right-0 z-50 w-full border-t border-white/10 bg-[#0a0412]/95 backdrop-blur-xl"
        >
          <div className="flex flex-col gap-2 p-4">
            {links.map((link) => (
              <Link
                key={link.path}
                onClick={() => setOpen(false)}
                href={link.path}
                className={`p-3 rounded-lg transition ${
                  pathname === link.path
                    ? "text-purple-400 font-semibold"
                    : "text-gray-300 hover:text-white"
                }`}
              >
                {link.name}
              </Link>
            ))}

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