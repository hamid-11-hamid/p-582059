import React from "react";

interface PriceInfoProps {
  currentPrice: string;
  nextPrice: string;
}

const PriceInfo: React.FC<PriceInfoProps> = ({ currentPrice, nextPrice }) => {
  return (
    <div className="flex justify-between items-center bg-[rgba(17,24,30,0.32)] mb-5 p-[18px] rounded-[10.575px] border-[0.938px] border-solid border-[rgba(255,255,255,0.12)]">
      <div className="text-white text-sm font-bold">
        1 $PTY = {currentPrice}
      </div>
      <div className="text-[#EDC211] text-sm font-bold">
        Next Price: {nextPrice}
      </div>
    </div>
  );
};

export default PriceInfo;
