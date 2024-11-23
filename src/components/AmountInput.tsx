interface AmountInputProps {
  value: string;
  onChange: (value: string) => void;
  label: string;
  placeholder?: string;
}

export default function AmountInput({ value, onChange, label, placeholder }: AmountInputProps) {
  return (
    <div>
      <label className="block text-sm font-medium text-gray-700 mb-1">{label}</label>
      <input
        type="number"
        min="0" 
        step="0.01"
        value={value}
        onChange={(e) => onChange(e.target.value)}
        className="w-full px-4 py-2 border rounded-lg focus:outline-none focus:ring-2 focus:ring-blue-500"
        placeholder={placeholder || "Enter amount"}
      />
    </div>
  );
}