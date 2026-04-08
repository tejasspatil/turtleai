"use client";

import { useState, useEffect } from "react";
import { motion, AnimatePresence } from "framer-motion";
import Link from "next/link";
import { TurtleMark, TurtleWordmark } from "./Logo";

const navLinks = [
  { label: "platform", href: "#platform" },
  { label: "how it works", href: "#how-it-works" },
  { label: "security", href: "#security" },
  { label: "why turtleai", href: "#why-now" },
];

const CALENDLY_URL = "https://calendly.com/ag_ai/meetings";

export default function Header() {
  const [scrolled, setScrolled] = useState(false);
  const [mobileOpen, setMobileOpen] = useState(false);

  useEffect(() => {
    const onScroll = () => setScrolled(window.scrollY > 10);
    window.addEventListener("scroll", onScroll, { passive: true });
    return () => window.removeEventListener("scroll", onScroll);
  }, []);

  return (
    <motion.header
      initial={{ y: -10, opacity: 0 }}
      animate={{ y: 0, opacity: 1 }}
      transition={{ duration: 0.6, ease: [0.22, 1, 0.36, 1] }}
      className={`fixed top-0 left-0 right-0 z-50 transition-all duration-500 ${
        scrolled
          ? "bg-background/92 backdrop-blur-2xl shadow-[0_1px_0_rgba(193,127,36,0.06)] border-b border-accent/[0.06]"
          : "bg-transparent"
      }`}
    >
      <div className="mx-auto max-w-[1240px] px-6 lg:px-8">
        <nav className="flex items-center justify-between h-[72px]">
          {/* Logo */}
          <Link href="/" className="flex items-center gap-2.5 group">
            <TurtleMark className="w-7 h-9 transition-transform duration-300 group-hover:scale-[1.03]" />
            <TurtleWordmark />
          </Link>

          {/* Desktop Nav */}
          <div className="hidden lg:flex items-center gap-1">
            {navLinks.map((link) => (
              <Link
                key={link.href}
                href={link.href}
                className="px-4 py-2 text-[14px] font-medium text-muted hover:text-navy transition-colors duration-200"
              >
                {link.label}
              </Link>
            ))}
          </div>

          {/* Desktop CTA */}
          <div className="hidden lg:flex items-center gap-3">
            <a
              href={CALENDLY_URL}
              target="_blank"
              rel="noopener noreferrer"
              className="px-6 py-2.5 text-[14px] font-medium text-white bg-navy rounded-full hover:bg-navy-dark transition-all duration-300 shadow-[0_2px_8px_rgba(27,42,74,0.15)] hover:shadow-[0_4px_16px_rgba(27,42,74,0.25)] hover:-translate-y-[1px]"
            >
              book a demo
            </a>
          </div>

          {/* Mobile Toggle */}
          <button
            onClick={() => setMobileOpen(!mobileOpen)}
            className="lg:hidden p-2.5 -mr-2.5 rounded-xl hover:bg-beige/30 transition-colors"
            aria-label="Toggle menu"
          >
            <div className="w-5 h-[14px] flex flex-col justify-between">
              <span
                className={`block h-[1.5px] w-5 bg-navy rounded-full transition-all duration-300 ${
                  mobileOpen ? "rotate-45 translate-y-[6px]" : ""
                }`}
              />
              <span
                className={`block h-[1.5px] w-5 bg-navy rounded-full transition-all duration-300 ${
                  mobileOpen ? "opacity-0" : ""
                }`}
              />
              <span
                className={`block h-[1.5px] w-5 bg-navy rounded-full transition-all duration-300 ${
                  mobileOpen ? "-rotate-45 -translate-y-[6px]" : ""
                }`}
              />
            </div>
          </button>
        </nav>
      </div>

      {/* Mobile Menu */}
      <AnimatePresence>
        {mobileOpen && (
          <motion.div
            initial={{ opacity: 0, height: 0 }}
            animate={{ opacity: 1, height: "auto" }}
            exit={{ opacity: 0, height: 0 }}
            transition={{ duration: 0.3, ease: [0.22, 1, 0.36, 1] }}
            className="lg:hidden bg-background/98 backdrop-blur-2xl border-t border-accent/[0.06]"
          >
            <div className="px-6 py-5 space-y-1">
              {navLinks.map((link) => (
                <Link
                  key={link.href}
                  href={link.href}
                  onClick={() => setMobileOpen(false)}
                  className="block px-3 py-3 text-[15px] font-medium text-navy/70 hover:text-navy transition-colors"
                >
                  {link.label}
                </Link>
              ))}
              <div className="pt-4 mt-3 border-t border-accent/[0.06]">
                <a
                  href={CALENDLY_URL}
                  target="_blank"
                  rel="noopener noreferrer"
                  onClick={() => setMobileOpen(false)}
                  className="block w-full text-center px-6 py-3 text-[14px] font-semibold text-white bg-navy rounded-full"
                >
                  book a demo
                </a>
              </div>
            </div>
          </motion.div>
        )}
      </AnimatePresence>
    </motion.header>
  );
}
