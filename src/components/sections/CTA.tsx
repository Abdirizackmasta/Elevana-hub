import Link from "next/link";

export default function CTA() {
  return (
    <section className="max-w-6xl mx-auto px-4 sm:px-6 lg:px-10 pb-24">
      <div className="relative overflow-hidden rounded-3xl bg-[#6F2DE2] p-10 text-center">
        <h2 className="text-3xl sm:text-4xl font-extrabold mb-4 ">
          Ready to level up?
        </h2>

        <p className="text-white/80 mb-8">
          Join thousands already learning with ElevenaHub.
        </p>

        <Link
          href="/courses"
          className="inline-block bg-white text-[#6F2DE2] font-semibold px-6 py-3 rounded-xl hover:scale-105 transition cursor-pointer"
        >
          Start Learning Free
        </Link>
      </div>
    </section>
  );
}
