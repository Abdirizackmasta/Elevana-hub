import Link from "next/link";
import { courses } from "@/lib/courses";

interface CheckoutPageProps {
  searchParams?: {
    course?: string;
  };
}

export default function CheckoutPage({ searchParams }: CheckoutPageProps) {
  const course = searchParams?.course
    ? courses.find((item) => item.slug === searchParams.course || item.id === searchParams.course)
    : undefined;

  if (!course) {
    return (
      <div className="min-h-screen bg-[#0a0412] text-white flex items-center justify-center px-6 py-16">
        <div className="max-w-xl rounded-[2rem] border border-white/10 bg-[#141420] p-10 text-center shadow-[0_20px_80px_rgba(123,63,255,0.18)]">
          <h1 className="text-4xl font-semibold mb-4">No course selected</h1>
          <p className="text-gray-400 mb-8">
            Please choose a course from the catalog before proceeding to checkout.
          </p>
          <Link
            href="/courses"
            className="inline-flex rounded-full bg-purple-600 px-6 py-3 text-sm font-semibold text-white transition hover:bg-purple-500"
          >
            Browse Courses
          </Link>
        </div>
      </div>
    );
  }

  return (
    <div className="min-h-screen bg-[#0a0412] text-white px-6 py-16">
      <div className="mx-auto grid max-w-6xl gap-10 lg:grid-cols-[1.4fr_0.85fr]">
        <section className="space-y-6 rounded-[2rem] border border-white/10 bg-[#141420] p-10 shadow-[0_40px_120px_rgba(123,63,255,0.12)]">
          <p className="text-sm uppercase tracking-[0.3em] text-purple-300">Checkout</p>
          <h1 className="text-4xl font-semibold">Finish your enrollment</h1>
          <p className="max-w-3xl text-gray-400 leading-relaxed">
            Secure your spot in this course and unlock the full curriculum, certificate,
            and lifetime access.
          </p>

          <div className="rounded-[2rem] border border-white/10 bg-[#0f0d19] p-8">
            <div className="flex flex-wrap items-center gap-5">
              <div className={`flex h-20 w-20 items-center justify-center rounded-3xl bg-gradient-to-br ${course.gradient} text-4xl`}>
                {course.icon}
              </div>
              <div>
                <p className="text-sm text-gray-400">Course</p>
                <h2 className="text-2xl font-semibold">{course.title}</h2>
                <p className="text-sm text-gray-400 mt-1">{course.category} · {course.tag}</p>
              </div>
            </div>

            <div className="mt-8 grid gap-4 sm:grid-cols-2">
              <div className="rounded-3xl border border-white/10 bg-[#141420] p-5">
                <p className="text-sm text-gray-400">Duration</p>
                <p className="mt-2 font-semibold">{course.duration}</p>
              </div>
              <div className="rounded-3xl border border-white/10 bg-[#141420] p-5">
                <p className="text-sm text-gray-400">Lessons</p>
                <p className="mt-2 font-semibold">{course.lessons}</p>
              </div>
            </div>

            <div className="mt-8 rounded-3xl border border-white/10 bg-[#0e0c16] p-6">
              <div className="flex items-center justify-between gap-4">
                <p className="text-sm text-gray-400">Total</p>
                <p className="text-3xl font-semibold text-purple-300">{course.price}</p>
              </div>
            </div>
          </div>
        </section>

        <aside className="space-y-6">
          <div className="rounded-[2rem] border border-white/10 bg-[#141420] p-8">
            <h2 className="text-2xl font-semibold mb-4">Payment details</h2>
            <div className="space-y-4">
              <div className="rounded-3xl bg-[#0e0c16] p-5">
                <p className="text-sm text-gray-400">Card</p>
                <p className="mt-2 font-semibold">Visa ending in 1234</p>
              </div>
              <div className="rounded-3xl bg-[#0e0c16] p-5">
                <p className="text-sm text-gray-400">Billing</p>
                <p className="mt-2 font-semibold">Instant access after checkout</p>
              </div>
            </div>
            <button className="mt-8 w-full rounded-full bg-purple-600 px-6 py-4 text-base font-semibold text-white transition hover:bg-purple-500">
              Complete Purchase
            </button>
          </div>

          <div className="rounded-[2rem] border border-white/10 bg-[#141420] p-8">
            <h3 className="text-lg font-semibold">What’s included</h3>
            <ul className="mt-4 space-y-3 text-gray-300">
              <li>✔ Lifetime access to course content</li>
              <li>✔ Certificate of completion</li>
              <li>✔ Mobile and desktop access</li>
              <li>✔ Ongoing course updates</li>
            </ul>
          </div>
        </aside>
      </div>
    </div>
  );
}
