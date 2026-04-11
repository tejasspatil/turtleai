"use client";

import { motion } from "framer-motion";
import WavyBackground from "./WavyBackground";

const ease = [0.22, 1, 0.36, 1] as const;

const CALENDLY_URL = "https://calendly.com/ag_ai/meetings";

export default function Hero() {
  return (
    <section className="relative pt-[160px] pb-56 lg:pt-[200px] lg:pb-72 overflow-hidden bg-background">
      {/* Soft radial spotlight behind the headline for premium depth */}
      <div className="absolute inset-x-0 top-0 h-[70%] bg-hero-glow pointer-events-none z-[1]" />

      {/* Stripe-style ribbon wave — pushed lower so the video below overlaps it more */}
      <WavyBackground
        className="top-[58%] md:top-[55%] h-[70%] md:h-[80%]"
        colors={["#f5ab78", "#ef5e9e", "#a855f7", "#6366f1"]}
        waveOpacity={0.7}
        blur={0}
      />

      {/* Soft bottom fade so the wave dissolves into the next section */}
      <div className="absolute inset-x-0 bottom-0 h-48 bg-gradient-to-b from-transparent to-background pointer-events-none z-[1]" />

      <div className="mx-auto max-w-[1100px] px-6 lg:px-8 relative z-10 text-center flex flex-col items-center">
        {/* Eyebrow tag */}
        <motion.div
          initial={{ opacity: 0, y: 12 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.7, ease }}
          className="inline-flex items-center gap-2 px-4 py-1.5 rounded-full bg-white/70 backdrop-blur-md border border-accent/15 shadow-[0_4px_16px_-4px_rgba(27,42,74,0.08)]"
        >
          <span className="w-1.5 h-1.5 rounded-full bg-accent animate-pulse" />
          <span className="text-[12px] font-medium tracking-[0.02em] text-navy-light/80">
            the operating system for enterprise AI
          </span>
        </motion.div>

        {/* Headline */}
        <motion.div
          initial={{ opacity: 0, y: 24 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8, delay: 0.1, ease }}
          className="mt-8 max-w-[900px]"
        >
          <h1 className="text-[46px] sm:text-[60px] lg:text-[80px] font-semibold tracking-[-0.04em] leading-[1.04]">
            <span className="text-navy drop-shadow-sm">manage your agents.</span>
            <br />
            <span className="text-navy-light/55">optimize costs.</span>
            <br />
            <span className="bg-gradient-to-r from-accent via-accent-light to-accent bg-clip-text text-transparent drop-shadow-sm">
              trust every output.
            </span>
          </h1>
        </motion.div>

        {/* Subheadline */}
        <motion.p
          initial={{ opacity: 0, y: 16 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8, delay: 0.2, ease }}
          className="mt-8 text-[18px] lg:text-[22px] text-navy-light/80 leading-[1.6] max-w-[640px] tracking-[-0.01em]"
        >
          turtleai is the platform for enterprises scaling AI, connecting domain expertise to development, keeping AI accurate, and controlling costs before they balloon.
        </motion.p>

        {/* CTAs */}
        <motion.div
          initial={{ opacity: 0, y: 16 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8, delay: 0.3, ease }}
          className="mt-10 flex flex-col sm:flex-row items-center gap-4"
        >
          <a
            href={CALENDLY_URL}
            target="_blank"
            rel="noopener noreferrer"
            className="px-7 py-3.5 text-[14px] font-semibold text-white bg-navy rounded-full shadow-[0_8px_24px_-6px_rgba(27,42,74,0.35)] hover:-translate-y-[2px] hover:shadow-[0_12px_32px_-6px_rgba(27,42,74,0.45)] hover:bg-navy-dark transition-all duration-300"
          >
            book a demo
          </a>
          <a
            href="#platform"
            className="px-7 py-3.5 text-[14px] font-semibold text-navy bg-white/70 backdrop-blur-md rounded-full border border-navy/10 shadow-[0_4px_16px_-4px_rgba(27,42,74,0.10)] hover:-translate-y-[2px] hover:bg-white hover:border-navy/20 transition-all duration-300"
          >
            explore the platform
          </a>
        </motion.div>
      </div>
    </section>
  );
}
