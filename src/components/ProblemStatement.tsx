"use client";

import { motion } from "framer-motion";

const problems = [
  {
    number: "01",
    question: "how do you bridge domain expertise and AI development?",
    pain: "domain experts can't translate their knowledge into AI workflows without heavy engineering involvement. the gap between what people know and what AI can do remains the biggest bottleneck.",
  },
  {
    number: "02",
    question: "how do you know your AI is accurate and not drifting?",
    pain: "model accuracy is hard to verify. agent drift is even harder to detect. outputs degrade silently over time, and by the time you notice, damage is done.",
  },
  {
    number: "03",
    question: "how are you optimizing AI costs before they balloon?",
    pain: "AI spend is exploding with limited visibility into what's driving costs. not all tasks need the same level of reasoning, but most teams can't differentiate.",
  },
  {
    number: "04",
    question: "how are you managing agent sprawl and keeping your platform secure?",
    pain: "agent sprawl creates real security exposure with no unified control layer. non-human identities are the new attack surface, and most orgs aren't prepared.",
  },
];

const ease = [0.22, 1, 0.36, 1] as const;

export default function ProblemStatement() {
  return (
    <section id="challenges" className="py-14 lg:py-20 bg-background relative">
      {/* Subtle beige accent */}
      <div className="absolute top-0 left-0 right-0 h-px bg-gradient-to-r from-transparent via-accent/10 to-transparent" />

      <div className="mx-auto max-w-[1240px] px-6 lg:px-8">
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true, margin: "-80px" }}
          transition={{ duration: 0.6, ease }}
          className="max-w-[680px] mb-16 lg:mb-20"
        >
          <p className="text-[13px] font-semibold text-accent normal-case tracking-[0.1em] mb-4">
            the challenge
          </p>
          <h2 className="text-[32px] sm:text-[40px] lg:text-[48px] font-bold text-navy tracking-[-0.03em] leading-[1.1]">
            enterprise AI adoption keeps stalling after the pilot stage
          </h2>
          <p className="mt-5 text-[17px] text-muted leading-[1.7]">
            every enterprise AI initiative hits the same friction points before it ever reaches scale.
          </p>
        </motion.div>

        <div className="grid md:grid-cols-2 gap-4 lg:gap-5">
          {problems.map((problem, i) => (
            <motion.div
              key={i}
              initial={{ opacity: 0, y: 16 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true, margin: "-60px" }}
              transition={{ delay: i * 0.08, duration: 0.5, ease }}
              className="group relative p-7 lg:p-8 rounded-2xl bg-white border border-border hover:border-accent/20 transition-all duration-300 hover:shadow-[0_4px_24px_rgba(193,127,36,0.06)]"
            >
              <div className="flex items-start gap-5">
                <span className="text-[48px] lg:text-[56px] font-bold text-beige leading-none tracking-[-0.04em] select-none">
                  {problem.number}
                </span>
                <div className="flex-1 pt-1">
                  <h3 className="text-[16px] lg:text-[17px] font-semibold text-navy leading-[1.4] tracking-[-0.01em]">
                    {problem.question}
                  </h3>
                  <p className="mt-2.5 text-[14px] text-muted leading-[1.7]">
                    {problem.pain}
                  </p>
                </div>
              </div>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  );
}
