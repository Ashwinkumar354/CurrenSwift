import { useState } from 'react';
import axios from 'axios';
import { ArrowRightLeft, Loader2 } from 'lucide-react';
import CurrencyInput from './components/CurrencyInput';
import AmountInput from './components/AmountInput';
import type { Currency, ConversionResult } from './types';

const API_KEY = import.meta.env.VITE_API_KEY;
const API_BASE_URL = import.meta.env.VITE_API_BASE_URL;

function App() {
  const [fromCurrency, setFromCurrency] = useState<Currency | null>(null);
  const [toCurrency, setToCurrency] = useState<Currency | null>(null);
  const [amount, setAmount] = useState('');
  const [result, setResult] = useState<ConversionResult | null>(null);
  const [loading, setLoading] = useState(false);
  const [error, setError] = useState<string | null>(null);

  const handleSwapCurrencies = () => {
    setFromCurrency(toCurrency);
    setToCurrency(fromCurrency);
  };

  const handleConvert = async () => {
    // Check if amount is negative
    if (parseFloat(amount) < 0) {
      setError('Amount cannot be negative');
      return;
    }

    if (!fromCurrency || !toCurrency || !amount || parseFloat(amount) <= 0) {
      setError('Please fill in all fields with valid values');
      return;
    }

    setLoading(true);
    setError(null);

    try {
      const response = await axios.get(
        `${API_BASE_URL}/${API_KEY}/pair/${fromCurrency.code}/${toCurrency.code}/${amount}`
      );

      setResult({
        fromAmount: parseFloat(amount),
        toAmount: response.data.conversion_result,
        rate: response.data.conversion_rate,
        fromCurrency,
        toCurrency,
        lastUpdated: new Date().toLocaleString(),
      });
    } catch (err) {
      setError('Failed to fetch conversion rate. Please try again.');
    } finally {
      setLoading(false);
    }
  };

  return (
    <div className="min-h-screen bg-gradient-to-br from-indigo-500 via-purple-500 to-pink-500 py-12 px-4 sm:px-6 lg:px-8">
      <div className="max-w-3xl mx-auto">
        <div className="bg-white/90 dark:bg-gray-800/90 backdrop-blur-sm rounded-2xl shadow-xl p-8 transition-colors">
          <h1 className="text-3xl font-bold text-transparent bg-clip-text bg-gradient-to-r from-indigo-600 to-pink-600 text-center mb-8">
            Currency Converter
          </h1>

          <div className="space-y-6">
            {/* Updated Container for Currency Inputs */}
            <div className="flex justify-between w-full gap-6">
              <CurrencyInput
                value={fromCurrency}
                onChange={setFromCurrency}
                label="From Currency"
              />
              <button
                onClick={handleSwapCurrencies}
                className="p-3 rounded-full bg-white/90 dark:bg-gray-700/90 hover:bg-gray-50 dark:hover:bg-gray-600/90 shadow-lg hover:shadow-xl transition-all transform hover:scale-105"
                aria-label="Swap currencies"
              >
                <ArrowRightLeft className="w-5 h-5 text-indigo-600 dark:text-gray-200" />
              </button>
              <CurrencyInput
                value={toCurrency}
                onChange={setToCurrency}
                label="To Currency"
              />
            </div>

            {/* Amount Input */}
            <AmountInput
              value={amount}
              onChange={setAmount}
              label="Amount"
              placeholder="Enter amount"
            />

            {error && (
              <div className="text-red-500 text-sm text-center">{error}</div>
            )}

            <button
              onClick={handleConvert}
              disabled={loading}
              className="w-full bg-gradient-to-r from-indigo-600 to-pink-600 text-white py-3 px-4 rounded-lg font-medium hover:from-indigo-700 hover:to-pink-700 focus:outline-none focus:ring-2 focus:ring-offset-2 focus:ring-indigo-500 disabled:opacity-50 transition-all transform hover:scale-[1.02]"
            >
              {loading ? (
                <Loader2 className="w-5 h-5 animate-spin mx-auto" />
              ) : (
                'Convert'
              )}
            </button>

            {result && (
              <div className="mt-8 p-6 bg-gradient-to-r from-indigo-50 to-pink-50 dark:from-gray-700/50 dark:to-gray-700/50 rounded-xl">
                <div className="text-center">
                  <div className="text-2xl font-bold text-gray-900 dark:text-gray-100">
                    {result.fromCurrency.symbol}{result.fromAmount.toLocaleString()} = {result.toCurrency.symbol}{result.toAmount.toLocaleString()}
                  </div>
                  <div className="text-sm text-gray-500 dark:text-gray-400 mt-2">
                    1 {result.fromCurrency.code} = {result.rate} {result.toCurrency.code}
                  </div>
                  <div className="text-xs text-gray-400 dark:text-gray-500 mt-1">
                    Last updated: {result.lastUpdated}
                  </div>
                </div>
              </div>
            )}
          </div>
        </div>
      </div>
    </div>
  );
}

export default App;
