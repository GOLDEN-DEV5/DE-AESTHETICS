'use client';
import { useState } from 'react';
import Link from 'next/link';
import { usePathname } from 'next/navigation';

export default function Navbar() {
  const pathname = usePathname();
  const [isOpen, setIsOpen] = useState(false);

  const navLinks = [
    { name: 'Home', href: '/' },
    { name: 'About', href: '/about' },
    { name: 'Services', href: '/services' },
  ];

  return (
    <nav className="sticky top-0 z-50 bg-[#EAEFF8] backdrop-blur-md border-b border-slate-900">
      <div className="max-w-6xl mx-auto px-6 h-16 flex items-center justify-between">
        
        {/* Brand Logo */}
        <Link href="/" className="text-lg font-normal tracking-widest text-white group z-50">
          <span className="text-[#C5A059] font-serif group-hover:text-[#C5A059] transition-colors"> DE AESTHETICS</span>
        </Link>

        {/* Desktop Navigation Links */}
        <div className="hidden md:flex items-center space-x-8">
          <div className="flex items-center space-x-6">
            {navLinks.map((link) => {
              const isActive = pathname === link.href;
              return (
                <Link
                  key={link.href}
                  href={link.href}
                  className={`text-xs uppercase tracking-wider transition-colors ${
                    isActive 
                      ? 'text-[#C5A059] font-medium' 
                      : 'text-black hover:text-[#C5A059] font-light'
                  }`}
                >
                  {link.name}
                </Link>
              );
            })}
          </div>

          <Link 
            href="/contact" 
            className="bg-[#0F1E36] hover:bg-[#1A2E4C] text-white font-medium text-xs uppercase tracking-wider px-4 py-2 rounded transition-all duration-300"
          >
            Contact
          </Link>
        </div>

        {/* Hamburger Menu Button (Visible on Mobile Only) */}
        <button 
          onClick={() => setIsOpen(!isOpen)}
          className="md:hidden text-slate-400 hover:text-black focus:outline-none z-50 p-2"
          aria-label="Toggle Menu"
        >
          <svg className="h-6 w-6 fill-none stroke-current" viewBox="0 0 24 24">
            {isOpen ? (
              // "X" Close Icon
              <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="1.5" d="M6 18L18 6M6 6l12 12" />
            ) : (
              // 3-Line Hamburger Icon
              <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="1.5" d="M4 6h16M4 12h16M4 18h16" />
            )}
          </svg>
        </button>
      </div>

      {/* Mobile Drawer Panel (Slide down animation via Tailwind state adjustments) */}
      <div 
        className={`fixed inset-0 bg-slate-950/98 z-40 flex flex-col justify-center items-center transition-all duration-300 ease-in-out md:hidden ${
          isOpen ? 'opacity-100 visible translate-y-0' : 'opacity-0 invisible -translate-y-4'
        }`}
      >
        <div className="flex flex-col items-center space-y-8 text-center">
          {navLinks.map((link) => {
            const isActive = pathname === link.href;
            return (
              <Link
                key={link.href}
                href={link.href}
                onClick={() => setIsOpen(false)} // Close menu on navigation click
                className={`text-lg uppercase tracking-widest transition-colors ${
                  isActive ? 'text-sky-400 font-medium' : 'text-slate-400 hover:text-white font-light'
                }`}
              >
                {link.name}
              </Link>
            );
          })}
          
          <Link 
            href="/contact"
            onClick={() => setIsOpen(false)}
            className="bg-sky-500 hover:bg-sky-600 text-slate-950 font-medium text-sm uppercase tracking-widest px-8 py-3 rounded mt-4 min-w-[180px] transition-colors"
          >
            Contact
          </Link>
        </div>
      </div>
    </nav>
  );
}