import Link from "next/link";
import { courses } from "../../../lib/courses";
import type { Course } from "../../../types/course";

export default async function CourseDetailsPage({ params }: { params: Promise<{ id: string }> }) {
  const { id } = await params;
  const course = courses.find(
    (c: Course) => c.slug === id || c.id === id,
  );

  if (!course) {
    return (
      <div className="min-h-screen bg-[#0a0412] text-white flex items-center justify-center px-6">
        <div className="max-w-xl text-center">
          <h1 className="text-4xl font-bold mb-4">Course not found</h1>
          <p className="text-gray-400 mb-6">
            The course you selected does not exist. Please choose another course from the catalog.
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
    <div className="min-h-screen bg-[#0a0412] text-white">
      <div className="relative overflow-hidden">
        <div className="absolute inset-x-0 top-0 h-72 bg-gradient-to-b from-purple-950/70 to-transparent" />
        <div className="max-w-6xl mx-auto px-6 pb-20 pt-28">
          <div className="grid gap-10 lg:grid-cols-[1.9fr_1fr] items-start">
            <section className="space-y-6">
              <div className="rounded-[2rem] border border-white/10 bg-[#141420]/95 p-8 shadow-[0_40px_120px_rgba(123,63,255,0.12)] backdrop-blur-xl">
                <div className="inline-flex items-center gap-2 rounded-full border border-purple-500/20 bg-purple-500/10 px-4 py-2 text-sm uppercase tracking-[0.25em] text-purple-300">
                  {course.tag}
                </div>
                <h1 className="mt-6 text-4xl font-semibold tracking-tight sm:text-5xl font-[Syne]">
                  {course.title}
                </h1>
                <p className="mt-4 max-w-3xl text-gray-300 leading-relaxed">{course.subtitle}</p>
                <div className="mt-6 grid gap-3 sm:grid-cols-3">
                  <div className="rounded-3xl bg-[#0e0c16] p-5 text-center">
                    <p className="text-sm text-gray-400">Rating</p>
                    <p className="mt-2 text-xl font-bold text-purple-300">{course.rating}</p>
                  </div>
                  <div className="rounded-3xl bg-[#0e0c16] p-5 text-center">
                    <p className="text-sm text-gray-400">Lessons</p>
                    <p className="mt-2 text-xl font-bold">{course.lessons}</p>
                  </div>
                  <div className="rounded-3xl bg-[#0e0c16] p-5 text-center">
                    <p className="text-sm text-gray-400">Duration</p>
                    <p className="mt-2 text-xl font-bold">{course.duration}</p>
                  </div>
                </div>
                <div className="mt-8 grid gap-4 sm:grid-cols-2">
                  <div className="rounded-3xl border border-white/10 bg-[#0e0c16] p-5">
                    <p className="text-sm text-gray-400">Language</p>
                    <p className="mt-2 font-semibold">{course.language}</p>
                  </div>
                  <div className="rounded-3xl border border-white/10 bg-[#0e0c16] p-5">
                    <p className="text-sm text-gray-400">Certificate</p>
                    <p className="mt-2 font-semibold">{course.certificate ? "Included" : "Not included"}</p>
                  </div>
                </div>
              </div>

              <div className="grid gap-6 lg:grid-cols-[1fr_0.9fr]">
                <section className="rounded-[2rem] border border-white/10 bg-[#141420] p-8">
                  <h2 className="text-2xl font-semibold mb-4">What you'll learn</h2>
                  <ul className="space-y-3 text-gray-300">
                    {course.learn.map((item: string, index: number) => (
                      <li key={index} className="rounded-3xl border border-white/10 bg-[#0e0c16] p-4">
                        {item}
                      </li>
                    ))}
                  </ul>
                </section>

                <section className="rounded-[2rem] border border-white/10 bg-[#141420] p-8">
                  <h2 className="text-2xl font-semibold mb-4">Course requirements</h2>
                  <ul className="space-y-3 text-gray-300">
                    {course.requirements.map((item: string, index: number) => (
                      <li key={index} className="rounded-3xl border border-white/10 bg-[#0e0c16] p-4">
                        {item}
                      </li>
                    ))}
                  </ul>
                </section>
              </div>

              <section className="space-y-4">
                <h2 className="text-2xl font-semibold">Curriculum</h2>
                <div className="space-y-4">
                  {course.modules.map((module: Course["modules"][number], index: number) => (
                    <details key={index} className="overflow-hidden rounded-[2rem] border border-white/10 bg-[#141420]">
                      <summary className="cursor-pointer px-6 py-5 text-lg font-semibold text-white">
                        {module.title} — {module.duration}
                      </summary>
                      <div className="space-y-4 border-t border-white/5 px-6 py-5 bg-[#0f0d19]">
                        {module.lessons.map((lesson: Course["modules"][number]["lessons"][number], lessonIndex: number) => (
                          <div key={lessonIndex} className="rounded-3xl border border-white/5 bg-[#12101d] p-4">
                            <div className="flex items-center justify-between gap-4">
                              <p className="font-medium">{lesson.title}</p>
                              <span className="text-sm text-gray-400">{lesson.duration}</span>
                            </div>
                            <p className="mt-2 text-sm text-gray-400">{lesson.description}</p>
                          </div>
                        ))}
                      </div>
                    </details>
                  ))}
                </div>
              </section>
            </section>

            <aside className="space-y-6">
              <div className="rounded-[2rem] border border-white/10 bg-[#141420] p-8 text-center">
                <div className={`mx-auto mb-6 flex h-24 w-24 items-center justify-center rounded-3xl bg-gradient-to-br ${course.gradient} text-5xl`}>
                  {course.icon}
                </div>
                <p className="text-sm text-gray-400 uppercase tracking-[0.3em]">Course access</p>
                <p className="mt-4 text-5xl font-semibold text-purple-300">{course.price}</p>
                <p className="mt-3 text-sm text-gray-400">One-time purchase · Lifetime access</p>
                <Link
                  href={`/checkout?course=${course.slug}`}
                  className="mt-8 inline-flex w-full items-center justify-center rounded-full bg-purple-600 px-6 py-4 text-base font-semibold text-white transition hover:bg-purple-500"
                >
                  Buy & enroll now
                </Link>
                <div className="mt-6 space-y-3 text-left text-sm text-gray-300">
                  <div className="rounded-3xl border border-white/10 bg-[#0e0c16] p-4">
                    <p className="font-semibold">{course.students.toLocaleString()} students enrolled</p>
                  </div>
                  <div className="rounded-3xl border border-white/10 bg-[#0e0c16] p-4">
                    <p className="font-semibold">{course.reviews} reviews</p>
                  </div>
                </div>
              </div>
            </aside>
          </div>
        </div>
      </div>
    </div>
  );
}
