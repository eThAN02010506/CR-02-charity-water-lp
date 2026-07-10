import React from 'react';
import Button from './Button';

function StorySection() {
  return (
    <section className="mx-auto max-w-7xl px-4 py-8 sm:px-6 lg:px-8 lg:py-12">
      <div className="grid items-center gap-8 rounded-[2rem] border border-brand-navy/10 bg-white p-6 shadow-sm sm:p-8 lg:grid-cols-[0.95fr_1.05fr] lg:p-10">
        <div className="max-w-xl">
          <p className="text-sm font-semibold uppercase tracking-[0.24em] text-brand-navy/70">Stories</p>
          <h2 className="mt-3 text-3xl font-semibold leading-tight text-brand-navy sm:text-4xl">
            Every Drop Has a Story
          </h2>
          <p className="mt-5 text-lg leading-8 text-brand-navy/80">
            Clean water improves health, education, opportunity, and dignity. It gives families more time, more confidence, and more room to grow.
          </p>
          <div className="mt-8 rounded-[1.25rem] border border-brand-yellow/40 bg-brand-cream p-6">
            <p className="text-lg font-medium leading-8 text-brand-navy">
              “I want to do more than just donate—I want to see my impact.”
            </p>
          </div>
          <div className="mt-8">
            <Button href="https://www.charitywater.org/stories" className="px-7 py-3.5">Read More Stories</Button>
          </div>
        </div>
      </div>
    </section>
  );
}

export default StorySection;
