
import React from "react";
import Header from "@/components/crypto/Header";
import HeroSection from "@/components/crypto/HeroSection";
import TokenPurchaseForm from "@/components/crypto/TokenPurchaseForm";
import CountdownTimer from "@/components/crypto/CountdownTimer";
import FeaturesSection from "@/components/crypto/FeaturesSection";
import BackgroundEffect from "@/components/crypto/BackgroundEffect";

const Index: React.FC = () => {
  // Set target date 15 days from now for the countdown
  const targetDate = new Date();
  targetDate.setDate(targetDate.getDate() + 15);
  targetDate.setHours(targetDate.getHours() + 3);
  targetDate.setMinutes(targetDate.getMinutes() + 12);
  targetDate.setSeconds(targetDate.getSeconds() + 4);

  return (
    <>
      <link
        rel="stylesheet"
        href="https://fonts.googleapis.com/css2?family=Exo:wght@400;500;700&family=Inter:wght@400;500;600;700&family=Lato:wght@400;500;600;700&display=swap"
      />
      <div className="min-h-screen bg-black flex flex-col relative overflow-hidden">
        <BackgroundEffect />
        <Header />
        <main className="max-w-none flex flex-col z-10 bg-transparent mx-auto px-6 md:px-12 lg:px-24 py-12 md:py-[60px] lg:py-[80px] relative">
          <div className="flex flex-col lg:flex-row gap-12 lg:gap-24 items-center mb-24">
            <section className="w-full lg:w-1/2" aria-labelledby="hero-heading">
              <HeroSection />
            </section>

            <section
              aria-label="Token Purchase Form"
              className="w-full lg:w-1/2 flex justify-center"
            >
              <TokenPurchaseForm />
            </section>
          </div>
          
          {/* Countdown Timer Section */}
          <section aria-labelledby="countdown-heading" className="w-full mb-24">
            <CountdownTimer targetDate={targetDate} />
          </section>
          
          {/* Features Section */}
          <FeaturesSection />
        </main>
      </div>
    </>
  );
};

export default Index;
