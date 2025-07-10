
import { Hero } from "@/components/Hero";
import { TrustBar } from "@/components/TrustBar";
import { Features } from "@/components/Features";
import { HowItWorks } from "@/components/HowItWorks";
import { Pricing } from "@/components/Pricing";
import { FAQ } from "@/components/FAQ";
import { CallToAction } from "@/components/CallToAction";
import { Footer } from "@/components/Footer";
import { Navigation } from "@/components/Navigation";
import { RevenueCalculator } from "@/components/RevenueCalculator";
import { CalculatorPopup } from "@/components/CalculatorPopup";
import { TalkToAgent } from "@/components/TalkToAgent";
import { useState } from "react";

const Index = () => {
  const [showPopup, setShowPopup] = useState(true);

  return (
    <div className="min-h-screen bg-gradient-to-br from-slate-900 via-blue-900 to-slate-900">
      <Navigation />
      <Hero />
      <section id="calculator-section" className="py-16 px-4">
        <RevenueCalculator />
      </section>
      <TalkToAgent />
      <TrustBar />
      <Features />
      <HowItWorks />
      <Pricing />
      <FAQ />
      <CallToAction />
      <Footer />
      
      {showPopup && <CalculatorPopup onClose={() => setShowPopup(false)} />}
    </div>
  );
};

export default Index;
