const riderBenefits = [
  {
    title: "Flexible schedule",
    description: "Work when you want and earn on your own terms.",
  },
  {
    title: "Instant payouts",
    description: "Get paid fast with transparent earnings tracking.",
  },
  {
    title: "Safety first",
    description: "Priority support and route guidance keep you protected.",
  },
];

export default function Riders() {
  return (
    <section data-riders className="bg-[#EDEDED] py-24">
      <div className="mx-auto max-w-6xl px-6">
        <div className="grid gap-12 lg:grid-cols-[1.2fr_1fr] lg:items-center">
          <div>
            <p className="inline-flex items-center rounded-full bg-white px-4 py-2 text-xs font-semibold uppercase tracking-[0.25em] text-[#000000] shadow-[0_10px_25px_rgba(0,0,0,0.1)]">
              For riders
            </p>
            <h2 className="mt-5 text-3xl font-semibold tracking-tight text-[#1A1A1A] md:text-4xl">
              Earn more while staying in control.
            </h2>
            <p className="mt-3 text-base text-slate-600">
              Menmyguys riders get consistent deliveries, smart routing, and the tools
              to maximize daily earnings.
            </p>
            <div className="mt-8 grid gap-4">
              {riderBenefits.map((benefit) => (
                <div
                  key={benefit.title}
                  data-rider-card
                  className="rounded-2xl border border-slate-200 bg-white p-5 transition hover:-translate-y-1 hover:shadow-[0_18px_40px_rgba(15,23,42,0.12)]"
                >
                  <h3 className="text-lg font-semibold text-slate-900">{benefit.title}</h3>
                  <p className="mt-2 text-sm text-slate-600">{benefit.description}</p>
                </div>
              ))}
            </div>
          </div>
          <div className="rounded-[2rem] border border-slate-200 bg-white p-6 shadow-[0_20px_40px_rgba(15,23,42,0.08)]">
            <div className="h-64 overflow-hidden rounded-[1.5rem] border border-slate-200 bg-white">
              <img
                src="/riders.png"
                alt="Menmyguys rider"
                className="h-full w-full object-cover"
                loading="lazy"
              />
            </div>
            <div className="mt-6 grid gap-4 sm:grid-cols-2">
              <div className="rounded-2xl bg-white p-4 shadow-sm">
                <p className="text-xs uppercase tracking-[0.2em] text-slate-400">
                  Avg. weekly earnings
                </p>
                <p className="mt-2 text-2xl font-semibold text-[#000000]">₦180k+</p>
              </div>
              <div className="rounded-2xl bg-white p-4 shadow-sm">
                <p className="text-xs uppercase tracking-[0.2em] text-slate-400">
                  Peak-hour bonus
                </p>
                <p className="mt-2 text-2xl font-semibold text-[#000000]">3x</p>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}
