
import React from "react";

const HeroSection: React.FC = () => {
  return (
    <div className="flex flex-col gap-8">
      <div className="flex flex-col text-[36px] md:text-[48px] lg:text-[56px] font-bold text-white leading-[1.2] tracking-tight">
        <div>
          <span className="text-white">The </span>
          <span className="text-[#FFD700]">Private Currency</span>
        </div>
        <div>
          <span className="text-white">Powering </span>
          <span className="text-[#FFD700]">URME</span>
          <span className="text-white"> United &amp;</span>
        </div>
        <div>
          <span className="text-[#FFD700]">Hangdog</span>
          <span className="text-white"> Ranch</span>
          <span className="text-[#FFD700]">.</span>
        </div>
      </div>
      
      <div className="bg-[#FFD700] w-[120px] md:w-[188px] h-1 opacity-80" />
      
      <div className="text-white text-xl md:text-[25px]">Piety Tokens....</div>
      
      <div className="pt-4">
        <button
          className="w-[200px] md:w-[266px] h-14 shadow-[0_15px_30px_rgba(255,215,0,0.2)] text-[#030B15] text-lg font-bold cursor-pointer rounded-full border-none bg-[#FFD700] hover:bg-[#E3B419] transition-colors"
          aria-label="Buy Tokens Now"
        >
          Buy Tokens Now
        </button>
      </div>
    </div>
  );
};

export default HeroSection;
