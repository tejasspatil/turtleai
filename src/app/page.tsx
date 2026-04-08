import Header from "@/components/Header";
import Hero from "@/components/Hero";
import DemoSection from "@/components/DemoSection";
import TrustBar from "@/components/TrustBar";
import ProblemStatement from "@/components/ProblemStatement";
import PlatformFeatures from "@/components/PlatformFeatures";
import HowItWorks from "@/components/HowItWorks";
import SecuritySection from "@/components/SecuritySection";
import WhyNow from "@/components/WhyNow";
import CTA from "@/components/CTA";
import Footer from "@/components/Footer";

export default function Home() {
  return (
    <>
      <Header />
      <main>
        <Hero />
        <DemoSection />
        <TrustBar />
        <ProblemStatement />
        <PlatformFeatures />
        <HowItWorks />
        <SecuritySection />
        <WhyNow />
        <CTA />
      </main>
      <Footer />
    </>
  );
}
