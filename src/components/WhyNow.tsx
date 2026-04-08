"use client";

import { motion } from "framer-motion";

const ease = [0.22, 1, 0.36, 1] as const;

export default function WhyNow() {
  return (
    <section id="why-now" className="py-14 lg:py-20 bg-background relative">
      <div className="absolute inset-0 bg-beige-glow pointer-events-none opacity-40" />
      <div className="mx-auto max-w-[1240px] px-6 lg:px-8 relative z-10">
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true, margin: "-80px" }}
          transition={{ duration: 0.6, ease }}
          className="max-w-[680px] mx-auto text-center"
        >
          <p className="text-[13px] font-semibold text-accent normal-case tracking-[0.1em] mb-4">
            why now
          </p>
          <h2 className="text-[32px] sm:text-[40px] lg:text-[48px] font-bold text-navy tracking-[-0.03em] leading-[1.1]">
            enterprises are deploying AI fast.
            <br />
            <span className="text-muted-light">adoption is stalling even faster.</span>
          </h2>
          <p className="mt-6 text-[17px] text-muted leading-[1.7]">
            every organization building with AI hits the same wall. not the
            technology itself, but everything around it. the first company to own
            the management, cost, observability, evaluation, and security layer
            will define how AI gets adopted inside the modern organization.
          </p>
        </motion.div>

      </div>
    </section>
  );
}
