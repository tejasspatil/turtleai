"use client";

import { motion } from "framer-motion";

const steps = [
  {
    title: "connect your knowledge",
    description:
      "drop in your SOPs, process docs, video walkthroughs, or any domain content. turtleai converts them into structured AI skills and automatable workflows.",
    // Sparkles — capturing & transforming raw knowledge into something intelligent
    icon: (
      <svg className="w-7 h-7 text-accent" fill="none" viewBox="0 0 24 24" stroke="currentColor" strokeWidth={1.5}>
        <path strokeLinecap="round" strokeLinejoin="round" d="M9.813 15.904L9 18.75l-.813-2.846a4.5 4.5 0 00-3.09-3.09L2.25 12l2.846-.813a4.5 4.5 0 003.09-3.09L9 5.25l.813 2.846a4.5 4.5 0 003.09 3.09L15.75 12l-2.846.813a4.5 4.5 0 00-3.09 3.09zM18.259 8.715L18 9.75l-.259-1.035a3.375 3.375 0 00-2.455-2.456L14.25 6l1.036-.259a3.375 3.375 0 002.455-2.456L18 2.25l.259 1.035a3.375 3.375 0 002.456 2.456L21.75 6l-1.035.259a3.375 3.375 0 00-2.456 2.456z" />
      </svg>
    ),
  },
  {
    title: "deploy & orchestrate",
    description:
      "turtleai routes each task to the right model based on complexity: powerful models for reasoning, cheaper models for simple tasks, deterministic code for predictable steps.",
    // CPU chip — intelligent routing and processing across models
    icon: (
      <svg className="w-7 h-7 text-accent" fill="none" viewBox="0 0 24 24" stroke="currentColor" strokeWidth={1.5}>
        <path strokeLinecap="round" strokeLinejoin="round" d="M8.25 3v1.5M4.5 8.25H3m18 0h-1.5M4.5 12H3m18 0h-1.5m-15 3.75H3m18 0h-1.5M8.25 19.5V21M12 3v1.5m0 15V21m3.75-18v1.5m0 15V21m-9-1.5h10.5a2.25 2.25 0 002.25-2.25V6.75a2.25 2.25 0 00-2.25-2.25H6.75A2.25 2.25 0 004.5 6.75v10.5a2.25 2.25 0 002.25 2.25zm.75-12h9v9h-9v-9z" />
      </svg>
    ),
  },
  {
    title: "observe & evaluate",
    description:
      "monitor every agent in real time with traces, spans, and per-run simulation. validate behavior continuously. catch drift before it impacts production.",
    // Pulse/activity waveform — live monitoring and health
    icon: (
      <svg className="w-7 h-7 text-accent" fill="none" viewBox="0 0 24 24" stroke="currentColor" strokeWidth={1.5}>
        <path strokeLinecap="round" strokeLinejoin="round" d="M3 12h2.5l2-6 3 12 2.5-8 2 4H21" />
      </svg>
    ),
  },
  {
    title: "secure & scale",
    description:
      "enforce access policies for every agent identity. manage non-human identities with the same rigor as human users. scale with confidence.",
    // Fingerprint — unique identity and access control
    icon: (
      <svg className="w-7 h-7 text-accent" fill="none" viewBox="0 0 24 24" stroke="currentColor" strokeWidth={1.5}>
        <path strokeLinecap="round" strokeLinejoin="round" d="M7.864 4.243A7.5 7.5 0 0119.5 10.5c0 2.92-.556 5.709-1.568 8.268M5.742 6.364A7.465 7.465 0 004.5 10.5a7.464 7.464 0 01-1.15 3.993m1.989 3.559A11.209 11.209 0 008.25 10.5a3.75 3.75 0 117.5 0c0 .527-.021 1.049-.064 1.565M12 10.5a14.94 14.94 0 01-3.6 9.75m6.633-4.596a18.666 18.666 0 01-2.485 5.33" />
      </svg>
    ),
  },
];

const ease = [0.22, 1, 0.36, 1] as const;

export default function HowItWorks() {
  return (
    <section id="how-it-works" className="py-24 lg:py-36 bg-beige-light/40 relative">
      <div className="absolute inset-0 bg-beige-glow pointer-events-none" />
      <div className="mx-auto max-w-[1240px] px-6 lg:px-8 relative z-10">
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true, margin: "-80px" }}
          transition={{ duration: 0.6, ease }}
          className="max-w-[680px] mx-auto text-center mb-16 lg:mb-20"
        >
          <p className="text-[13px] font-semibold text-accent normal-case tracking-[0.1em] mb-4">
            how it works
          </p>
          <h2 className="text-[32px] sm:text-[40px] lg:text-[48px] font-bold text-navy tracking-[-0.03em] leading-[1.1]">
            from domain expertise to
            <br />
            production-ready AI
          </h2>
        </motion.div>

        <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-5">
          {steps.map((step, i) => (
            <motion.div
              key={i}
              initial={{ opacity: 0, y: 16 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true, margin: "-60px" }}
              transition={{ delay: i * 0.08, duration: 0.5, ease }}
              className="group p-6 lg:p-7 rounded-2xl bg-white border border-border hover:border-accent/20 transition-all duration-300 hover:shadow-[0_4px_24px_rgba(193,127,36,0.06)] h-full"
            >
              {/* Icon */}
              <div className="mb-5">
                {step.icon}
              </div>

              <h3 className="text-[16px] font-semibold text-navy tracking-[-0.01em] mb-2.5">
                {step.title}
              </h3>
              <p className="text-[14px] text-muted leading-[1.7]">
                {step.description}
              </p>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  );
}
