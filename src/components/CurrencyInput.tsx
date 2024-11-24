import { useState, useRef, useEffect } from 'react';
import { Search, X } from 'lucide-react';
import { currencies } from '../utils/currencies';
import type { Currency } from '../types';

interface CurrencyInputProps {
  value: Currency | null;
  onChange: (currency: Currency | null) => void;
  label: string;
}

export default function CurrencyInput({ value, onChange, label }: CurrencyInputProps) {
  const [isOpen, setIsOpen] = useState(false);
  const [search, setSearch] = useState('');
  const dropdownRef = useRef<HTMLDivElement>(null);
  const inputRef = useRef<HTMLInputElement>(null);

  const filteredCurrencies = currencies.filter(
    currency =>
      currency.code.toLowerCase().includes(search.toLowerCase()) ||
      currency.name.toLowerCase().includes(search.toLowerCase())
  );

  useEffect(() => {
    function handleClickOutside(event: MouseEvent) {
      if (dropdownRef.current && !dropdownRef.current.contains(event.target as Node)) {
        setIsOpen(false);
        setSearch('');
      }
    }

    document.addEventListener('mousedown', handleClickOutside);
    return () => document.removeEventListener('mousedown', handleClickOutside);
  }, []);

  const handleInputClick = () => {
    setIsOpen(true);
    inputRef.current?.focus();
  };

  const handleClearSelection = () => {
    onChange(null);
    setSearch('');
  };

  return (
    <div className="relative" ref={dropdownRef}>
      <label className="block text-sm font-medium text-gray-700 dark:text-gray-200 mb-1">{label}</label>
      <div className="relative flex items-center">
        <input
          ref={inputRef}
          type="text"
          className="w-full px-4 py-2 border rounded-lg bg-white dark:bg-gray-700 dark:text-gray-100 focus:outline-none focus:ring-2 focus:ring-blue-500 pr-12"
          placeholder="Search or select currency..."
          value={search || (value ? `${value.symbol} ${value.code} - ${value.name}` : '')}
          onChange={(e) => setSearch(e.target.value)}
          onClick={handleInputClick}
          style={{ minWidth: '300px' }}
        />
        {value && (
          <button
            className="absolute right-3 top-1/2 -translate-y-1/2 flex items-center justify-center w-6 h-6 rounded-full bg-gray-200 dark:bg-gray-600 hover:bg-gray-300 dark:hover:bg-gray-500"
            onClick={handleClearSelection}
            aria-label="Clear selection"
          >
            <X className="w-4 h-4 text-gray-600 dark:text-gray-300" />
          </button>
        )}
        <Search className="absolute right-10 top-1/2 -translate-y-1/2 w-4 h-4 text-gray-400 dark:text-gray-300 pointer-events-none" />
      </div>

      {isOpen && (
        <div className="absolute z-10 w-full mt-1 bg-white dark:bg-gray-700 border dark:border-gray-600 rounded-lg shadow-lg">
          <div className="max-h-60 overflow-auto scrollbar-custom">
            {filteredCurrencies.map((currency) => (
              <div
                key={currency.code}
                className="px-4 py-2 hover:bg-blue-50 dark:hover:bg-gray-600 cursor-pointer flex items-center transition-colors"
                onClick={() => {
                  onChange(currency);
                  setIsOpen(false);
                  setSearch('');
                }}
              >
                <span className="w-8 text-lg dark:text-gray-100">{currency.symbol}</span>
                <span className="font-medium dark:text-gray-100">{currency.code}</span>
                <span className="ml-2 text-gray-500 dark:text-gray-400">- {currency.name}</span>
              </div>
            ))}
            {filteredCurrencies.length === 0 && (
              <div className="px-4 py-2 text-gray-500 dark:text-gray-400 text-center">
                No currencies found
              </div>
            )}
          </div>
        </div>
      )}
    </div>
  );
}
