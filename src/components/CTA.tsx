"use client";

import { motion } from "framer-motion";

const CALENDLY_URL = "https://calendly.com/ag_ai/meetings";
const ease = [0.22, 1, 0.36, 1] as const;

export default function CTA() {
  return (
    <section id="contact" className="py-14 lg:py-20 bg-beige-light/30">
      <div className="mx-auto max-w-[1240px] px-6 lg:px-8">
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true, margin: "-80px" }}
          transition={{ duration: 0.6, ease }}
          className="relative overflow-hidden rounded-[32px] bg-navy px-8 py-16 sm:px-16 sm:py-20 lg:px-24 lg:py-24"
        >
          {/* Ambient light — warm gold glows */}
          <div className="absolute inset-0 pointer-events-none overflow-hidden">
            <div className="absolute top-0 right-0 w-[500px] h-[500px] bg-accent/15 rounded-full blur-[120px] -translate-y-1/3 translate-x-1/3" />
            <div className="absolute bottom-0 left-0 w-[400px] h-[400px] bg-accent/8 rounded-full blur-[100px] translate-y-1/3 -translate-x-1/3" />
            <div className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-[600px] h-[300px] bg-accent/5 rounded-full blur-[80px]" />
          </div>

          <div className="relative z-10 max-w-[640px] mx-auto text-center">
            <h2 className="text-[36px] sm:text-[48px] lg:text-[56px] font-bold text-white tracking-[-0.04em] leading-[1.05]">
              ready to take control
              <br />
              of your AI?
            </h2>
            <p className="mt-5 text-[17px] text-white/55 leading-[1.7]">
              see how turtleai gives you full visibility, cost control, and
              security across every AI agent in your organization.
            </p>

            <div className="mt-12 flex flex-wrap justify-center gap-4">
              <a
                href={CALENDLY_URL}
                target="_blank"
                rel="noopener noreferrer"
                className="inline-flex items-center px-8 py-4 text-[15px] font-semibold text-navy bg-beige rounded-full hover:bg-beige-light transition-all duration-300 shadow-[0_4px_20px_0_rgba(193,127,36,0.2)] hover:-translate-y-0.5"
              >
                book a demo
                <svg className="ml-2.5 w-4 h-4" fill="none" viewBox="0 0 24 24" stroke="currentColor" strokeWidth={2}>
                  <path strokeLinecap="round" strokeLinejoin="round" d="M17 8l4 4m0 0l-4 4m4-4H3" />
                </svg>
              </a>
            </div>
          </div>
        </motion.div>
      </div>
    </section>
  );
}
