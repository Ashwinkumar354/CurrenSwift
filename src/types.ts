export interface Currency {
  code: string;
  name: string;
  symbol: string;
}

export interface ConversionResult {
  fromAmount: number;
  toAmount: number;
  rate: number;
  fromCurrency: Currency;
  toCurrency: Currency;
  lastUpdated: string;
}