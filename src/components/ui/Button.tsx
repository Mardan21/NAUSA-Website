import Link from "next/link";
import { cn } from "@/lib/utils";

interface ButtonProps {
  href?: string;
  variant?: "primary" | "secondary" | "outline";
  size?: "sm" | "md" | "lg";
  className?: string;
  children: React.ReactNode;
  onClick?: () => void;
}

export default function Button({
  href,
  variant = "primary",
  size = "md",
  className,
  children,
  onClick,
}: ButtonProps) {
  const baseStyles =
    "font-black uppercase tracking-wide transition-all transform hover:scale-105 rounded-full inline-block text-center";

  const variants = {
    primary: "bg-nausa-green text-white hover:bg-green-600 shadow-lg",
    secondary: "bg-nausa-blue text-white hover:bg-blue-800 shadow-lg",
    outline:
      "border-4 border-white text-white hover:bg-white hover:text-nausa-blue",
  };

  const sizes = {
    sm: "px-6 py-2 text-sm",
    md: "px-8 py-3 text-base",
    lg: "px-10 py-5 text-lg",
  };

  const buttonClasses = cn(
    baseStyles,
    variants[variant],
    sizes[size],
    className
  );

  if (href) {
    return (
      <Link href={href} className={buttonClasses}>
        {children}
      </Link>
    );
  }

  return (
    <button onClick={onClick} className={buttonClasses}>
      {children}
    </button>
  );
}
