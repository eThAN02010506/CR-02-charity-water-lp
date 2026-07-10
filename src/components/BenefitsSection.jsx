import React from 'react';

function BenefitsSection({ benefits }) {
  return (
    <section className="mx-auto max-w-7xl px-4 py-4 sm:px-6 lg:px-8 lg:py-8">
      <div className="rounded-[2rem] bg-brand-cream px-6 py-12 shadow-sm sm:px-8 lg:px-10 lg:py-14">
        <div className="mx-auto max-w-3xl text-center">
          <h2 className="text-3xl font-semibold text-brand-navy sm:text-4xl">Clean water changes everything.</h2>
        </div>

        <div className="mt-10 grid gap-6 lg:grid-cols-3">
          {benefits.map((benefit) => (
            <article key={benefit.title} className="rounded-[1.5rem] border border-brand-navy/10 bg-white p-8 text-center shadow-sm">
              <div className="mx-auto flex h-14 w-14 items-center justify-center rounded-full bg-brand-yellow/20 text-brand-navy">
                {benefit.icon}
              </div>
              <h3 className="mt-6 text-xl font-semibold text-brand-navy">{benefit.title}</h3>
              <p className="mt-3 text-base leading-7 text-brand-navy/75">{benefit.description}</p>
            </article>
          ))}
        </div>
      </div>
    </section>
  );
}

export default BenefitsSection;
