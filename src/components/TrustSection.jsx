import React from 'react';

function TrustSection({ trustItems }) {
  return (
    <section className="mx-auto max-w-7xl px-4 py-4 sm:px-6 lg:px-8 lg:py-8">
      <div className="rounded-[2rem] bg-brand-navy px-6 py-12 text-white sm:px-8 lg:px-10 lg:py-14">
        <div className="mx-auto max-w-3xl text-center">
          <h2 className="text-3xl font-semibold sm:text-4xl">Why students trust charity: water</h2>
        </div>

        <div className="mt-12 grid gap-6 md:grid-cols-2 xl:grid-cols-4">
          {trustItems.map((item) => (
            <a key={item.title} href={item.href} target="_blank" rel="noopener noreferrer" className="rounded-[1.5rem] border border-white/10 bg-white/10 p-7 backdrop-blur-sm transition hover:-translate-y-0.5 hover:bg-white/15">
              <div className="flex h-12 w-12 items-center justify-center rounded-full bg-brand-yellow text-brand-navy">
                {item.icon}
              </div>
              <h3 className="mt-5 text-xl font-semibold">{item.title}</h3>
              <p className="mt-3 text-sm leading-7 text-white/80">{item.description}</p>
            </a>
          ))}
        </div>
      </div>
    </section>
  );
}

export default TrustSection;
