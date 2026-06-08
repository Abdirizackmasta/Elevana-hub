import Link from "next/link";

export default function Footer() {
  return (
    <footer className="border-t border-white/10 py-10 px-4 sm:px-6 lg:px-10">
      <div className="max-w-6xl mx-auto flex flex-col md:flex-row items-center justify-between gap-6">

        {/* Logo */}
        <div className="flex items-center gap-2">
          <div className="w-8 h-8 rounded-lg bg-gradient-to-br from-purple-600 to-purple-400 flex items-center justify-center font-bold">
            E
          </div>
          <span className="font-semibold">
            Elevena<span className="text-purple-400">Hub</span>
          </span>
        </div>

        {/* Copy */}
        <p className="text-sm text-gray-500 text-center">
          © 2026 ElevenaHub. All rights reserved.
        </p>

        {/* Links */}
        <div className="flex items-center gap-6 text-sm text-gray-400">
          <Link href="/" className="hover:text-white transition">
            Home
          </Link>
          <Link href="/courses" className="hover:text-white transition">
            Courses
          </Link>
          <Link href="/contact" className="hover:text-white transition">
            Contact
          </Link>
        </div>

      </div>
    </footer>
  );
}