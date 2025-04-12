import React, { useState } from "react";

interface PaymentMethod {
  id: string;
  name: string;
  iconUrl: string;
}

interface PaymentMethodSelectorProps {
  methods: PaymentMethod[];
  onSelect: (method: PaymentMethod) => void;
}

const PaymentMethodSelector: React.FC<PaymentMethodSelectorProps> = ({
  methods,
  onSelect,
}) => {
  const [selectedMethod, setSelectedMethod] = useState<string | null>(null);

  const handleSelect = (method: PaymentMethod) => {
    setSelectedMethod(method.id);
    onSelect(method);
  };

  return (
    <div className="flex gap-2 mb-5 max-sm:flex-col">
      {methods.map((method) => (
        <button
          key={method.id}
          className={`flex items-center gap-[7.5px] text-sm cursor-pointer bg-[rgba(17,24,30,0.32)] px-11 py-3 rounded-[11.25px] border-[0.938px] border-solid ${
            selectedMethod === method.id
              ? "border-[#F9FF38] text-white"
              : "border-[rgba(249,255,56,0.32)] text-[rgba(255,255,255,0.32)]"
          } hover:border-[#F9FF38] hover:text-white transition-colors max-sm:w-full`}
          onClick={() => handleSelect(method)}
          aria-pressed={selectedMethod === method.id}
        >
          <img
            src={method.iconUrl}
            className="w-[30px] h-[30px]"
            alt={method.name}
          />
          <span>{method.name}</span>
        </button>
      ))}
    </div>
  );
};

export default PaymentMethodSelector;
