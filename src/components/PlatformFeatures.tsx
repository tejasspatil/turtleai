"use client";

import { motion } from "framer-motion";
import { TurtleMark } from "./Logo";

const ease = [0.22, 1, 0.36, 1] as const;

function FeatureIcon({ children }: { children: React.ReactNode }) {
  return (
    <div className="w-12 h-12 rounded-xl mb-6 flex items-center justify-center relative">
      <div className="absolute inset-0 bg-accent/8 rounded-xl skew-y-2 transform -rotate-3" />
      <div className="absolute inset-0 bg-beige border border-beige-dark/50 rounded-xl shadow-sm flex items-center justify-center">
        <div className="text-accent">{children}</div>
      </div>
    </div>
  );
}

export default function PlatformFeatures() {
  return (
    <section id="platform" className="py-24 lg:py-32 bg-background border-y border-border overflow-hidden">
      <div className="mx-auto max-w-[1240px] px-6 lg:px-8">

        {/* Header */}
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true, margin: "-50px" }}
          transition={{ duration: 0.6, ease }}
          className="max-w-[800px] mx-auto text-center mb-16 lg:mb-24"
        >
          <p className="text-[13px] font-semibold text-accent normal-case tracking-[0.12em] mb-4">
            unified platform
          </p>
          <h2 className="text-[40px] sm:text-[48px] lg:text-[64px] font-bold text-navy tracking-[-0.04em] leading-[1.05]">
            everything to run
            <br />
            <span className="text-navy/40">enterprise AI reliably.</span>
          </h2>
        </motion.div>

        {/* 3-Column Layout */}
        <div className="grid lg:grid-cols-[1fr_1.4fr_1fr] gap-x-8 gap-y-16 items-center">

          {/* LEFT COLUMN */}
          <div className="flex flex-col gap-12 lg:gap-20">
            <motion.div
              initial={{ opacity: 0, x: -20 }}
              whileInView={{ opacity: 1, x: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.5, delay: 0.1, ease }}
            >
              <FeatureIcon>
                <svg className="w-5 h-5" fill="none" viewBox="0 0 24 24" stroke="currentColor" strokeWidth={2}>
                  <path strokeLinecap="round" strokeLinejoin="round" d="M12 6.042A8.967 8.967 0 006 3.75c-1.052 0-2.062.18-3 .512v14.25A8.987 8.987 0 016 18c2.305 0 4.408.867 6 2.292m0-14.25a8.966 8.966 0 016-2.292c1.052 0 2.062.18 3 .512v14.25A8.987 8.987 0 0018 18a8.967 8.967 0 00-6 2.292m0-14.25v14.25" />
                </svg>
              </FeatureIcon>
              <h3 className="text-[18px] font-semibold text-navy mb-3 leading-[1.3]">
                domain expertise
              </h3>
              <p className="text-[15px] text-muted leading-[1.65]">
                domain experts drag and drop content (video, audio, text) to convert processes into AI skills, workflows, and code. turtleai builds an ever-growing knowledge graph that becomes your organization's living knowledge base.
              </p>
            </motion.div>

            <motion.div
              initial={{ opacity: 0, x: -20 }}
              whileInView={{ opacity: 1, x: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.5, delay: 0.2, ease }}
            >
              <FeatureIcon>
                <svg className="w-5 h-5" fill="none" viewBox="0 0 24 24" stroke="currentColor" strokeWidth={2}>
                  <path strokeLinecap="round" strokeLinejoin="round" d="M12 6v12m-3-2.818l.879.659c1.171.879 3.07.879 4.242 0 1.172-.879 1.172-2.303 0-3.182C13.536 12.219 12.768 12 12 12c-.725 0-1.45-.22-2.003-.659-1.106-.879-1.106-2.303 0-3.182s2.9-.879 4.006 0l.415.33M21 12a9 9 0 11-18 0 9 9 0 0118 0z" />
                </svg>
              </FeatureIcon>
              <h3 className="text-[18px] font-semibold text-navy mb-3 leading-[1.3]">
                cost management
              </h3>
              <p className="text-[15px] text-muted leading-[1.65]">
                not all tasks need the same level of AI reasoning. turtleai orchestrates across models, selecting the right level of intelligence for each step: powerful models for complex reasoning, cheaper models for simple tasks.
              </p>
            </motion.div>
          </div>

          {/* CENTER — 3D stacked logo */}
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.8, ease }}
            className="hidden lg:flex items-center justify-center"
          >
            <div className="relative flex items-center justify-center" style={{ width: 320, height: 400 }}>
              {/* Layer 3 — deepest */}
              <div
                className="absolute rounded-[32px] bg-navy-dark shadow-[0_32px_64px_rgba(15,26,46,0.35)]"
                style={{
                  width: 220,
                  height: 300,
                  transform: "translateY(32px) rotate(-5deg)",
                  opacity: 0.6,
                }}
              />
              {/* Layer 2 — middle */}
              <div
                className="absolute rounded-[32px] bg-navy shadow-[0_24px_48px_rgba(27,42,74,0.25)]"
                style={{
                  width: 220,
                  height: 300,
                  transform: "translateY(16px) rotate(-2.5deg)",
                  opacity: 0.8,
                }}
              />
              {/* Layer 1 — top card */}
              <div
                className="absolute rounded-[32px] bg-beige-light border border-beige-dark/60 shadow-[0_20px_60px_rgba(193,127,36,0.12),0_4px_16px_rgba(27,42,74,0.08)] flex items-center justify-center"
                style={{ width: 220, height: 300 }}
              >
                {/* Subtle gold glow behind logo */}
                <div className="absolute inset-0 rounded-[32px] overflow-hidden">
                  <div className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-40 h-40 bg-accent/10 rounded-full blur-[40px]" />
                </div>
                <TurtleMark className="w-24 h-auto relative z-10" color="#C17F24" />
              </div>
            </div>
          </motion.div>

          {/* RIGHT COLUMN */}
          <div className="flex flex-col gap-12 lg:gap-20">
            <motion.div
              initial={{ opacity: 0, x: 20 }}
              whileInView={{ opacity: 1, x: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.5, delay: 0.1, ease }}
            >
              <FeatureIcon>
                <svg className="w-5 h-5" fill="none" viewBox="0 0 24 24" stroke="currentColor" strokeWidth={2}>
                  <path strokeLinecap="round" strokeLinejoin="round" d="M2.036 12.322a1.012 1.012 0 010-.639C3.423 7.51 7.36 4.5 12 4.5c4.638 0 8.573 3.007 9.963 7.178.07.207.07.431 0 .639C20.577 16.49 16.64 19.5 12 19.5c-4.638 0-8.573-3.007-9.963-7.178z" />
                  <path strokeLinecap="round" strokeLinejoin="round" d="M15 12a3 3 0 11-6 0 3 3 0 016 0z" />
                </svg>
              </FeatureIcon>
              <h3 className="text-[18px] font-semibold text-navy mb-3 leading-[1.3]">
                observability
              </h3>
              <p className="text-[15px] text-muted leading-[1.65]">
                full visibility into what every agent is doing: every decision, every output, every failure, in real time. laid out in intuitive dashboards for rapid debugging.
              </p>
            </motion.div>

            <motion.div
              initial={{ opacity: 0, x: 20 }}
              whileInView={{ opacity: 1, x: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.5, delay: 0.2, ease }}
            >
              <FeatureIcon>
                <svg className="w-5 h-5" fill="none" viewBox="0 0 24 24" stroke="currentColor" strokeWidth={2}>
                  <path strokeLinecap="round" strokeLinejoin="round" d="M9 12.75L11.25 15 15 9.75M21 12a9 9 0 11-18 0 9 9 0 0118 0z" />
                </svg>
              </FeatureIcon>
              <h3 className="text-[18px] font-semibold text-navy mb-3 leading-[1.3]">
                agent security
              </h3>
              <p className="text-[15px] text-muted leading-[1.65]">
                agents are the new attack surface. turtleai provides agentic access management, policy enforcement and guardrails for non-human identity (NHI).
              </p>
            </motion.div>
          </div>

        </div>
      </div>
    </section>
  );
}
