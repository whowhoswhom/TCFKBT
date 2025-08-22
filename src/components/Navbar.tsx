'use client';

import Link from 'next/link';
import { useState } from 'react';

export default function Navbar() {
  const [isMenuOpen, setIsMenuOpen] = useState(false);

  return (
    <nav className="bg-dark-card shadow-lg sticky top-0 z-50">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="flex justify-between h-16">
          <div className="flex items-center">
            <Link href="/" className="flex-shrink-0 flex items-center">
              <span className="text-xl font-bold text-ford-blue">TC Ford Baseball</span>
            </Link>
          </div>
          
          {/* Desktop Navigation */}
          <div className="hidden md:flex items-center space-x-8">
            <Link href="/" className="text-gray-300 hover:text-white transition-colors">
              Home
            </Link>
            <Link href="/schedule" className="text-gray-300 hover:text-white transition-colors">
              Schedule
            </Link>
            <Link href="/roster" className="text-gray-300 hover:text-white transition-colors">
              Roster
            </Link>
            <Link href="/stats" className="text-gray-300 hover:text-white transition-colors">
              Stats
            </Link>
          </div>

          {/* Mobile menu button */}
          <div className="md:hidden flex items-center">
            <button
              onClick={() => setIsMenuOpen(!isMenuOpen)}
              className="text-gray-300 hover:text-white focus:outline-none focus:text-white"
              aria-label="Toggle navigation"
              aria-expanded={isMenuOpen}
              aria-controls="mobile-menu"
            >
              <svg className="h-6 w-6" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                {isMenuOpen ? (
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M6 18L18 6M6 6l12 12" />
                ) : (
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M4 6h16M4 12h16M4 18h16" />
                )}
              </svg>
            </button>
          </div>
        </div>

        {/* Mobile Navigation */}
        {isMenuOpen && (
          <div className="md:hidden" id="mobile-menu">
            <div className="px-2 pt-2 pb-3 space-y-1 sm:px-3">
              <Link href="/" className="block px-3 py-2 text-gray-300 hover:text-white transition-colors">
                Home
              </Link>
              <Link href="/schedule" className="block px-3 py-2 text-gray-300 hover:text-white transition-colors">
                Schedule
              </Link>
              <Link href="/roster" className="block px-3 py-2 text-gray-300 hover:text-white transition-colors">
                Roster
              </Link>
              <Link href="/stats" className="block px-3 py-2 text-gray-300 hover:text-white transition-colors">
                Stats
              </Link>
            </div>
          </div>
        )}
      </div>
    </nav>
  );
} 
