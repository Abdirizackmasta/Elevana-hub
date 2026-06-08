"use client";

import { useState } from "react";

export default function ContactPage() {
  const [sent, setSent] = useState(false);

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    setSent(true);
    setTimeout(() => setSent(false), 4000);
  };

  return (
    <div className="min-h-screen bg-[#0a0412] text-white pt-[100px]">
      {/* HERO */}
      <div className="relative text-center px-6 py-[80px] pb-[60px]">
        {/* glow */}
        <div className="absolute left-1/2 -translate-x-1/2 top-0 w-[500px] h-[300px] bg-[radial-gradient(ellipse,rgba(109,33,232,0.18),transparent_70%)] pointer-events-none" />

        <div className="relative z-10">
          <div className="text-[12px] tracking-[3px] uppercase text-[#c084fc] font-semibold mb-4">
            Get in Touch
          </div>

          <h1 className="text-[clamp(36px,4vw,62px)] font-extrabold tracking-[-2px] font-[Syne]">
            We'd love to{" "}
            <span className="bg-gradient-to-r from-[#9d4edd] to-[#c084fc] bg-clip-text text-transparent">
              hear from you
            </span>
          </h1>

          <p className="text-[17px] text-[#b8a0d4] max-w-[520px] mx-auto mt-5 leading-7">
            Have a question, partnership inquiry, or just want to say hello? Reach out and our team will get back to you within 24 hours.
          </p>
        </div>
      </div>

      {/* CONTENT */}
      <div className="max-w-[1200px] mx-auto px-6 pb-[80px] grid grid-cols-1 lg:grid-cols-2 gap-[60px]">
        
        {/* FORM */}
        <form
          onSubmit={handleSubmit}
          className="bg-[rgba(109,33,232,0.08)] border border-[rgba(155,80,240,0.2)] rounded-[24px] p-[48px]"
        >
          <h2 className="text-[26px] font-bold font-[Syne] mb-8">
            Send us a message
          </h2>

          {/* row */}
          <div className="grid grid-cols-1 md:grid-cols-2 gap-4 mb-5">
            <div>
              <label className="text-[13px] text-[#b8a0d4] font-semibold mb-2 block">
                First Name
              </label>
              <input
                placeholder="Amina"
                className="w-full bg-white/5 border border-[rgba(155,80,240,0.2)] rounded-xl px-4 py-[13px] text-white outline-none focus:border-[#6b21e8] focus:ring-2 focus:ring-[#6b21e8]/20"
              />
            </div>

            <div>
              <label className="text-[13px] text-[#b8a0d4] font-semibold mb-2 block">
                Last Name
              </label>
              <input
                placeholder="Kamau"
                className="w-full bg-white/5 border border-[rgba(155,80,240,0.2)] rounded-xl px-4 py-[13px] text-white outline-none focus:border-[#6b21e8] focus:ring-2 focus:ring-[#6b21e8]/20"
              />
            </div>
          </div>

          {/* email */}
          <div className="mb-5">
            <label className="text-[13px] text-[#b8a0d4] font-semibold mb-2 block">
              Email Address
            </label>
            <input
              placeholder="hello@example.com"
              className="w-full bg-white/5 border border-[rgba(155,80,240,0.2)] rounded-xl px-4 py-[13px] text-white outline-none focus:border-[#6b21e8] focus:ring-2 focus:ring-[#6b21e8]/20"
            />
          </div>

          {/* subject */}
          <div className="mb-5">
            <label className="text-[13px] text-[#b8a0d4] font-semibold mb-2 block">
              Subject
            </label>
            <select className="w-full bg-white/5 border border-[rgba(155,80,240,0.2)] rounded-xl px-4 py-[13px] text-white outline-none focus:border-[#6b21e8] focus:ring-2 focus:ring-[#6b21e8]/20">
              <option className="bg-[#1a0a2e]">Course Inquiry</option>
              <option className="bg-[#1a0a2e]">Partnership / Business</option>
              <option className="bg-[#1a0a2e]">Technical Support</option>
              <option className="bg-[#1a0a2e]">Feedback</option>
              <option className="bg-[#1a0a2e]">Other</option>
            </select>
          </div>

          {/* message */}
          <div className="mb-6">
            <label className="text-[13px] text-[#b8a0d4] font-semibold mb-2 block">
              Message
            </label>
            <textarea
              placeholder="Tell us how we can help you..."
              className="w-full min-h-[120px] bg-white/5 border border-[rgba(155,80,240,0.2)] rounded-xl px-4 py-[13px] text-white outline-none resize-y focus:border-[#6b21e8] focus:ring-2 focus:ring-[#6b21e8]/20"
            />
          </div>

          {/* button */}
          <button
            type="submit"
            className="w-full bg-gradient-to-r from-[#6b21e8] to-[#9d4edd] text-white font-semibold py-[14px] rounded-xl shadow-[0_8px_32px_rgba(109,33,232,0.4)] hover:-translate-y-0.5 transition-all"
          >
            Send Message →
          </button>

          {/* success */}
          {sent && (
            <p className="text-center text-[#c084fc] font-semibold mt-4">
              ✓ Message sent! We'll get back to you within 24 hours.
            </p>
          )}
        </form>

        {/* INFO SIDE */}
        <div className="flex flex-col gap-6">
          
          {/* email card */}
          <div className="bg-[rgba(109,33,232,0.08)] border border-[rgba(155,80,240,0.2)] rounded-[20px] p-[32px] hover:border-[rgba(109,33,232,0.4)] transition">
            <div className="w-[48px] h-[48px] rounded-[14px] bg-gradient-to-br from-[#6b21e8] to-[#9d4edd] flex items-center justify-center text-[22px] mb-4">
              📧
            </div>
            <h3 className="font-[Syne] font-bold mb-2">Email Us</h3>
            <p className="text-[#b8a0d4] text-sm leading-6">
              General: <br />
              <a className="text-[#c084fc]" href="mailto:hello@elevenahub.com">
                hello@elevenahub.com
              </a>
            </p>

            <p className="text-[#b8a0d4] text-sm mt-2">
              Support: <br />
              <a className="text-[#c084fc]" href="mailto:support@elevenahub.com">
                support@elevenahub.com
              </a>
            </p>
          </div>

          {/* HQ */}
          <div className="bg-[rgba(109,33,232,0.08)] border border-[rgba(155,80,240,0.2)] rounded-[20px] p-[32px] hover:border-[rgba(109,33,232,0.4)] transition">
            <div className="w-[48px] h-[48px] rounded-[14px] bg-gradient-to-br from-[#6b21e8] to-[#9d4edd] flex items-center justify-center text-[22px] mb-4">
              🌍
            </div>
            <h3 className="font-[Syne] font-bold mb-2">Headquarters</h3>
            <p className="text-[#b8a0d4] text-sm leading-6">
              ElevenaHub Learning Ltd.<br />
              Nairobi, Kenya<br />
              Available globally, online-first
            </p>
          </div>

          {/* response */}
          <div className="bg-[rgba(109,33,232,0.08)] border border-[rgba(155,80,240,0.2)] rounded-[20px] p-[32px] hover:border-[rgba(109,33,232,0.4)] transition">
            <div className="w-[48px] h-[48px] rounded-[14px] bg-gradient-to-br from-[#6b21e8] to-[#9d4edd] flex items-center justify-center text-[22px] mb-4">
              ⏰
            </div>
            <h3 className="font-[Syne] font-bold mb-2">Response Time</h3>
            <p className="text-[#b8a0d4] text-sm leading-6">
              Support available Mon–Fri, 8am–6pm EAT. We usually respond within{" "}
              <span className="text-[#c084fc] font-semibold">
                2–4 hours
              </span>
              .
            </p>
          </div>

          {/* socials */}
          <div className="bg-[rgba(109,33,232,0.08)] border border-[rgba(155,80,240,0.2)] rounded-[20px] p-[32px]">
            <h3 className="font-[Syne] font-bold mb-5">
              Follow ElevenaHub
            </h3>

            <div className="grid grid-cols-2 gap-3">
              {[
                ["📘", "Facebook", "@ElevenaHub"],
                ["📸", "Instagram", "@elevenahub"],
                ["🐦", "X / Twitter", "@ElevenaHub"],
                ["▶", "YouTube", "ElevenaHub"],
                ["💼", "LinkedIn", "ElevenaHub"],
                ["🎵", "TikTok", "@elevenahub"],
              ].map(([icon, name, handle]) => (
                <a
                  key={name}
                  className="flex items-center gap-3 p-3 rounded-xl bg-white/5 border border-white/10 hover:border-[#6b21e8] hover:bg-[#6b21e8]/10 transition"
                >
                  <div className="w-[36px] h-[36px] rounded-lg flex items-center justify-center">
                    {icon}
                  </div>
                  <div>
                    <div className="text-[13px] font-semibold">{name}</div>
                    <div className="text-[12px] text-[#b8a0d4]">
                      {handle}
                    </div>
                  </div>
                </a>
              ))}
            </div>
          </div>
        </div>
      </div>

      {/* FAQ */}
      <div className="max-w-[1200px] mx-auto px-6 pb-[60px]">
        <div className="bg-[rgba(109,33,232,0.08)] border border-[rgba(155,80,240,0.2)] rounded-[24px] p-[48px]">
          <div className="text-[12px] uppercase tracking-[3px] text-[#c084fc] font-semibold mb-3">
            FAQ
          </div>

          <h2 className="text-[32px] font-extrabold font-[Syne] mb-10">
            Quick <span className="text-[#b8a0d4]">answers</span>
          </h2>

          <div className="grid md:grid-cols-2 gap-8">
            {[
              ["Do courses expire?", "No. Lifetime access, always."],
              ["Are certificates recognized?", "Yes globally by employers."],
              ["Can I get a refund?", "30-day money-back guarantee."],
              ["Is there a free trial?", "Yes, selected free courses available."],
            ].map(([q, a]) => (
              <div key={q}>
                <h4 className="font-[Syne] font-bold mb-2">{q}</h4>
                <p className="text-[#b8a0d4] text-sm leading-6">{a}</p>
              </div>
            ))}
          </div>
        </div>
      </div>
    </div>
  );
}