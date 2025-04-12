import React from "react";

const HeroSection: React.FC = () => {
  return (
    <div className="flex flex-col gap-10 pt-[63px] left-[section]">
      <div className="flex flex-col text-[56px] font-bold text-white leading-[1.3] max-sm:text-[40px]">
        <div>
          <span>The</span>
          <span className="text-[#E3B419]"> Private Currency</span>
        </div>
        <div>
          <span>Powering</span>
          <span className="text-[#E3B419]"> URME</span>
          <span> United &amp;</span>
        </div>
        <div>
          <span>Hangdog</span>
          <span className="text-[#E3B419]"> Ranch</span>
          <span className="text-[#EDC211]">.</span>
        </div>
      </div>
      <div className="underline w-[188px] h-1 shadow-[0_16px_30px_0_#003861] rounded-[23.5px]" />
      <div className="text-white text-[25px] mt-2.5">Piety Tokens....</div>
      <button
        className="w-[266px] h-16 shadow-[0_21.33px_40px_rgba(0,34,57,1)] text-[#030B15] text-[21px] font-bold cursor-pointer rounded-3xl border-[none] bg-[#FFD700] hover:bg-[#E3B419] transition-colors"
        aria-label="Buy Tokens Now"
      >
        Buy Tokens Now
      </button>
    </div>
  );
};

export default HeroSection;
