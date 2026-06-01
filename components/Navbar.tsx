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
    <nav className="sticky top-0 z-50 bg-[#EAEFF8] backdrop-blur-md border-b border-slate-200">
      {/* Top Header Bar */}
      <div className="max-w-6xl mx-auto px-6 h-16 flex items-center justify-between relative z-50">
        
        {/* Brand Logo */}
        <Link href="/" className="text-lg font-normal tracking-widest group">
          <span className="text-[#C5A059] font-serif transition-colors"> DE AESTHETICS</span>
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
                      : 'text-slate-800 hover:text-[#C5A059] font-light'
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

        {/* Hamburger Menu Button */}
        <button 
          onClick={() => setIsOpen(!isOpen)}
          className="md:hidden text-[#0F1E36] hover:text-[#C5A059] focus:outline-none p-2 transition-colors"
          aria-label="Toggle Menu"
        >
          <svg className="h-6 w-6 fill-none stroke-current" viewBox="0 0 24 24">
            {isOpen ? (
              <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="1.5" d="M6 18L18 6M6 6l12 12" />
            ) : (
              <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="1.5" d="M4 6h16M4 12h16M4 18h16" />
            )}
          </svg>
        </button>
      </div>

      {/* Fixed Mobile Drawer Panel */}
      <div 
        className={`fixed inset-0 min-h-screen bg-[#EAEFF8] z-40 flex flex-col pt-24 px-6 transition-all duration-300 ease-in-out md:hidden ${
          isOpen ? 'opacity-100 visible translate-y-0' : 'opacity-0 invisible -translate-y-4'
        }`}
      >
        {/* Navigation Items Link List */}
        <div className="flex flex-col space-y-6 text-left border-t border-slate-200/50 pt-8">
          {navLinks.map((link) => {
            const isActive = pathname === link.href;
            return (
              <Link
                key={link.href}
                href={link.href}
                onClick={() => setIsOpen(false)}
                className={`text-sm uppercase tracking-widest py-2 transition-colors ${
                  isActive ? 'text-[#C5A059] font-medium' : 'text-[#0F1E36] hover:text-[#C5A059] font-light'
                }`}
              >
                {link.name}
              </Link>
            );
          })}
          
          {/* Action Button */}
          <Link 
            href="/contact"
            onClick={() => setIsOpen(false)}
            className="bg-[#0F1E36] hover:bg-[#1A2E4C] text-white font-medium text-xs uppercase tracking-widest py-3 rounded mt-6 w-full text-center transition-colors block"
          >
            Contact
          </Link>
        </div>
      </div>
    </nav>
  );
}
