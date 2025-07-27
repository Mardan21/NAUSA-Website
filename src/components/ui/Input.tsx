import { cn } from "@/lib/utils";

interface InputProps extends React.InputHTMLAttributes<HTMLInputElement> {
  label?: string;
  error?: string;
}

export default function Input({
  label,
  error,
  className,
  required,
  ...props
}: InputProps) {
  return (
    <div>
      {label && (
        <label className="block text-gray-700 font-bold mb-2 uppercase text-sm tracking-wide">
          {label} {required && "*"}
        </label>
      )}
      <input
        className={cn(
          "w-full px-4 py-3 border-2 border-gray-300 rounded-lg focus:ring-2 focus:ring-nausa-green focus:border-transparent font-medium",
          error && "border-red-500",
          className
        )}
        required={required}
        {...props}
      />
      {error && <p className="mt-1 text-sm text-red-600">{error}</p>}
    </div>
  );
}
