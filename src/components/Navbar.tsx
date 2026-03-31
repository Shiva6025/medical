"use client";

import Link from "next/link";
import Image from "next/image";
import { usePathname } from "next/navigation";
import { useState, useEffect } from "react";
import { Menu, X, ChevronDown, Search } from "lucide-react";
import { cn } from "@/lib/utils";

const NavLinks = [
  { name: "About Us", href: "/about", hasDropdown: false },
  { name: "Products", href: "/products", hasDropdown: true },
  { name: "Innovations", href: "/innovations", hasDropdown: false },
  // { name: "Education", href: "/education", hasDropdown: true },
  { name: "News & Events", href: "/events", hasDropdown: false },
];

export default function Navbar() {
  const pathname = usePathname();
  const [isScrolled, setIsScrolled] = useState(false);
  const [isMobileMenuOpen, setIsMobileMenuOpen] = useState(false);

  useEffect(() => {
    const handleScroll = () => {
      setIsScrolled(window.scrollY > 20);
    };
    window.addEventListener("scroll", handleScroll);
    return () => window.removeEventListener("scroll", handleScroll);
  }, []);

  return (
    <nav
      className={cn(
        "fixed top-0 left-0 right-0 z-50 transition-all duration-300",
        isScrolled ? "glass h-16 shadow-lg" : "bg-transparent h-20"
      )}
    >
      <div className="max-w-7xl mx-auto px-4 h-full flex items-center justify-between">
        {/* Logo */}
        <Link href="/" className="flex items-center gap-2 group">
          <div className="relative w-32 h-12 overflow-hidden rounded-lg bg-white/10 group-hover:bg-white/20 transition-all">
            <Image
              src={isScrolled ? "/dark-logo.jpeg" : "/white-logo.jpeg"}
              alt="VIRAAT Logo"
              fill
              quality={100}
              priority
              className="object-contain p-1 rounded-lg"
            />
          </div>
          {/* <span className={cn(
            "text-2xl font-bold tracking-tight transition-colors",
            isScrolled ? "text-primary" : "text-white"
          )}>
            VIRAAT
          </span> */}
        </Link>

        {/* Desktop Navigation */}
        <div className="hidden lg:flex items-center gap-8">
          {NavLinks.map((link) => (
            <div key={link.name} className="relative group">
              <Link
                href={link.href}
                className={cn(
                  "flex items-center gap-1 text-sm font-semibold uppercase tracking-wider transition-all hover:text-secondary",
                  isScrolled ? "text-primary/80" : "text-white/90"
                )}
              >
                {link.name}
                {link.hasDropdown && <ChevronDown className="w-4 h-4 opacity-50" />}
              </Link>
              <div className="absolute -bottom-1 left-0 w-0 h-0.5 bg-secondary group-hover:w-full transition-all duration-300" />
            </div>
          ))}
        </div>

        {/* Actions */}
        <div className="hidden lg:flex items-center gap-6">
          <button className={cn(
            "transition-colors",
            isScrolled ? "text-primary/60 hover:text-primary" : "text-white/60 hover:text-white"
          )}>
            <Search className="w-5 h-5" />
          </button>
          <Link href="/contact" className="btn-gold">
            Contact Us
          </Link>
        </div>

        {/* Mobile menu button */}
        <button
          className={cn(
            "lg:hidden p-2 rounded-lg",
            isScrolled ? "text-primary hover:bg-black/5" : "text-white hover:bg-white/10"
          )}
          onClick={() => setIsMobileMenuOpen(!isMobileMenuOpen)}
        >
          {isMobileMenuOpen ? <X /> : <Menu />}
        </button>
      </div>

      {/* Mobile Navigation */}
      {isMobileMenuOpen && (
        <div className="lg:hidden absolute top-full left-0 right-0 bg-white shadow-2xl border-t border-gray-100 p-4 flex flex-col gap-4 animate-in slide-in-from-top-4">
          {NavLinks.map((link) => (
            <Link
              key={link.name}
              href={link.href}
              className="text-primary font-semibold py-2 px-4 rounded-lg hover:bg-gray-50 flex justify-between items-center"
              onClick={() => setIsMobileMenuOpen(false)}
            >
              {link.name}
              {link.hasDropdown && <ChevronDown className="w-4 h-4" />}
            </Link>
          ))}
          <Link
            href="/contact"
            className="btn-gold text-center mt-2"
            onClick={() => setIsMobileMenuOpen(false)}
          >
            Contact Us
          </Link>
        </div>
      )}
    </nav>
  );
}
