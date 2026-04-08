"use client";

import { motion } from "framer-motion";

const CALENDLY_URL = "https://calendly.com/ag_ai/meetings";

const ease = [0.22, 1, 0.36, 1] as const;

export default function Hero() {
  return (
    <section className="relative pt-[120px] pb-0 lg:pt-[140px] lg:pb-0 overflow-hidden bg-background">
      {/* Warm beige glow */}
      <div className="absolute inset-0 pointer-events-none overflow-hidden">
        <div className="absolute top-[-10%] left-1/2 -translate-x-1/2 w-[1200px] h-[800px] bg-hero-glow rounded-full opacity-80" />
        <div className="absolute top-[20%] right-[-5%] w-[400px] h-[400px] rounded-full bg-[#dde4f0]/40 blur-[120px]" />
        <div className="absolute top-[10%] left-[-5%] w-[300px] h-[300px] rounded-full bg-accent/5 blur-[100px]" />
      </div>

      <div className="mx-auto max-w-[1240px] px-6 lg:px-8 relative z-10 text-center">
        {/* Headline */}
        <motion.div
          initial={{ opacity: 0, y: 24 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8, delay: 0.1, ease }}
          className="max-w-[980px] mx-auto"
        >
          <h1 className="text-[48px] sm:text-[64px] lg:text-[84px] font-semibold tracking-[-0.04em] leading-[1.05]">
            <span className="text-navy">manage your agents.</span>
            <br />
            <span className="text-navy/40">optimize costs.</span>
            <br />
            <span className="text-accent">trust every output.</span>
          </h1>
        </motion.div>

        {/* Subheadline */}
        <motion.p
          initial={{ opacity: 0, y: 16 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8, delay: 0.2, ease }}
          className="mt-8 text-[18px] lg:text-[21px] text-muted leading-[1.6] max-w-[680px] mx-auto tracking-[-0.01em]"
        >
          turtleai is the platform for enterprises scaling AI, connecting domain expertise to development, keeping AI accurate, and controlling costs before they balloon.
        </motion.p>

        {/* CTAs */}
        <motion.div
          initial={{ opacity: 0, y: 16 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8, delay: 0.3, ease }}
          className="mt-12 flex flex-wrap justify-center gap-4"
        >
          <a
            href={CALENDLY_URL}
            target="_blank"
            rel="noopener noreferrer"
            className="inline-flex items-center px-8 py-4 text-[15px] font-medium text-white bg-navy rounded-full hover:bg-navy-dark transition-all duration-300 shadow-[0_4px_14px_0_rgba(27,42,74,0.2)] hover:shadow-[0_6px_20px_rgba(27,42,74,0.3)] hover:-translate-y-0.5"
          >
            book a demo
          </a>
        </motion.div>
      </div>
    </section>
  );
}
