"use client";

import Link from 'next/link';
import { useState } from 'react';
import { usePathname } from 'next/navigation';

const Navbar = () => {
  const [isOpen, setIsOpen] = useState(false);
  const pathname = usePathname();

  const navItems = [
    { label: 'Home', href: '/' },
    { label: 'About', href: '/about' },
    { label: 'Projects', href: '/projects' },
    { label: 'Contact', href: '/contact' }
  ];

  const toggleMenu = () => {
    setIsOpen(!isOpen);
  };

  return (
    <nav className="w-full py-4 px-6 sm:px-10 flex items-center justify-between">
      <Link href="/" className="text-xl font-bold">
        Portfolio
      </Link>

      {/* Mobile menu button */}
      <button 
        className="md:hidden z-10" 
        onClick={toggleMenu}
        aria-label="Toggle menu"
      >
        <svg 
          className="w-6 h-6" 
          fill="none" 
          stroke="currentColor" 
          viewBox="0 0 24 24"
        >
          {isOpen ? (
            <path 
              strokeLinecap="round" 
              strokeLinejoin="round" 
              strokeWidth={2} 
              d="M6 18L18 6M6 6l12 12" 
            />
          ) : (
            <path 
              strokeLinecap="round" 
              strokeLinejoin="round" 
              strokeWidth={2} 
              d="M4 6h16M4 12h16M4 18h16" 
            />
          )}
        </svg>
      </button>

      {/* Desktop Menu */}
      <div className="hidden md:flex space-x-8">
        {navItems.map((item) => (
          <Link 
            key={item.href} 
            href={item.href}
            className={`transition-colors ${pathname === item.href ? 'text-foreground font-medium' : 'text-foreground/70 hover:text-foreground'}`}
          >
            {item.label}
          </Link>
        ))}
      </div>

      {/* Mobile Menu */}
      {isOpen && (
        <div className="md:hidden fixed inset-0 bg-background/95 backdrop-blur-sm flex flex-col items-center justify-center space-y-8 z-[5]">
          {navItems.map((item) => (
            <Link 
              key={item.href} 
              href={item.href}
              onClick={() => setIsOpen(false)}
              className={`text-xl ${pathname === item.href ? 'text-foreground font-medium' : 'text-foreground/70'}`}
            >
              {item.label}
            </Link>
          ))}
        </div>
      )}
    </nav>
  );
};

export default Navbar;
