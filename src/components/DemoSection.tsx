"use client";

import { motion } from "framer-motion";

const ease = [0.22, 1, 0.36, 1] as const;

/**
 * Single, premium video container.
 * Drop an h.264 file at /public/demo.mp4 (and an optional /public/demo-poster.jpg
 * for the still frame) and it'll play here. Until then the inner surface shows
 * a clean dark gradient that matches the rest of the site.
 */
export default function DemoSection() {
  return (
    <section className="relative -mt-40 md:-mt-56 lg:-mt-64 pt-2 pb-28 lg:pt-4 lg:pb-36 bg-transparent z-20 overflow-hidden">

      <div className="mx-auto max-w-[1120px] px-6 lg:px-8 relative z-10">
        <motion.div
          initial={{ opacity: 0, y: 48 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true, margin: "-120px" }}
          transition={{ duration: 1, ease }}
          className="relative"
        >
          {/* Subtle outer halo for extra premium depth on light background */}
          <div className="absolute -inset-6 rounded-[36px] bg-gradient-to-b from-[#1b2a4a]/5 via-transparent to-[#1b2a4a]/[0.02] blur-3xl opacity-60 pointer-events-none" />

          {/* Gradient hairline border — 1px gradient frame */}
          <div className="relative rounded-[28px] p-[1px] bg-white/60 backdrop-blur-sm shadow-[0_24px_80px_-12px_rgba(27,42,74,0.15),0_12px_32px_-8px_rgba(27,42,74,0.08)] ring-1 ring-inset ring-white/20">
            {/* Inner surface — keeps the heavy dark aesthetic of the video container */}
            <div className="relative rounded-[27px] overflow-hidden bg-[#152138] aspect-video isolate shadow-inner">
              {/* Top reflective edge — Apple device-frame trick */}
              <div className="absolute top-0 inset-x-0 h-px bg-gradient-to-r from-transparent via-white/40 to-transparent z-20" />

              {/* Subtle inner top sheen */}
              <div className="absolute inset-x-0 top-0 h-1/2 bg-gradient-to-b from-white/[0.04] to-transparent pointer-events-none z-10" />

              {/* Ambient placeholder gradient */}
              <div className="absolute inset-0 bg-gradient-to-b from-[#1B2A4A] to-[#0F1A2E]" />

              {/* The h.264 video */}
              <video
                className="relative w-full h-full object-cover z-[5]"
                autoPlay
                muted
                loop
                playsInline
                preload="metadata"
                poster="/demo-poster.jpg"
              >
                <source src="/demo.mp4" type="video/mp4" />
              </video>

              {/* Vignette for cinematic depth */}
              <div
                className="absolute inset-0 pointer-events-none z-[15]"
                style={{
                  background:
                    "radial-gradient(ellipse at center, transparent 55%, rgba(15,26,46,0.35) 100%)",
                }}
              />

              {/* Bottom inner shadow line */}
              <div className="absolute bottom-0 inset-x-0 h-px bg-gradient-to-r from-transparent via-white/10 to-transparent z-20" />
            </div>
          </div>

          {/* Floating drop shadow for the lift effect */}
          <div className="absolute -bottom-16 left-1/2 -translate-x-1/2 w-[85%] h-16 bg-[rgba(27,42,74,0.18)] blur-[40px] rounded-[100%] pointer-events-none" />
        </motion.div>
      </div>
    </section>
  );
}
