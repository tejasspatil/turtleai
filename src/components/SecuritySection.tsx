"use client";

import { motion } from "framer-motion";

const ease = [0.22, 1, 0.36, 1] as const;

const pillars = [
  {
    id: "observability",
    eyebrow: "observability & evals",
    title: "know when your AI drifts.",
    titleAccent: "before it matters.",
    description:
      "self-learning improvement through traces, spans, and simulation. every run is tracked. every degradation is flagged. AI suggests fixes — you approve before they're applied.",
    highlights: [
      "real-time traces and spans for every agent action",
      "per-run simulation and retroactive testing",
      "AI-suggested fixes with human approval gate",
      "failure detection and drift alerting",
    ],
    // Crosshair/scope — precision drift detection, catching issues before they matter
    icon: (
      <svg className="w-6 h-6" fill="none" viewBox="0 0 24 24" stroke="currentColor" strokeWidth={1.5}>
        <circle cx="12" cy="12" r="9" />
        <circle cx="12" cy="12" r="3" />
        <path strokeLinecap="round" d="M12 3v3M12 18v3M3 12h3M18 12h3" />
      </svg>
    ),
  },
  {
    id: "cost",
    eyebrow: "cost optimization",
    title: "the right model for every step.",
    titleAccent: "not the most expensive one.",
    description:
      "intelligent cost routing picks the right model based on what each process step actually requires. high reasoning gets a powerful model. low reasoning gets a cheaper one. no reasoning? it runs as code.",
    highlights: [
      "automatic task-complexity-based model selection",
      "full visibility into what's driving spend",
      "route deterministic tasks to code, not LLMs",
      "real-time cost breakdown per agent and run",
    ],
    // Sliders/equalizer — tuning each step to the right level of reasoning
    icon: (
      <svg className="w-6 h-6" fill="none" viewBox="0 0 24 24" stroke="currentColor" strokeWidth={1.5}>
        <path strokeLinecap="round" strokeLinejoin="round" d="M3 5h2m0 0a2 2 0 1 0 4 0 2 2 0 0 0-4 0m0 0h12M3 12h8m0 0a2 2 0 1 0 4 0 2 2 0 0 0-4 0m0 0h6M3 19h12m0 0a2 2 0 1 0 4 0 2 2 0 0 0-4 0m0 0h2" />
      </svg>
    ),
  },
  {
    id: "security",
    eyebrow: "security",
    title: "agents have identities.",
    titleAccent: "and boundaries.",
    description:
      "agentic access management and non-human identity (NHI) policy enforcement. every agent has defined intents, tools, and sessions — with platform-level guardrails enforced across every execution.",
    highlights: [
      "agentic identity management",
      "session audit logs",
      "NHI policy enforcement",
      "per-identity tool scoping",
    ],
    // ID card with person — agent identities, who each agent is and what it can do
    icon: (
      <svg className="w-6 h-6" fill="none" viewBox="0 0 24 24" stroke="currentColor" strokeWidth={1.5}>
        <rect x="2" y="6" width="20" height="14" rx="2" />
        <circle cx="9" cy="11.5" r="2" />
        <path strokeLinecap="round" strokeLinejoin="round" d="M5 19a4 4 0 0 1 8 0" />
        <path strokeLinecap="round" d="M15 10h4M15 14h2.5" />
      </svg>
    ),
  },
];

export default function SecuritySection() {
  return (
    <section id="security" className="py-24 lg:py-36 bg-[#edf1f9] border-y border-[#dde4f0] relative overflow-hidden">

      <div className="mx-auto max-w-[1240px] px-6 lg:px-8 relative z-10">

        {/* Header */}
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true, margin: "-80px" }}
          transition={{ duration: 0.6, ease }}
          className="max-w-[640px] mx-auto text-center mb-16 lg:mb-20"
        >
          <p className="text-[13px] font-semibold text-accent normal-case tracking-[0.12em] mb-4">
            the platform
          </p>
          <h2 className="text-[32px] sm:text-[40px] lg:text-[52px] font-bold text-navy tracking-[-0.03em] leading-[1.1]">
            every layer your AI deployment needs.
            <br />
            <span className="text-navy/40">built into one platform.</span>
          </h2>
        </motion.div>

        {/* Pillars Grid */}
        <div className="grid md:grid-cols-3 gap-5 lg:gap-6">
          {pillars.map((pillar, i) => (
            <motion.div
              key={pillar.id}
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true, margin: "-60px" }}
              transition={{ delay: i * 0.1, duration: 0.55, ease }}
              className="group relative bg-white border border-border rounded-2xl p-7 lg:p-8 hover:border-accent/30 shadow-[0_2px_12px_rgba(27,42,74,0.06)] hover:shadow-[0_8px_32px_rgba(27,42,74,0.10)] transition-all duration-300"
            >
              {/* Top accent line on hover */}
              <div className="absolute top-0 left-6 right-6 h-px bg-gradient-to-r from-transparent via-accent/0 to-transparent group-hover:via-accent/40 transition-all duration-500 rounded-full" />

              {/* Icon */}
              <div className="text-accent mb-6">
                {pillar.icon}
              </div>

              {/* Eyebrow */}
              <p className="text-[11px] font-semibold text-accent normal-case tracking-[0.1em] mb-3">
                {pillar.eyebrow}
              </p>

              {/* Title */}
              <h3 className="text-[20px] lg:text-[22px] font-bold text-navy tracking-[-0.02em] leading-[1.2] mb-1">
                {pillar.title}
              </h3>
              <h3 className="text-[20px] lg:text-[22px] font-bold text-navy/35 tracking-[-0.02em] leading-[1.2] mb-5">
                {pillar.titleAccent}
              </h3>

              {/* Description */}
              <p className="text-[14px] text-muted leading-[1.75] mb-7">
                {pillar.description}
              </p>

              {/* Divider */}
              <div className="w-full h-px bg-border mb-6" />

              {/* Highlights */}
              <ul className="space-y-3">
                {pillar.highlights.map((h, j) => (
                  <li key={j} className="flex items-start gap-3">
                    <div className="mt-0.5 w-4 h-4 rounded-full bg-[#edf1f9] flex items-center justify-center flex-shrink-0 border border-[#c8d4eb] group-hover:bg-accent/10 group-hover:border-accent/20 transition-colors duration-300">
                      <svg className="w-2.5 h-2.5 text-accent" fill="none" viewBox="0 0 24 24" stroke="currentColor" strokeWidth={3}>
                        <path strokeLinecap="round" strokeLinejoin="round" d="M5 13l4 4L19 7" />
                      </svg>
                    </div>
                    <span className="text-[13px] text-navy/70 leading-[1.55]">{h}</span>
                  </li>
                ))}
              </ul>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  );
}
