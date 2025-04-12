
import React, { useState } from "react";
import ProgressBar from "./ProgressBar";
import PriceInfo from "./PriceInfo";
import PaymentMethodSelector from "./PaymentMethodSelector";
import TokenInputFields from "./TokenInputFields";
import ActionButtons from "./ActionButtons";

// Define payment methods
const paymentMethods = [
  { id: "eth", name: "ETH", iconUrl: "https://cdn.builder.io/api/v1/image/assets/TEMP/aad3f59a54aef50ef5c544ad304bdeafca536201" },
  { id: "usdt", name: "USDT", iconUrl: "https://cdn.builder.io/api/v1/image/assets/TEMP/7249a3cd8b26cc0f8238054c4253773e1390af03" },
  { id: "card", name: "CARD", iconUrl: "https://cdn.builder.io/api/v1/image/assets/TEMP/ace921abcb93c16bdf07fd6dda2f0a9f23fadd22" },
];

const TokenPurchaseForm: React.FC = () => {
  const [selectedPaymentMethod, setSelectedPaymentMethod] = useState(
    paymentMethods[0],
  );
  const [paymentAmount, setPaymentAmount] = useState("");
  const [receiveAmount, setReceiveAmount] = useState("");

  const handlePaymentMethodSelect = (method) => {
    setSelectedPaymentMethod(method);
  };

  const handlePaymentChange = (value: string) => {
    setPaymentAmount(value);
    // Calculate receive amount based on current price (simplified)
    const numValue = parseFloat(value) || 0;
    setReceiveAmount((numValue * 4).toString()); // Assuming 1 ETH = 4 PTY
  };

  const handleReceiveChange = (value: string) => {
    setReceiveAmount(value);
    // Calculate payment amount based on current price (simplified)
    const numValue = parseFloat(value) || 0;
    setPaymentAmount((numValue / 4).toString()); // Assuming 1 PTY = 0.25 ETH
  };

  const handleConnectWallet = () => {
    alert("Connect wallet functionality would be implemented here");
  };

  const handleGiveaway = () => {
    alert("Giveaway functionality would be implemented here");
  };

  return (
    <div className="w-full max-w-[540px] shadow-[0_0_30px_rgba(255,215,0,0.1)] backdrop-blur-[6.76px] bg-black/80 p-5 rounded-2xl border-2 border-solid border-[#FFD700]/30">
      <div className="p-4 rounded-[10.575px]">
        <div className="text-center mb-6">
          <h2 className="text-white text-2xl font-bold">Buy Now</h2>
          <div className="text-[#FFD700] text-2xl font-bold mt-1">
            Before Price Rises
          </div>
        </div>

        <ProgressBar
          progress={20.15}
          soldAmount="20.15% Sold"
          raisedAmount="$13,841,048.3"
          tokensSold="1,000,000"
        />

        <PriceInfo currentPrice="$0.25" nextPrice="$0.50" />

        <PaymentMethodSelector
          methods={paymentMethods}
          onSelect={handlePaymentMethodSelect}
        />

        <TokenInputFields
          paymentCurrency={selectedPaymentMethod.name}
          paymentIconUrl="https://cdn.builder.io/api/v1/image/assets/TEMP/dbada6f5211c540ca57c365ab31c44cd7f67f846"
          receiveCurrency="$PTY"
          receiveIconUrl="https://cdn.builder.io/api/v1/image/assets/TEMP/a80e3315ecb06d9318357aa5eb0e0e7e4e5969b5"
          onPaymentChange={handlePaymentChange}
          onReceiveChange={handleReceiveChange}
        />

        <ActionButtons
          onConnectWallet={handleConnectWallet}
          onGiveaway={handleGiveaway}
        />
      </div>
    </div>
  );
};

export default TokenPurchaseForm;
