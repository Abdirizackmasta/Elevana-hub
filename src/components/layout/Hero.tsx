import Link from "next/link";

export default function Hero() {
  return (
    <section className="relative overflow-hidden pt-28 pb-20">

      {/* BACKGROUND GLOW LAYERS (exact HTML match) */}
      <div className="absolute inset-0 -z-10">
        <div className="absolute inset-0 bg-[#0a0412]" />

        <div className="absolute inset-0 opacity-60">
          <div className="absolute w-[700px] h-[500px] top-[-120px] right-[-120px] bg-purple-600/20 blur-3xl rounded-full" />
          <div className="absolute w-[500px] h-[400px] bottom-[-120px] left-[-120px] bg-purple-900/40 blur-3xl rounded-full" />
        </div>

        {/* grid overlay */}
        <div
          className="absolute inset-0 opacity-[0.05]"
          style={{
            backgroundImage:
              "linear-gradient(#7c3aed 1px, transparent 1px), linear-gradient(90deg, #7c3aed 1px, transparent 1px)",
            backgroundSize: "60px 60px",
          }}
        />
      </div>

      <div className="max-w-6xl mx-auto px-4 sm:px-6 lg:px-10 grid lg:grid-cols-2 gap-14 items-center">

        {/* LEFT SIDE */}
        <div>

          {/* badge */}
          <div className="inline-flex items-center gap-2 px-4 py-2 rounded-full bg-purple-500/10 border border-purple-500/30 text-purple-300 text-xs tracking-wide mb-6">
            ✦ Online Learning Platform
          </div>

          {/* headline */}
          <h1 className="font-extrabold leading-[1.05] text-4xl sm:text-5xl lg:text-6xl">
            Skills That{" "}
            <span className="bg-gradient-to-r from-purple-400 to-purple-200 text-transparent bg-clip-text">
              Move You
            </span>
            <br />
            Forward
          </h1>

          {/* subtext */}
          <p className="mt-6 text-gray-400 text-base leading-relaxed max-w-xl">
            ElevenaHub is your gateway to world-class professional education.
            Learn in-demand skills, earn certifications, and accelerate your career
            — at your own pace.
          </p>

          {/* buttons */}
          <div className="mt-8 flex flex-col sm:flex-row gap-4">
            <Link href="/courses" className="px-6 py-3 rounded-xl bg-gradient-to-r from-purple-600 to-purple-400 font-semibold shadow-lg shadow-purple-600/30 hover:scale-105 transition">
              Explore Courses
            </Link>

            <button className="px-6 py-3 rounded-xl border border-white/10 text-gray-300 hover:text-white hover:bg-white/5 transition">
              ▶ Watch Demo
            </button>
          </div>

          {/* stats */}
          <div className="mt-10 flex gap-10 flex-wrap">
            <div>
              <p className="text-2xl font-bold">
                12K<span className="text-purple-400">+</span>
              </p>
              <p className="text-xs text-gray-500">Active Students</p>
            </div>

            <div>
              <p className="text-2xl font-bold">
                200<span className="text-purple-400">+</span>
              </p>
              <p className="text-xs text-gray-500">Expert Courses</p>
            </div>

            <div>
              <p className="text-2xl font-bold">
                98<span className="text-purple-400">%</span>
              </p>
              <p className="text-xs text-gray-500">Satisfaction Rate</p>
            </div>
          </div>
        </div>

        {/* RIGHT SIDE */}
        <div className="relative">

          {/* floating badge 1 */}
          <div className="absolute -top-6 right-10 bg-purple-600 text-white px-4 py-2 rounded-xl text-xs shadow-lg animate-pulse">
            🎓 New Cert Earned!
          </div>

          {/* main card */}
          <div className="relative rounded-2xl border border-white/10 bg-white/5 backdrop-blur-xl p-6 overflow-hidden">

            <p className="text-xs tracking-widest text-purple-300 mb-4 uppercase">
              Popular This Week
            </p>

            <div className="space-y-4">

              {[
                {
                  icon: "💻",
                  title: "Full-Stack Web Dev",
                  sub: "4,200 students · 42 hrs",
                  tag: "HOT",
                },
                {
                  icon: "📊",
                  title: "Data Analytics Pro",
                  sub: "3,100 students · 38 hrs",
                  tag: "NEW",
                },
                {
                  icon: "🎨",
                  title: "UI/UX Design Master",
                  sub: "2,800 students · 30 hrs",
                  tag: "TOP",
                },
              ].map((c, i) => (
                <div
                  key={i}
                  className="flex items-center gap-4 p-3 rounded-xl bg-white/5 border border-white/10 hover:border-purple-500/30 transition"
                >
                  <div className="text-2xl">{c.icon}</div>

                  <div className="flex-1">
                    <h4 className="font-semibold text-sm">{c.title}</h4>
                    <p className="text-xs text-gray-400">{c.sub}</p>
                  </div>

                  <span className="text-xs px-3 py-1 rounded-full bg-purple-500/20 text-purple-300">
                    {c.tag}
                  </span>
                </div>
              ))}
            </div>

            {/* glow overlay */}
            <div className="absolute top-[-80px] right-[-80px] w-[200px] h-[200px] bg-purple-500/20 blur-3xl rounded-full" />
          </div>

          {/* floating badge 2 */}
          <div className="absolute -bottom-6 left-6 bg-[#1a0a2e] border border-white/10 px-4 py-2 rounded-xl text-xs text-gray-300 shadow-xl">
            ⚡ 47 enrolled today
          </div>
        </div>
      </div>
    </section>
  );
}