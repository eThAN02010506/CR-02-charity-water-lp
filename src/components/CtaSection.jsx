import React from 'react';
import Button from './Button';

function CtaSection() {
  return (
    <section className="mx-auto max-w-7xl px-4 py-8 sm:px-6 lg:px-8 lg:py-12">
      <div className="rounded-[2rem] bg-brand-yellow px-6 py-14 text-center text-brand-navy shadow-sm sm:px-8 lg:px-10 lg:py-16">
        <h2 className="text-3xl font-semibold sm:text-4xl">Ready to Create Real Change?</h2>
        <p className="mx-auto mt-4 max-w-2xl text-lg leading-8 text-brand-navy/80">
          Join thousands of students helping communities gain access to clean water.
        </p>
        <div className="mt-8 flex justify-center">
          <Button href="https://www.charitywater.org/take-action" variant="secondary" className="bg-brand-navy px-8 py-3.5 text-white">
            <span className="whitespace-nowrap">Join Now</span>
          </Button>
        </div>
      </div>
    </section>
  );
}

export default CtaSection;
