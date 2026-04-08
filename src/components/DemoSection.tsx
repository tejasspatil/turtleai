"use client";

import { motion } from "framer-motion";

const ease = [0.22, 1, 0.36, 1] as const;

export default function DemoSection() {
  return (
    <section className="py-10 lg:py-14 bg-background overflow-hidden">
      <div className="mx-auto max-w-[1240px] px-6 lg:px-8">
        <motion.div
          initial={{ opacity: 0, y: 24 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true, margin: "-80px" }}
          transition={{ duration: 0.7, ease }}
          className="grid grid-cols-1 md:grid-cols-2 gap-4 lg:gap-5"
        >
          {/* LEFT — demo-2.png */}
          <div className="group rounded-[20px] lg:rounded-[28px] overflow-hidden p-4 lg:p-6 flex items-center justify-center transition-all duration-500 border border-[#dde4f0] hover:border-[#b8c5e0] bg-[#edf1f9] hover:bg-[#e8edf7] shadow-[0_2px_16px_rgba(27,42,74,0.06)] hover:shadow-[0_8px_40px_rgba(27,42,74,0.12)]">
            <img
              src="/demo-2.png"
              alt="turtleai platform demo"
              className="w-full h-auto object-contain rounded-xl shadow-[0_4px_20px_rgba(27,42,74,0.10)] group-hover:shadow-[0_8px_32px_rgba(27,42,74,0.16)] transition-shadow duration-500"
            />
          </div>

          {/* RIGHT — demo-12.png */}
          <div className="group rounded-[20px] lg:rounded-[28px] overflow-hidden p-4 lg:p-6 flex items-center justify-center transition-all duration-500 border border-[#dde4f0] hover:border-[#b8c5e0] bg-[#edf1f9] hover:bg-[#e8edf7] shadow-[0_2px_16px_rgba(27,42,74,0.06)] hover:shadow-[0_8px_40px_rgba(27,42,74,0.12)]">
            <img
              src="/demo-12.png"
              alt="turtleai in action"
              className="w-full h-auto object-contain rounded-xl shadow-[0_4px_20px_rgba(27,42,74,0.10)] group-hover:shadow-[0_8px_32px_rgba(27,42,74,0.16)] transition-shadow duration-500"
            />
          </div>
        </motion.div>
      </div>
    </section>
  );
}
