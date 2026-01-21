export default function CTA() {
  return (
    <section className="bg-[#FAFAFA] py-24">
      <div className="mx-auto max-w-5xl px-6">
        <div className="rounded-[2.5rem] border border-slate-200 bg-[#EDEDED] p-10 text-center shadow-[0_30px_60px_rgba(15,23,42,0.08)] md:p-16">
          <p className="inline-flex items-center rounded-full bg-white px-4 py-2 text-xs font-semibold uppercase tracking-[0.25em] text-[#E10600]">
            Ready to move fast?
          </p>
          <h2 className="mt-5 text-3xl font-semibold tracking-tight text-[#1A1A1A] md:text-4xl">
            Download Menmyguys and get your first delivery today.
          </h2>
          <p className="mt-3 text-base text-[#6B6B6B]">
            Join thousands of people who order smarter meals every single day.
          </p>
          <div className="mt-8 flex flex-col justify-center gap-4 sm:flex-row">
            <button className="rounded-full bg-[#E10600] px-7 py-3 text-sm font-semibold text-white transition hover:-translate-y-0.5 hover:bg-[#C90500] focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-[#E10600] focus-visible:ring-offset-2 focus-visible:ring-offset-[#EDEDED]">
              Get the App
            </button>
            <button className="rounded-full border border-[#E10600]/30 px-7 py-3 text-sm font-semibold text-[#E10600] transition hover:-translate-y-0.5 hover:border-[#E10600] focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-[#E10600]/40 focus-visible:ring-offset-2 focus-visible:ring-offset-[#EDEDED]">
              Talk to Sales
            </button>
          </div>
        </div>
      </div>
    </section>
  );
}
