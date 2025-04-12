import React from "react";
import StarsIcon from "@/assets/icons/StarsIcon";

interface ActionButtonsProps {
  onConnectWallet: () => void;
  onGiveaway: () => void;
}

const ActionButtons: React.FC<ActionButtonsProps> = ({
  onConnectWallet,
  onGiveaway,
}) => {
  return (
    <>
      <button
        className="w-full text-black text-sm font-semibold cursor-pointer bg-[#FFD700] hover:bg-[#E3B419] transition-colors mb-[11px] p-[11.5px] rounded-[7.05px] border-[none]"
        onClick={onConnectWallet}
      >
        Connect wallet &amp; Pay
      </button>
      <button
        className="w-full text-white text-sm font-semibold flex items-center justify-center gap-2.5 cursor-pointer hover:bg-[rgba(249,255,56,0.1)] transition-colors px-3 py-[7px] rounded-[7.05px] border-[0.938px] border-solid border-[rgba(249,255,56,0.32)]"
        onClick={onGiveaway}
      >
        <div>
          <StarsIcon />
        </div>
        <span>$PTY Giveaway</span>
      </button>
    </>
  );
};

export default ActionButtons;
