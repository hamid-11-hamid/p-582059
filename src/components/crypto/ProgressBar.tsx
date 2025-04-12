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
      <div className="h-[21px] relative bg-[rgba(9,31,47,0.80)] mb-[15px]">
        <div
          className="h-5 shadow-[0_1.875px_9.844px_0_#F9FF38]"
          style={{ width: progressWidth }}
          aria-valuemin={0}
          aria-valuemax={100}
          aria-valuenow={progress}
          role="progressbar"
        />
        <div className="absolute -translate-y-2/4 text-[#EDC211] text-sm font-bold opacity-60 right-[7px] top-2/4">
          {soldAmount} Sold
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
