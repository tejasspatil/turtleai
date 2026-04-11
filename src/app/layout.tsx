import type { Metadata } from "next";
import "./globals.css";

export const metadata: Metadata = {
  icons: {
    icon: "/favicon.svg",
  },
  title: "turtleai — Manage Your AI Agents, Optimize Costs, Trust Every Output",
  description:
    "turtleai is the enterprise AI control plane. Manage every agent, optimize AI costs with intelligent routing, ensure accuracy with real-time observability, and secure your platform with agentic access management.",
  keywords: [
    "AI agent management",
    "enterprise AI platform",
    "AI cost optimization",
    "AI observability",
    "AI evaluation",
    "agentic security",
    "AI governance",
    "non-human identity management",
    "AI agent orchestration",
    "enterprise AI adoption",
  ],
  openGraph: {
    title: "turtleai — The Platform to Manage Your AI Agents",
    description:
      "One control plane for every AI agent. Manage costs, observe behavior, evaluate accuracy, and enforce security across your entire AI deployment.",
    type: "website",
    locale: "en_US",
    siteName: "turtleai",
  },
  twitter: {
    card: "summary_large_image",
    title: "turtleai — Manage Your AI Agents, Optimize Costs, Trust Every Output",
    description:
      "The enterprise AI control plane. Manage every agent, optimize costs, ensure accuracy, and secure your platform.",
  },
  robots: {
    index: true,
    follow: true,
    googleBot: {
      index: true,
      follow: true,
      "max-video-preview": -1,
      "max-image-preview": "large",
      "max-snippet": -1,
    },
  },
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html
      lang="en"
      className="h-full antialiased"
    >
      <head>
        <script
          type="application/ld+json"
          dangerouslySetInnerHTML={{
            __html: JSON.stringify({
              "@context": "https://schema.org",
              "@type": "SoftwareApplication",
              name: "turtleai",
              applicationCategory: "BusinessApplication",
              description:
                "Enterprise AI control plane to manage agents, optimize costs, ensure accuracy, and enforce security.",
              operatingSystem: "Web",
              offers: {
                "@type": "Offer",
                category: "Enterprise Software",
              },
              provider: {
                "@type": "Organization",
                name: "turtleai",
              },
            }),
          }}
        />
        <script
          type="application/ld+json"
          dangerouslySetInnerHTML={{
            __html: JSON.stringify({
              "@context": "https://schema.org",
              "@type": "FAQPage",
              mainEntity: [
                {
                  "@type": "Question",
                  name: "What is turtleai?",
                  acceptedAnswer: {
                    "@type": "Answer",
                    text: "turtleai is an enterprise AI control plane that gives organizations a single platform to manage every AI agent, optimize costs through intelligent model routing, ensure accuracy with real-time observability and evaluation, and enforce security with agentic access management.",
                  },
                },
                {
                  "@type": "Question",
                  name: "How does turtleai reduce AI costs?",
                  acceptedAnswer: {
                    "@type": "Answer",
                    text: "turtleai intelligently routes tasks to the right model based on complexity. Not all tasks need the same level of AI reasoning — turtleai selects the optimal model for each step, using cheaper models for simple tasks and powerful models only when needed, reducing spend by up to 60%.",
                  },
                },
                {
                  "@type": "Question",
                  name: "How does turtleai help with AI agent security?",
                  acceptedAnswer: {
                    "@type": "Answer",
                    text: "turtleai provides agentic access management, non-human identity (NHI) policy enforcement, and guardrails to ensure no agent operates outside its defined boundaries. It treats AI agents as a new identity layer requiring the same security controls as human users.",
                  },
                },
              ],
            }),
          }}
        />
      </head>
      <body className="min-h-full flex flex-col bg-background">{children}</body>
    </html>
  );
}
