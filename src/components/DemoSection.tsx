"use client";

import { motion } from "framer-motion";

const ease = [0.22, 1, 0.36, 1] as const;

export default function DemoSection() {
  return (
    <section className="relative py-16 lg:py-24 overflow-hidden bg-background">
      <div className="mx-auto max-w-[1240px] px-6 lg:px-8 relative z-10">
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true, margin: "-100px" }}
          transition={{ duration: 0.8, ease }}
          className="grid lg:grid-cols-[7fr_3fr] gap-4 lg:gap-5 items-stretch"
          style={{ minHeight: "520px" }}
        >
          {/* LEFT CARD: Background image + Video */}
          <div 
            className="relative rounded-[20px] lg:rounded-[28px] overflow-hidden shadow-[0_32px_80px_-16px_rgba(27,42,74,0.18)] flex items-center justify-center p-4 sm:p-6 lg:p-8" 
            style={{ 
              backgroundImage: "url('/image-3.png')",
              backgroundColor: "#1a1a1a",
              backgroundSize: "cover",
              backgroundPosition: "center",
              backgroundRepeat: "no-repeat"
            }}
          >
            {/* Dark overlay to ensure video pops and background isn't too distracting */}
            <div className="absolute inset-0 bg-black/30" />
            
            {/* Video Container */}
            <div className="relative z-10 w-full max-w-[640px] rounded-[16px] lg:rounded-[20px] overflow-hidden shadow-[0_24px_60px_rgba(0,0,0,0.5)] bg-black/90">
              <div className="relative w-full" style={{ paddingBottom: "56.25%" /* 16:9 Aspect Ratio */ }}>
                <iframe
                  title="turtleai Demo"
                  src="https://www.youtube.com/embed/MbArKav8WEo?rel=0&showinfo=0&modestbranding=1"
                  className="absolute top-0 left-0 w-full h-full rounded-[16px] lg:rounded-[20px] border border-white/10"
                  allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture"
                  allowFullScreen
                ></iframe>
              </div>
            </div>
            {/* Add min-height via utility classes so it changes on breakpoints */}
            <div className="absolute inset-0 pointer-events-none min-h-[360px] md:min-h-[440px] lg:min-h-[480px]"></div>
          </div>

          {/* RIGHT CARD: Image 2 */}
          <div 
            className="relative rounded-[20px] lg:rounded-[28px] overflow-hidden shadow-[0_32px_80px_-16px_rgba(27,42,74,0.12)] bg-navy min-h-[360px] md:min-h-[440px] lg:min-h-[480px]" 
          >
            <img
              src="/image-2.png"
              alt="Professional using turtleai"
              className="absolute inset-0 w-full h-full object-cover object-center"
            />
          </div>
        </motion.div>
      </div>
    </section>
  );
}
