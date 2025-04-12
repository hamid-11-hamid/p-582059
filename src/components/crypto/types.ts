export interface PaymentMethod {
  id: string;
  name: string;
  iconUrl: string;
}

export interface ProgressBarProps {
  progress: number; // percentage from 0-100
  soldAmount: string;
  raisedAmount: string;
  tokensSold: string;
}

export interface PriceInfoProps {
  currentPrice: string;
  nextPrice: string;
}

export interface PaymentMethodSelectorProps {
  methods: PaymentMethod[];
  onSelect: (method: PaymentMethod) => void;
}

export interface TokenInputFieldsProps {
  paymentCurrency: string;
  paymentIconUrl: string;
  receiveCurrency: string;
  receiveIconUrl: string;
  onPaymentChange: (value: string) => void;
  onReceiveChange: (value: string) => void;
}

export interface ActionButtonsProps {
  onConnectWallet: () => void;
  onGiveaway: () => void;
}
