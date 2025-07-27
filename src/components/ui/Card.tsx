import { cn } from "@/lib/utils";

interface CardProps {
  children: React.ReactNode;
  className?: string;
  hover?: boolean;
}

export default function Card({
  children,
  className,
  hover = false,
}: CardProps) {
  return (
    <div
      className={cn(
        "bg-white rounded-xl shadow-lg overflow-hidden",
        hover && "transition-all hover:shadow-xl hover:scale-105",
        className
      )}
    >
      {children}
    </div>
  );
}
