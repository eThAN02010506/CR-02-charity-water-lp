import React from 'react';
import cwLogo from '../../img/cw_logo.png';

const footerLinks = [
  { label: 'About', href: 'https://www.charitywater.org/about' },
  { label: 'Projects', href: 'https://www.charitywater.org/donate/water-project-sponsorship' },
  { label: 'Stories', href: 'https://www.charitywater.org/stories' },
  { label: 'Contact', href: 'https://www.charitywater.org/contact' },
];

function Footer() {
  return (
    <footer className="bg-brand-navy px-4 py-10 text-white sm:px-6 lg:px-8">
      <div className="mx-auto flex max-w-7xl flex-col gap-8 rounded-[2rem] border border-white/10 bg-white/10 px-6 py-8 sm:px-8 lg:flex-row lg:items-center lg:justify-between lg:px-10">
        <a href="https://www.charitywater.org" target="_blank" rel="noopener noreferrer" className="flex items-center gap-3">
          <img src={cwLogo} alt="charity water logo" className="h-10 w-auto" />
          <div>
            <p className="text-lg font-semibold">charity: water</p>
            <p className="text-sm text-white/70">Clean water for everyone.</p>
          </div>
        </a>

        <nav aria-label="Footer" className="flex flex-wrap gap-5 text-sm font-medium">
          {footerLinks.map((link) => (
            <a key={link.label} href={link.href} target="_blank" rel="noopener noreferrer" className="transition hover:text-brand-yellow">
              {link.label}
            </a>
          ))}
        </nav>

        <div className="flex items-center gap-4 text-white/80">
          <a href="https://www.instagram.com/charitywater/" target="_blank" rel="noopener noreferrer" aria-label="Visit charity water on Instagram" className="transition hover:text-brand-yellow">
            <svg viewBox="0 0 24 24" className="h-5 w-5" fill="currentColor" aria-hidden="true">
              <path d="M7.4 3h9.2A4.4 4.4 0 0 1 21 7.4v9.2A4.4 4.4 0 0 1 16.6 21H7.4A4.4 4.4 0 0 1 3 16.6V7.4A4.4 4.4 0 0 1 7.4 3Zm0 1.6A2.8 2.8 0 0 0 4.6 7.4v9.2a2.8 2.8 0 0 0 2.8 2.8h9.2a2.8 2.8 0 0 0 2.8-2.8V7.4a2.8 2.8 0 0 0-2.8-2.8H7.4Zm4.6 2.7a4.7 4.7 0 1 1 0 9.4 4.7 4.7 0 0 1 0-9.4Zm0 1.6a3.1 3.1 0 1 0 0 6.2 3.1 3.1 0 0 0 0-6.2Zm5.3-.9a1 1 0 1 1 0 2 1 1 0 0 1 0-2Z" />
            </svg>
          </a>
          <a href="https://x.com/charitywater" target="_blank" rel="noopener noreferrer" aria-label="Visit charity water on X" className="transition hover:text-brand-yellow">
            <svg viewBox="0 0 24 24" className="h-5 w-5" fill="currentColor" aria-hidden="true">
              <path d="M18.9 4H21l-6.7 7.7L22 20h-5.1l-4-5.2-4.6 5.2H2.8l6.9-7.9L2 4h5.2l3.6 4.7L18.9 4Zm-1.3 14.3h1.4L6.4 5.6H5Z" />
            </svg>
          </a>
          <a href="https://www.facebook.com/charitywater" target="_blank" rel="noopener noreferrer" aria-label="Visit charity water on Facebook" className="transition hover:text-brand-yellow">
            <svg viewBox="0 0 24 24" className="h-5 w-5" fill="currentColor" aria-hidden="true">
              <path d="M13.5 21v-8h2.7l.4-3.2h-3.1V3.9c0-.9.3-1.6 1.6-1.6h1.7V.1C16.3.1 15.2 0 14 0c-2.6 0-4.4 1.6-4.4 4.5V9.8H7v3.2h2.6v8h3.9Z" />
            </svg>
          </a>
          <a href="https://www.youtube.com/charitywater" target="_blank" rel="noopener noreferrer" aria-label="Visit charity water on YouTube" className="transition hover:text-brand-yellow">
            <svg viewBox="0 0 24 24" className="h-5 w-5" fill="currentColor" aria-hidden="true">
              <path d="M21.6 7.2a2.7 2.7 0 0 0-1.9-1.9C18.1 4.7 12 4.7 12 4.7s-6.1 0-7.7.6A2.7 2.7 0 0 0 2.4 7.2C1.8 8.8 1.8 12 1.8 12s0 3.2.6 4.8a2.7 2.7 0 0 0 1.9 1.9c1.6.6 7.7.6 7.7.6s6.1 0 7.7-.6a2.7 2.7 0 0 0 1.9-1.9c.6-1.6.6-4.8.6-4.8s0-3.2-.6-4.8ZM10.2 15.2V8.8l5.2 3.2-5.2 3.2Z" />
            </svg>
          </a>
          <a href="https://www.linkedin.com/company/charitywater" target="_blank" rel="noopener noreferrer" aria-label="Visit charity water on LinkedIn" className="transition hover:text-brand-yellow">
            <svg viewBox="0 0 24 24" className="h-5 w-5" fill="currentColor" aria-hidden="true">
              <path d="M6.9 8.2A1.7 1.7 0 1 0 6.9 4.8a1.7 1.7 0 0 0 0 3.4ZM5.6 9.8h2.6V19H5.6V9.8Zm4.4 0h2.5v1.3h.1c.3-.6 1.2-1.3 2.5-1.3 2.7 0 3.2 1.7 3.2 4v9.2h-2.6v-8.5c0-2-.1-4.6-2.8-4.6-2.8 0-3.2 2.2-3.2 4.4v8.7H10V9.8Z" />
            </svg>
          </a>
        </div>
      </div>
      <p className="mx-auto mt-6 max-w-7xl px-2 text-center text-sm text-white/60">© 2026 charity: water. All rights reserved.</p>
    </footer>
  );
}

export default Footer;
