const testimonials = [
  {
    quote: "My lunch arrives before my meeting ends. Menmyguys is unreal.",
    name: "Lola A.",
    role: "Product Designer",
  },
  {
    quote: "Our restaurant orders doubled after joining the platform.",
    name: "Chef Bayo",
    role: "Restaurant Owner",
  },
  {
    quote: "Riding with Menmyguys keeps my week fully booked.",
    name: "Seyi K.",
    role: "Delivery Rider",
  },
];

const logos = ["Urban Eats", "Cocoa Kitchen", "Spice Route", "Green Bowl", "Night Market"];

export default function Testimonials() {
  return (
    <section data-testimonials className="bg-[#EDEDED] py-24 text-[#1A1A1A]">
      <div className="mx-auto max-w-6xl px-6">
        <div className="flex flex-col gap-10 lg:flex-row lg:items-start lg:justify-between">
          <div className="max-w-xl">
            <p className="inline-flex items-center rounded-full bg-white px-4 py-2 text-xs font-semibold uppercase tracking-[0.25em] text-[#000000]">
              Social proof
            </p>
            <h2 className="mt-5 text-3xl font-semibold tracking-tight md:text-4xl">
              Trusted by diners, restaurants, and riders alike.
            </h2>
            <p className="mt-3 text-base text-[#6B6B6B]">
              Menmyguys is built on momentum. Hear from the people who use it daily.
            </p>
          </div>
          <div className="grid gap-4 text-xs text-[#6B6B6B] sm:grid-cols-2">
            {logos.map((logo) => (
              <div
                key={logo}
                className="flex items-center justify-center rounded-2xl border border-slate-200 bg-white px-4 py-6"
              >
                {logo}
              </div>
            ))}
          </div>
        </div>
        <div className="mt-12 overflow-hidden">
          <div data-testimonial-track className="flex gap-6">
            {testimonials.map((testimonial) => (
              <div
                key={testimonial.name}
                data-testimonial-card
                className="min-w-[280px] flex-1 rounded-3xl border border-slate-200 bg-white p-6 shadow-[0_12px_30px_rgba(15,23,42,0.08)] lg:min-w-[320px]"
              >
                <p className="text-sm leading-relaxed text-[#6B6B6B]">“{testimonial.quote}”</p>
                <div className="mt-6">
                  <p className="text-sm font-semibold text-[#1A1A1A]">{testimonial.name}</p>
                  <p className="text-xs text-[#6B6B6B]">{testimonial.role}</p>
                </div>
              </div>
            ))}
          </div>
        </div>
      </div>
    </section>
  );
}
