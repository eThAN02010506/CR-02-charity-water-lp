import React from 'react';

function Button({ children, variant = 'primary', className = '', href, ...props }) {
  const baseClasses = 'inline-flex items-center justify-center rounded-full px-6 py-3 text-sm font-semibold transition duration-200 focus:outline-none focus-visible:ring-2 focus-visible:ring-offset-2';
  const variants = {
    primary: 'bg-brand-yellow text-brand-navy hover:-translate-y-0.5 hover:shadow-soft focus-visible:ring-brand-yellow',
    secondary: 'border border-brand-navy/20 bg-white text-brand-navy hover:-translate-y-0.5 hover:shadow-soft focus-visible:ring-brand-navy',
  };

  if (href) {
    return (
      <a
        href={href}
        target="_blank"
        rel="noopener noreferrer"
        className={`${baseClasses} ${variants[variant]} ${className}`.trim()}
        {...props}
      >
        <span className="whitespace-nowrap">{children}</span>
      </a>
    );
  }

  return (
    <button className={`${baseClasses} ${variants[variant]} ${className}`.trim()} {...props}>
      <span className="whitespace-nowrap">{children}</span>
    </button>
  );
}

export default Button;
