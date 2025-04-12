
import React from "react";
import Header from "@/components/crypto/Header";
import HeroSection from "@/components/crypto/HeroSection";
import TokenPurchaseForm from "@/components/crypto/TokenPurchaseForm";
import CountdownTimer from "@/components/crypto/CountdownTimer";
import FeaturesSection from "@/components/crypto/FeaturesSection";

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
      <div className="min-h-screen bg-black flex flex-col">
        <Header />
        <main className="max-w-none flex flex-col gap-24 bg-black mx-auto px-24 py-[80px] max-md:max-w-[991px] max-md:gap-[60px] max-md:px-10 max-md:py-[60px] max-sm:max-w-screen-sm max-sm:px-5 max-sm:py-10">
          {/* Countdown Timer Section */}
          <section aria-labelledby="countdown-heading" className="w-full">
            <CountdownTimer targetDate={targetDate} />
          </section>
          
          <div className="flex gap-24 max-md:flex-col">
            <section aria-labelledby="hero-heading">
              <HeroSection />
            </section>

            <section
              aria-label="Token Purchase Form"
              className="flex-1 right-[section] max-md:flex max-md:justify-center"
            >
              <TokenPurchaseForm />
            </section>
          </div>
          
          {/* New Features Section */}
          <FeaturesSection />
        </main>
      </div>
    </>
  );
};

export default Index;
