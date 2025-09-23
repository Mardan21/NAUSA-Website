"use client";

import { useState, useEffect } from "react";
import Link from "next/link";
import { Menu, X } from "lucide-react";
import { cn } from "@/lib/utils";
import MobileMenu from "./MobileMenu";
import Image from "next/image";

export default function Navigation() {
  const [scrolled, setScrolled] = useState(false);
  const [mobileMenuOpen, setMobileMenuOpen] = useState(false);

  useEffect(() => {
    const handleScroll = () => {
      setScrolled(window.scrollY > 20);
    };
    window.addEventListener("scroll", handleScroll);
    return () => window.removeEventListener("scroll", handleScroll);
  }, []);

  return (
    <nav
      className={cn(
        "fixed w-full z-50 transition-all duration-500 ease-in-out",
        scrolled
          ? "bg-nausa-blue/98 backdrop-blur-lg shadow-2xl border-b border-nausa-lightblue/20"
          : "bg-gradient-to-b from-black/70 via-black/40 to-transparent"
      )}
    >
      <div className="container mx-auto px-4">
        <div className="flex items-center justify-between h-14 sm:h-16 lg:h-20">
          {/* Enhanced Logo */}
          <Link href="/" className="flex items-center gap-2 sm:gap-3 group">
            <div className="relative">
              {/* Glowing background effect */}
              <div className="absolute inset-0 bg-nausa-lightblue/20 rounded-full blur-md group-hover:bg-nausa-lightblue/40 transition-all duration-300"></div>
              <div className="relative w-8 h-8 sm:w-10 sm:h-10 lg:w-12 lg:h-12 bg-white rounded-full flex items-center justify-center shadow-lg ring-2 ring-white/20 group-hover:ring-nausa-lightblue/50 transition-all duration-300">
                <Image
                  src="/images/badges/nausa_logo.jpg"
                  alt="NAUSA Logo"
                  width={40}
                  height={40}
                  className="w-6 h-6 sm:w-8 sm:h-8 lg:w-10 lg:h-10 object-cover rounded-full"
                />
              </div>
            </div>
            <div className="text-white">
              <h1 className="text-sm sm:text-lg lg:text-xl font-black tracking-tight group-hover:text-nausa-lightblue transition-colors duration-300">
                <span className="sm:hidden">NAUSA</span>
                <span className="hidden sm:inline lg:hidden">NAUSA</span>
                <span className="hidden lg:inline">
                  North American Uyghur Sports Association
                </span>
              </h1>
              <p className="text-xs opacity-75 hidden sm:block group-hover:opacity-100 transition-opacity duration-300">
                Promoting unity through sports
              </p>
            </div>
          </Link>

          {/* Enhanced Desktop Navigation */}
          <div className="hidden md:flex items-center gap-1 lg:gap-2">
            {[
              { href: "/", label: "Home" },
              { href: "/about", label: "About" },
              { href: "/media", label: "Media" },
              { href: "/bylaws", label: "By-Laws" },
            ].map((item) => (
              <Link
                key={item.href}
                href={item.href}
                className="relative px-3 lg:px-4 py-2 font-bold uppercase tracking-wide text-white hover:text-nausa-lightblue transition-all duration-300 text-xs lg:text-sm group"
              >
                {item.label}
                {/* Hover underline effect */}
                <span className="absolute bottom-0 left-0 w-0 h-0.5 bg-nausa-lightblue group-hover:w-full transition-all duration-300"></span>
              </Link>
            ))}

            {/* Enhanced Donate Button */}
            <Link
              href="/donate"
              className="relative ml-2 lg:ml-4 bg-gradient-to-r from-nausa-lightblue to-blue-500 text-white px-4 lg:px-6 py-2 rounded-full font-black uppercase tracking-wide border-2 border-transparent hover:from-white hover:to-white hover:text-nausa-lightblue hover:border-nausa-lightblue transition-all duration-300 shadow-lg transform hover:scale-105 text-xs lg:text-sm overflow-hidden group"
            >
              {/* Shine effect */}
              <span className="absolute inset-0 bg-gradient-to-r from-transparent via-white/20 to-transparent -translate-x-full group-hover:translate-x-full transition-transform duration-1000"></span>
              <span className="relative">Donate</span>
            </Link>
          </div>

          {/* Enhanced Mobile Menu Button */}
          <button
            onClick={() => setMobileMenuOpen(!mobileMenuOpen)}
            className="md:hidden relative p-2 text-white hover:text-nausa-lightblue transition-colors duration-300 group"
          >
            <div className="relative w-6 h-6">
              <Menu
                className={cn(
                  "absolute inset-0 w-6 h-6 transition-all duration-300",
                  mobileMenuOpen
                    ? "opacity-0 rotate-90"
                    : "opacity-100 rotate-0"
                )}
              />
              <X
                className={cn(
                  "absolute inset-0 w-6 h-6 transition-all duration-300",
                  mobileMenuOpen
                    ? "opacity-100 rotate-0"
                    : "opacity-0 -rotate-90"
                )}
              />
            </div>
          </button>
        </div>
      </div>

      {/* Enhanced Mobile Menu */}
      <MobileMenu
        isOpen={mobileMenuOpen}
        onClose={() => setMobileMenuOpen(false)}
      />
    </nav>
  );
}
