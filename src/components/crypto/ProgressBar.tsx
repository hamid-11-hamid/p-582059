
import React from "react";

interface ProgressBarProps {
  progress: number; // percentage from 0-100
  soldAmount: string;
  raisedAmount: string;
  tokensSold: string;
}

const ProgressBar: React.FC<ProgressBarProps> = ({
  progress,
  soldAmount,
  raisedAmount,
  tokensSold,
}) => {
  // Calculate width based on progress percentage
  const progressWidth = `${progress}%`;

  return (
    <>
      <div className="h-5 relative bg-[rgba(9,31,47,0.40)] mb-3 rounded-full overflow-hidden">
        <div
          className="h-full bg-gradient-to-r from-[#FFD700]/80 to-[#F9FF38] shadow-[0_0_10px_rgba(249,255,56,0.5)]"
          style={{ width: progressWidth }}
          aria-valuemin={0}
          aria-valuemax={100}
          aria-valuenow={progress}
          role="progressbar"
        />
        <div className="absolute -translate-y-1/2 text-[#EDC211] text-sm font-bold right-3 top-1/2">
          {soldAmount}
        </div>
      </div>
      <div className="text-center text-white text-sm leading-[21px] mb-5">
        <div>USD RAISED SO FAR : {raisedAmount}</div>
        <div>Tokens Sold : {tokensSold}</div>
      </div>
    </>
  );
};

export default ProgressBar;
