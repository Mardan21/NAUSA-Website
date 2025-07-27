"use client";

import { useState, useEffect } from "react";
import Link from "next/link";
import { Menu, X } from "lucide-react";
import { cn } from "@/lib/utils";
// import { SITE_CONFIG } from "@/lib/constants";
// import { tournaments } from "@/data/tournaments";
import MobileMenu from "./MobileMenu";
import Image from "next/image";

export default function Navigation() {
  const [scrolled, setScrolled] = useState(false);
  const [mobileMenuOpen, setMobileMenuOpen] = useState(false);
  // const [tournamentsDropdown, setTournamentsDropdown] = useState(false);

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
        "fixed w-full z-50 transition-all duration-300",
        scrolled
          ? "bg-nausa-blue/95 backdrop-blur-md shadow-2xl"
          : "bg-gradient-to-b from-black/80 to-transparent"
      )}
    >
      {/* Ticker Bar */}
      {/* <div className="bg-nausa-green text-white py-1 overflow-hidden">
        <div className="animate-scroll-left whitespace-nowrap">
          <span className="inline-block px-8">
            🏆 Uyghur American Cup 2025 Coming Soon!
          </span>
          <span className="inline-block px-8">
            📅 Tournament Date: December 14-21, 2025
          </span>
          <span className="inline-block px-8">📍 Location: Houston, Texas</span>
          <span className="inline-block px-8">
            🏆 Uyghur American Cup 2025 Coming Soon!
          </span>
        </div>
      </div> */}

      <div className="container mx-auto px-4">
        <div className="flex items-center justify-between h-20">
          {/* Logo */}
          <Link href="/" className="flex items-center gap-3">
            <div className="relative">
              <div className="w-14 h-14 bg-white rounded-full flex items-center justify-center shadow-lg">
                <Image
                  src="/images/badges/nausa_logo.jpg"
                  alt="Nausa Logo"
                  width={50}
                  height={50}
                  className="object-cover rounded-full"
                />
              </div>
            </div>
            <div className="text-white">
              <h1 className="text-2xl font-black tracking-tight">
                {/* {SITE_CONFIG.name} */}
                North American Uyghur Sports Association
              </h1>
              {/* <p className="text-xs opacity-90">NAUSA</p> */}
            </div>
          </Link>

          {/* Desktop Navigation */}
          <div className="hidden md:flex items-center gap-8">
            <Link
              href="/"
              className="font-bold uppercase tracking-wide text-white hover:text-nausa-lightblue transition-all"
            >
              Home
            </Link>

            <Link
              href="/about"
              className="font-bold uppercase tracking-wide text-white hover:text-nausa-lightblue transition-all"
            >
              About
            </Link>

            {/* <div className="relative">
              <button
                onClick={() => setTournamentsDropdown(!tournamentsDropdown)}
                className="font-bold uppercase tracking-wide text-white hover:text-nausa-green transition-all flex items-center gap-1"
              >
                <span>Tournaments</span>
                <ChevronDown
                  className={cn(
                    "w-4 h-4 transition-transform",
                    tournamentsDropdown && "rotate-180"
                  )}
                />
              </button>
              {tournamentsDropdown && (
                <div className="absolute top-full mt-2 w-56 bg-nausa-blue rounded-lg shadow-2xl py-2 border border-blue-800">
                  {tournaments.map((tournament) => (
                    <Link
                      key={tournament.year}
                      href={`/tournaments/${tournament.year}`}
                      className="block w-full text-left px-4 py-3 text-sm text-white hover:bg-nausa-green transition-colors font-medium"
                      onClick={() => setTournamentsDropdown(false)}
                    >
                      <div className="flex items-center justify-between">
                        <span>{tournament.year}</span>
                        <span className="text-xs opacity-75">
                          {tournament.location}
                        </span>
                      </div>
                    </Link>
                  ))}
                </div>
              )}
            </div> */}

            <Link
              href="/media"
              className="font-bold uppercase tracking-wide text-white hover:text-nausa-lightblue transition-all"
            >
              Media
            </Link>

            <Link
              href="/bylaws"
              className="font-bold uppercase tracking-wide text-white hover:text-nausa-lightblue transition-all"
            >
              By-Laws
            </Link>

            <Link
              href="/donate"
              className="bg-gradient-to-r from-nausa-lightblue to-blue-500 text-white px-8 py-3 rounded-full font-black uppercase tracking-wide border-nausa-lightblue hover:from-white hover:to-white hover:text-nausa-lightblue hover:border-nausa-lightblue border-4 transition-all shadow-lg transform hover:scale-105"
            >
              Donate
            </Link>
          </div>

          {/* Mobile Menu Button */}
          <button
            onClick={() => setMobileMenuOpen(!mobileMenuOpen)}
            className="md:hidden p-2 text-white"
          >
            {mobileMenuOpen ? (
              <X className="w-6 h-6" />
            ) : (
              <Menu className="w-6 h-6" />
            )}
          </button>
        </div>
      </div>

      {/* Mobile Menu */}
      <MobileMenu
        isOpen={mobileMenuOpen}
        onClose={() => setMobileMenuOpen(false)}
      />
    </nav>
  );
}
