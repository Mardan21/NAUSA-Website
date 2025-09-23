import Link from "next/link";
import { NAVIGATION_ITEMS } from "@/lib/constants";
import { cn } from "@/lib/utils";

interface MobileMenuProps {
  isOpen: boolean;
  onClose: () => void;
}

export default function MobileMenu({ isOpen, onClose }: MobileMenuProps) {
  return (
    <div
      className={cn(
        "md:hidden fixed left-0 right-0 top-14 sm:top-16 lg:top-20 bg-nausa-blue/98 backdrop-blur-lg border-t border-nausa-lightblue/20 shadow-2xl transition-all duration-300 ease-in-out overflow-hidden",
        isOpen
          ? "max-h-screen opacity-100 visible"
          : "max-h-0 opacity-0 invisible"
      )}
    >
      <div className="px-4 py-4 space-y-2">
        {NAVIGATION_ITEMS.map((item, index) => (
          <Link
            key={item.href}
            href={item.href}
            onClick={onClose}
            className={cn(
              "block w-full text-left px-4 py-3 text-white hover:bg-nausa-lightblue/20 hover:text-nausa-lightblue rounded-lg font-bold uppercase transition-all duration-300 transform hover:translate-x-2",
              `animate-slideIn`
            )}
            style={{ animationDelay: `${index * 50}ms` }}
          >
            <span className="flex items-center justify-between">
              {item.label}
              <span className="w-0 h-0.5 bg-nausa-lightblue rounded transition-all duration-300 group-hover:w-6"></span>
            </span>
          </Link>
        ))}

        {/* Enhanced Mobile Donate Button */}
        <div className="pt-4 border-t border-nausa-lightblue/20">
          <Link
            href="/donate"
            onClick={onClose}
            className="block w-full bg-gradient-to-r from-nausa-lightblue to-blue-500 text-white px-4 py-3 rounded-full font-black uppercase text-center transition-all duration-300 transform hover:scale-105 shadow-lg hover:shadow-nausa-lightblue/25"
          >
            Donate Now
          </Link>
        </div>
      </div>
    </div>
  );
}
