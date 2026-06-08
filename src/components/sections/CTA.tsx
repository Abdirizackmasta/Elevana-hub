import Link from "next/link";

export default function CTA() {
  return (
    <section className="max-w-6xl mx-auto px-4 sm:px-6 lg:px-10 pb-24">
      <div className="relative overflow-hidden rounded-3xl bg-gradient-to-br from-purple-900 to-purple-600 p-10 text-center">

        <div className="absolute inset-0 opacity-20 bg-[radial-gradient(circle_at_top_right,white,transparent_60%)]" />

        <h2 className="text-3xl sm:text-4xl font-extrabold mb-4">
          Ready to level up?
        </h2>

        <p className="text-white/80 mb-8">
          Join thousands already learning with ElevenaHub.
        </p>

        <Link
          href="/courses"
          className="inline-block bg-white text-purple-700 font-semibold px-6 py-3 rounded-xl hover:scale-105 transition"
        >
          Start Learning Free
        </Link>
      </div>
    </section>
  );
}