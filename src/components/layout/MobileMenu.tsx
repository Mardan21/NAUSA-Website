import Link from "next/link";
import { NAVIGATION_ITEMS } from "@/lib/constants";

interface MobileMenuProps {
  isOpen: boolean;
  onClose: () => void;
}

export default function MobileMenu({ isOpen, onClose }: MobileMenuProps) {
  if (!isOpen) return null;

  return (
    <div className="md:hidden bg-nausa-blue border-t border-blue-800">
      <div className="px-4 py-2 space-y-1">
        {NAVIGATION_ITEMS.map((item) => (
          <Link
            key={item.href}
            href={item.href}
            onClick={onClose}
            className="block w-full text-left px-4 py-3 text-white hover:bg-nausa-green rounded font-bold uppercase"
          >
            {item.label}
          </Link>
        ))}
        <Link
          href="/donate"
          onClick={onClose}
          className="block w-full bg-nausa-green text-white px-4 py-3 rounded-full font-black uppercase mt-2 text-center"
        >
          Donate
        </Link>
      </div>
    </div>
  );
}
