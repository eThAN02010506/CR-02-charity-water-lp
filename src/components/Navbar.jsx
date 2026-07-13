import React from 'react';
import cwLogo from '../../img/cw_logo.png';
import Button from './Button';

const navItems = [
  { label: 'Our Impact', href: 'https://www.charitywater.org/waterproof' },
  { label: 'Projects', href: 'https://www.charitywater.org/global-water-crisis' },
  { label: 'Stories', href: 'https://www.charitywater.org/stories' },
  { label: 'About Us', href: 'https://www.charitywater.org/about' },
];

function Navbar({ isMenuOpen, onToggleMenu }) {
  return (
    <header className="sticky top-0 z-50 border-b border-brand-navy/10 bg-brand-cream/95 backdrop-blur">
      <div className="mx-auto flex max-w-7xl items-center justify-between px-4 py-3 sm:px-6 lg:px-8">
        <a href="https://www.charitywater.org/" target="_blank" rel="noopener noreferrer" className="flex items-center gap-3 text-lg font-semibold tracking-tight text-brand-navy" aria-label="charity water home">
          <img src={cwLogo} alt="charity water logo" className="h-10 w-auto" />
          <span className="hidden sm:inline">charity: water</span>
        </a>

        <nav aria-label="Primary" className="hidden items-center gap-8 md:flex">
          {navItems.map((item) => (
            <a key={item.label} href={item.href} target="_blank" rel="noopener noreferrer" className="text-sm font-medium text-brand-navy transition hover:text-brand-navy/70">
              {item.label}
            </a>
          ))}
        </nav>

        <Button href="https://www.charitywater.org/waterproof" className="hidden md:inline-flex">See Your Impact</Button>

        <button
          type="button"
          className="inline-flex rounded-full border border-brand-navy/20 p-2 text-brand-navy md:hidden"
          aria-label="Toggle navigation"
          aria-expanded={isMenuOpen}
          onClick={onToggleMenu}
        >
          <svg viewBox="0 0 24 24" className="h-6 w-6" fill="none" stroke="currentColor" strokeWidth="1.8" aria-hidden="true">
            <path d="M4 7h16" />
            <path d="M4 12h16" />
            <path d="M4 17h16" />
          </svg>
        </button>
      </div>

      {isMenuOpen && (
        <div className="border-t border-brand-navy/10 bg-brand-cream px-4 py-4 md:hidden">
          <nav className="flex flex-col gap-3" aria-label="Mobile">
            {navItems.map((item) => (
              <a key={item.label} href={item.href} target="_blank" rel="noopener noreferrer" className="rounded-lg px-2 py-2 text-sm font-medium text-brand-navy hover:bg-white/70">
                {item.label}
              </a>
            ))}
            <Button href="https://www.charitywater.org/waterproof" className="mt-2 md:hidden">See Your Impact</Button>
          </nav>
        </div>
      )}
    </header>
  );
}

export default Navbar;
