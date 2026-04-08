"use client";

import Link from "next/link";
import { TurtleMark, TurtleWordmark } from "./Logo";

const CALENDLY_URL = "https://calendly.com/ag_ai/meetings";

const footerLinks: Record<string, { label: string; href: string; external?: boolean }[]> = {
  platform: [
    { label: "domain expertise", href: "#platform" },
    { label: "cost optimization", href: "#security" },
    { label: "observability & evals", href: "#security" },
    { label: "agent security", href: "#security" },
    { label: "how it works", href: "#how-it-works" },
    { label: "why now", href: "#why-now" },
  ],
};

export default function Footer() {
  return (
    <footer className="border-t border-border/60 bg-background">
      <div className="mx-auto max-w-[1240px] px-6 lg:px-8 py-14 lg:py-16">
        <div className="grid grid-cols-2 md:grid-cols-3 gap-10">
          {/* Brand */}
          <div className="col-span-2 md:col-span-2">
            <Link href="/" className="inline-flex items-center gap-2.5 mb-5">
              <TurtleMark className="w-6 h-8" />
              <TurtleWordmark />
            </Link>
            <p className="text-[14px] text-muted leading-[1.7] max-w-[320px]">
              the platform to manage your agents, optimize AI costs, and trust
              every output.
            </p>
          </div>

          {/* Link Columns */}
          {Object.entries(footerLinks).map(([title, links]) => (
            <div key={title}>
              <h4 className="text-[12px] font-semibold text-navy normal-case tracking-[0.08em] mb-5">
                {title}
              </h4>
              <ul className="space-y-3">
                {links.map((link) => (
                  <li key={link.label}>
                    {link.external ? (
                      <a
                        href={link.href}
                        target="_blank"
                        rel="noopener noreferrer"
                        className="text-[13px] text-muted hover:text-navy transition-colors duration-200"
                      >
                        {link.label}
                      </a>
                    ) : (
                      <Link
                        href={link.href}
                        className="text-[13px] text-muted hover:text-navy transition-colors duration-200"
                      >
                        {link.label}
                      </Link>
                    )}
                  </li>
                ))}
              </ul>
            </div>
          ))}
        </div>

        {/* Bottom bar */}
        <div className="mt-14 pt-7 border-t border-border/40 flex flex-col sm:flex-row items-center justify-between gap-4">
          <p className="text-[12px] text-muted-light">
            &copy; {new Date().getFullYear()} turtleai. all rights reserved. a{" "}
            <a
              href="https://gai.ventures"
              target="_blank"
              rel="noopener noreferrer"
              className="text-muted hover:text-navy transition-colors duration-200"
            >
              gAI Ventures
            </a>{" "}
            company.
          </p>
          <div className="flex items-center gap-6">
            <Link href="#" className="text-[12px] text-muted-light hover:text-navy transition-colors duration-200">
              privacy policy
            </Link>
            <Link href="#" className="text-[12px] text-muted-light hover:text-navy transition-colors duration-200">
              terms of service
            </Link>
          </div>
        </div>
      </div>
    </footer>
  );
}
