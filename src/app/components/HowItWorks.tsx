const steps = [
  {
    title: "Pick a restaurant",
    description: "Browse curated spots and trending dishes near you.",
  },
  {
    title: "Track in real time",
    description: "Watch your order move from kitchen to doorstep.",
  },
  {
    title: "Enjoy instantly",
    description: "Hot meals arrive fast, fresh, and ready to enjoy.",
  },
];

export default function HowItWorks() {
  return (
    <section data-howitworks className="bg-[#FAFAFA] py-24">
      <div className="mx-auto max-w-6xl px-6">
        <div className="max-w-2xl">
          <p className="inline-flex items-center rounded-full bg-[#EDEDED] px-4 py-2 text-xs font-semibold uppercase tracking-[0.25em] text-[#E10600]">
            How it works
          </p>
          <h2 className="mt-5 text-3xl font-semibold tracking-tight text-[#1A1A1A] md:text-4xl">
            Three simple steps from craving to doorstep.
          </h2>
          <p className="mt-3 text-base text-[#6B6B6B]">
            Menmyguys makes delivery feel effortless. Tap, track, and enjoy in minutes.
          </p>
        </div>
        <div className="mt-12 grid gap-12 lg:grid-cols-[1.1fr_0.9fr] lg:items-start">
          <div className="space-y-5">
            {steps.map((step, index) => (
              <div
                key={step.title}
                data-step
                className="rounded-3xl border border-slate-200 bg-white p-6 shadow-[0_12px_30px_rgba(15,23,42,0.06)]"
              >
                <div className="flex h-10 w-10 items-center justify-center rounded-full bg-[#E10600] text-sm font-semibold text-white">
                  0{index + 1}
                </div>
                <h3 className="mt-6 text-xl font-semibold text-slate-900">{step.title}</h3>
                <p className="mt-2 text-sm leading-relaxed text-[#6B6B6B]">{step.description}</p>
              </div>
            ))}
            <div className="flex items-center gap-3 pt-2">
              <span className="text-xs font-semibold uppercase tracking-[0.2em] text-slate-400">
                Progress
              </span>
              <div className="h-2 flex-1 overflow-hidden rounded-full bg-[#EDEDED]">
                <div
                  data-progress-bar
                  className="h-full origin-left scale-x-0 rounded-full bg-[#E10600]"
                />
              </div>
            </div>
          </div>
          <div className="relative">
            {steps.map((step, index) => (
              <div
                key={step.title}
                data-step-image
                className="absolute inset-0 flex h-80 items-center justify-center rounded-3xl border border-dashed border-slate-200 bg-white text-xs text-[#6B6B6B]"
                style={{ zIndex: steps.length - index }}
              >
                Image placeholder {index + 1}
              </div>
            ))}
            <div className="h-80 rounded-3xl border border-slate-200 bg-[#EDEDED]" />
          </div>
        </div>
      </div>
    </section>
  );
}
