import React from "react";
import HeroSection from "@/components/crypto/HeroSection";
import TokenPurchaseForm from "@/components/crypto/TokenPurchaseForm";

const Index: React.FC = () => {
  return (
    <>
      <link
        rel="stylesheet"
        href="https://fonts.googleapis.com/css2?family=Exo:wght@400;500;700&family=Inter:wght@400;500;600;700&family=Lato:wght@400;500;600;700&display=swap"
      />
      <main className="max-w-none flex min-h-screen gap-24 bg-black mx-auto px-24 py-[122px] max-md:max-w-[991px] max-md:flex-col max-md:gap-[60px] max-md:px-10 max-md:py-[60px] max-sm:max-w-screen-sm max-sm:px-5 max-sm:py-10">
        <section aria-labelledby="hero-heading">
          <HeroSection />
        </section>

        <section
          aria-label="Token Purchase Form"
          className="flex-1 right-[section] max-md:flex max-md:justify-center"
        >
          <TokenPurchaseForm />
        </section>
      </main>
    </>
  );
};

export default Index;
