const benefits = [
  {
    title: "Boost daily orders",
    description: "Reach thousands of hungry customers without extra overhead.",
  },
  {
    title: "Smarter operations",
    description: "Unified dashboard, live order tracking, and instant payouts.",
  },
  {
    title: "Marketing support",
    description: "Featured placements and targeted campaigns that convert.",
  },
];

const stats = [
  { label: "Avg. order lift", value: "38%", count: 38, suffix: "%" },
  { label: "Cities live", value: "42", count: 42, suffix: "" },
  { label: "Partner restaurants", value: "3,500+", count: 3500, suffix: "+" },
];

export default function Restaurants() {
  return (
    <section data-restaurants className="bg-[#FAFAFA] py-24 text-[#1A1A1A]">
      <div className="mx-auto max-w-6xl px-6">
        <div className="flex flex-col gap-12 lg:flex-row lg:items-start lg:justify-between">
          <div className="max-w-xl">
            <p className="inline-flex items-center rounded-full bg-[#EDEDED] px-4 py-2 text-xs font-semibold uppercase tracking-[0.25em] text-[#000000]">
              For restaurants
            </p>
            <h2 className="mt-5 text-3xl font-semibold tracking-tight md:text-4xl">
              More orders, deeper customer loyalty.
            </h2>
            <p className="mt-4 text-base text-[#6B6B6B]">
              Menmyguys helps restaurants grow with visibility, logistics, and marketing
              that scales with demand.
            </p>
            <div className="mt-8 grid gap-4">
              {benefits.map((benefit) => (
                <div
                  key={benefit.title}
                  className="rounded-2xl border border-slate-200 bg-white p-5 shadow-[0_10px_30px_rgba(15,23,42,0.06)] transition hover:-translate-y-1 hover:shadow-[0_18px_40px_rgba(15,23,42,0.12)]"
                >
                  <h3 className="text-lg font-semibold text-[#1A1A1A]">{benefit.title}</h3>
                  <p className="mt-2 text-sm text-[#6B6B6B]">{benefit.description}</p>
                </div>
              ))}
            </div>
          </div>
          <div className="w-full max-w-sm rounded-[2rem] border border-slate-200 bg-white p-6 shadow-[0_20px_40px_rgba(15,23,42,0.08)]">
            <div
              data-parallax
              className="h-64 overflow-hidden rounded-[1.5rem] border border-slate-200 bg-white"
            >
              <img
                src="/restuarant.png"
                alt="Restaurant partner preview"
                className="h-full w-full object-cover"
                loading="lazy"
              />
            </div>
            <div className="mt-6 space-y-4">
              {stats.map((stat) => (
                <div key={stat.label} className="flex items-center justify-between text-sm">
                  <span className="text-[#6B6B6B]">{stat.label}</span>
                  <span
                    data-count={stat.count}
                    data-suffix={stat.suffix}
                    className="text-lg font-semibold text-[#000000]"
                  >
                    {stat.value}
                  </span>
                </div>
              ))}
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}
