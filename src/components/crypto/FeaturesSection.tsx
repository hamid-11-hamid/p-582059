
import React from "react";
import { Check } from "lucide-react";
import StarsIcon from "@/assets/icons/StarsIcon";
import { Card, CardContent } from "@/components/ui/card";

const FeaturesSection: React.FC = () => {
  const features = [
    "Total Supply: 500,000,000 PTY",
    "Accepted currency: ETH, USDT, BNB",
    "Minimum purchase: 1,000 PTY",
    "Token Price: $0.25",
    "Launch Price: $0.78"
  ];

  return (
    <section className="w-full py-12 bg-black">
      <div className="container mx-auto px-4">
        <div className="flex flex-col md:flex-row gap-12 items-center">
          {/* Left side - Image */}
          <div className="flex-1 relative">
            <div className="relative z-10">
              <div className="bg-gradient-to-br from-[#111828] to-[#0F141E] p-8 rounded-2xl border border-[#FFD700]/20">
                <img 
                  src="https://images.unsplash.com/photo-1639762681057-408e52192e55?q=80&w=2832&auto=format&fit=crop" 
                  alt="Cryptocurrency concept" 
                  className="w-full h-auto rounded-xl object-cover"
                />
                <div className="mt-6 p-5 bg-[#111] rounded-xl flex items-center justify-between">
                  <div className="flex flex-col">
                    <span className="text-gray-400 text-sm">Current Price</span>
                    <span className="text-[#FFD700] text-2xl font-bold">$0.25</span>
                  </div>
                  <div className="h-10 w-px bg-gray-700"></div>
                  <div className="flex flex-col">
                    <span className="text-gray-400 text-sm">Next Price</span>
                    <span className="text-white text-2xl font-bold">$0.50</span>
                  </div>
                </div>
              </div>
            </div>
            <div className="absolute -top-5 -left-5 z-0">
              <StarsIcon />
            </div>
          </div>

          {/* Right side - Features */}
          <div className="flex-1">
            <h2 className="text-3xl md:text-4xl font-bold text-white mb-4">
              <span className="text-[#FFD700]">Piety Token</span> Features
            </h2>
            <p className="text-gray-400 mb-8 text-lg">
              Our private cryptocurrency is designed to provide users with the benefits 
              of blockchain technology while maintaining privacy and security.
            </p>
            
            <Card className="bg-[#111828] border-none shadow-lg">
              <CardContent className="p-6">
                <ul className="space-y-4">
                  {features.map((feature, index) => (
                    <li key={index} className="flex items-center gap-3">
                      <span className="flex-shrink-0 w-6 h-6 rounded-full bg-[#FFD700]/20 flex items-center justify-center">
                        <Check className="w-4 h-4 text-[#FFD700]" />
                      </span>
                      <span className="text-white">{feature}</span>
                    </li>
                  ))}
                </ul>
              </CardContent>
            </Card>
            
            <div className="mt-8">
              <button
                className="w-full md:w-auto h-12 px-8 shadow-[0_16px_30px_0_rgba(0,34,57,0.8)] text-[#030B15] text-lg font-bold cursor-pointer rounded-xl border-none bg-[#FFD700] hover:bg-[#E3B419] transition-colors"
                aria-label="Buy Tokens Now"
              >
                Buy Tokens Now
              </button>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default FeaturesSection;
