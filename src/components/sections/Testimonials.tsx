export default function Testimonials() {
  const data = [
    {
      name: "Amina K.",
      role: "Junior Developer, TechCo",
      text: "ElevenaHub completely changed my career trajectory. I went from zero coding skills to landing a junior dev role in just 8 months.",
      avatar: "A",
    },
    {
      name: "David O.",
      role: "Product Designer, StartupXYZ",
      text: "The UI/UX course was super structured. The mentor feedback made a huge difference in my portfolio.",
      avatar: "D",
    },
    {
      name: "Fatima M.",
      role: "Data Analyst, Finance Corp",
      text: "Best learning platform I’ve used. The community alone is worth it.",
      avatar: "F",
    },
  ];

  return (
    <section className="max-w-6xl mx-auto px-4 sm:px-6 lg:px-10 py-24">
      <p className="text-xs tracking-[0.3em] text-purple-300 uppercase mb-3">
        Testimonials
      </p>

      <h2 className="text-3xl sm:text-4xl font-extrabold mb-12">
        What our <span className="text-gray-400">students</span> say
      </h2>

      <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
        {data.map((t, i) => (
          <div
            key={i}
            className="rounded-2xl border border-white/10 bg-white/5 p-6 hover:border-purple-500/30 transition"
          >
            <div className="text-yellow-400 mb-4">★★★★★</div>

            <p className="text-sm text-gray-400 italic leading-relaxed mb-6">
              "{t.text}"
            </p>

            <div className="flex items-center gap-3">
              <div className="w-10 h-10 rounded-full bg-gradient-to-br from-purple-600 to-purple-400 flex items-center justify-center font-bold">
                {t.avatar}
              </div>

              <div>
                <p className="text-sm font-semibold">{t.name}</p>
                <p className="text-xs text-gray-500">{t.role}</p>
              </div>
            </div>
          </div>
        ))}
      </div>
    </section>
  );
}