import React from "react";

interface TokenInputFieldsProps {
  paymentCurrency: string;
  paymentIconUrl: string;
  receiveCurrency: string;
  receiveIconUrl: string;
  onPaymentChange: (value: string) => void;
  onReceiveChange: (value: string) => void;
}

const TokenInputFields: React.FC<TokenInputFieldsProps> = ({
  paymentCurrency,
  paymentIconUrl,
  receiveCurrency,
  receiveIconUrl,
  onPaymentChange,
  onReceiveChange,
}) => {
  return (
    <div className="flex gap-2 mb-5 max-sm:flex-col">
      <div className="flex-1">
        <label
          htmlFor="payment-input"
          className="text-[#F9FF38] text-sm mb-[9px] block"
        >
          {paymentCurrency} you pay
        </label>
        <div className="flex items-center bg-[rgba(17,24,30,0.32)] px-[18px] py-[13.5px] rounded-[10.575px] border-[0.938px] border-solid border-[rgba(255,255,255,0.12)]">
          <input
            id="payment-input"
            type="text"
            className="flex-1 h-[21px] bg-transparent border-none text-white focus:outline-none"
            onChange={(e) => onPaymentChange(e.target.value)}
            placeholder="0.00"
          />
          <img
            src={paymentIconUrl}
            className="w-[30px] h-[30px]"
            alt={paymentCurrency}
          />
        </div>
      </div>
      <div className="flex-1">
        <label
          htmlFor="receive-input"
          className="text-[#F9FF38] text-sm mb-[9px] block"
        >
          {receiveCurrency} you receive
        </label>
        <div className="flex items-center bg-[rgba(17,24,30,0.32)] px-[18px] py-[13.5px] rounded-[10.575px] border-[0.938px] border-solid border-[rgba(255,255,255,0.12)]">
          <input
            id="receive-input"
            type="text"
            className="flex-1 h-[21px] bg-transparent border-none text-white focus:outline-none"
            onChange={(e) => onReceiveChange(e.target.value)}
            placeholder="0.00"
          />
          <img
            src={receiveIconUrl}
            className="w-[30px] h-[30px]"
            alt={receiveCurrency}
          />
        </div>
      </div>
    </div>
  );
};

export default TokenInputFields;
