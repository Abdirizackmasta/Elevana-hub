export default function Features() {
  const features = [
    {
      icon: "🎯",
      title: "Industry-Aligned Curriculum",
      desc: "Built with input from hiring managers so you learn what actually gets you hired.",
    },
    {
      icon: "🏆",
      title: "Recognized Certifications",
      desc: "Earn certificates you can confidently put on LinkedIn and job applications.",
    },
    {
      icon: "📱",
      title: "Learn Anywhere, Anytime",
      desc: "Seamless access across devices with offline learning support.",
    },
    {
      icon: "🤝",
      title: "Mentorship & Community",
      desc: "Get feedback, join discussions, and learn with real humans, not just videos.",
    },
    {
      icon: "⚡",
      title: "Hands-On Projects",
      desc: "Build portfolio-ready projects that prove your skills to employers.",
    },
    {
      icon: "💬",
      title: "Multilingual Support",
      desc: "Learn in your language with 24/7 support whenever you're stuck.",
    },
  ];

  return (
    <section className="relative py-24 px-4 sm:px-6 lg:px-10 max-w-6xl mx-auto">

      {/* subtle glow background */}
      <div className="absolute inset-0 -z-10">
        <div className="absolute top-10 left-1/2 -translate-x-1/2 w-[600px] h-[400px] bg-purple-600/10 blur-3xl rounded-full" />
      </div>

      {/* heading */}
      <div className="mb-14">
        <p className="text-xs tracking-[0.3em] text-purple-300 uppercase">
          Why ElevenaHub
        </p>

        <h2 className="text-3xl sm:text-4xl lg:text-5xl font-extrabold leading-tight mt-3">
          Built for the{" "}
          <span className="text-gray-400">modern</span>
          <br />
          learner
        </h2>
      </div>

      {/* grid */}
      <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
        {features.map((f, i) => (
          <div
            key={i}
            className="relative group rounded-2xl border border-white/10 bg-white/5 p-6 overflow-hidden transition duration-300 hover:-translate-y-1 hover:border-purple-500/40"
          >
            {/* glow overlay */}
            <div className="absolute inset-0 opacity-0 group-hover:opacity-100 transition bg-gradient-to-br from-purple-600/10 to-transparent" />

            {/* icon */}
            <div className="w-12 h-12 rounded-xl bg-gradient-to-br from-purple-600 to-purple-400 flex items-center justify-center text-xl mb-5 shadow-lg shadow-purple-500/20">
              {f.icon}
            </div>

            {/* content */}
            <h3 className="text-lg font-semibold mb-2">{f.title}</h3>
            <p className="text-sm text-gray-400 leading-relaxed">
              {f.desc}
            </p>
          </div>
        ))}
      </div>
    </section>
  );
}