export interface Currency {
  code: string;
  name: string;
  symbol: string;
  direction: 'ltr' | 'rtl';
}

export interface ConversionResult {
  fromAmount: number;
  toAmount: number;
  rate: number;
  fromCurrency: Currency;
  toCurrency: Currency;
  lastUpdated: string;
}