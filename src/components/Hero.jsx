import React from 'react';
import Button from './Button';

const trustIndicators = [
  { label: '100% to clean water projects', icon: '⟡', href: 'https://www.charitywater.org/our-approach/100-percent-model' },
  { label: 'GPS tracking for every project', icon: '◎', href: 'https://www.charitywater.org/waterproof' },
  { label: 'Photos & updates you can follow', icon: '◌', href: 'https://www.charitywater.org/stories' },
];

function Hero() {
  return (
    <section className="mx-auto grid max-w-7xl gap-8 px-4 py-10 sm:px-6 lg:grid-cols-[1.02fr_0.98fr] lg:gap-12 lg:px-8 lg:py-16">
      <div className="flex flex-col justify-center">
        <h1 className="max-w-xl text-4xl font-semibold leading-tight text-brand-navy sm:text-5xl lg:text-6xl">
          See the Change You Create
        </h1>
        <p className="mt-5 max-w-xl text-lg leading-8 text-brand-navy/80 sm:text-xl">
          Your donation brings clean water to real communities—and you’ll see exactly where your impact goes.
        </p>
        <div className="mt-8 flex flex-wrap gap-4">
          <Button href="https://www.charitywater.org/fundraise" className="px-7 py-3.5">Create Change Today →</Button>
        </div>
        <div className="mt-8 grid gap-3 sm:grid-cols-3">
          {trustIndicators.map((item) => (
            <a key={item.label} href={item.href} target="_blank" rel="noopener noreferrer" className="flex items-start gap-3 rounded-2xl border border-brand-navy/10 bg-white/90 p-4 shadow-sm transition hover:-translate-y-0.5 hover:shadow-soft">
              <div className="mt-0.5 flex h-9 w-9 items-center justify-center rounded-full border border-brand-yellow text-lg text-brand-navy">
                {item.icon}
              </div>
              <p className="text-sm font-medium leading-6 text-brand-navy/80">{item.label}</p>
            </a>
          ))}
        </div>
      </div>

      <div className="relative overflow-hidden rounded-[2rem] bg-brand-white shadow-soft">
        <div className="absolute inset-y-0 left-0 z-10 w-2/5 bg-gradient-to-r from-brand-cream via-brand-cream/80 to-transparent" aria-hidden="true" />
        <img
          src="/img/Hero_family.png"
          alt="Hero family illustration"
          className="h-full w-full object-cover"
        />
      </div>
    </section>
  );
}

export default Hero;
