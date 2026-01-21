import type { Metadata } from "next";
import { Geist_Mono, Plus_Jakarta_Sans } from "next/font/google";
import "./globals.css";

const jakartaSans = Plus_Jakarta_Sans({
  variable: "--font-jakarta-sans",
  subsets: ["latin"],
  display: "swap",
});

const geistMono = Geist_Mono({
  variable: "--font-geist-mono",
  subsets: ["latin"],
});

const geistSans = Plus_Jakarta_Sans({
  variable: "--font-geist-sans",
  subsets: ["latin"],
  display: "swap",
});

export const metadata: Metadata = {
  title: "Menmyguys",
  description: "Modern food delivery platform landing page.",
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="en">
      <body
        className={`${jakartaSans.variable} ${geistSans.variable} ${geistMono.variable} min-h-screen bg-[#FAFAFA] text-[#1A1A1A] antialiased`}
      >
        <div id="smooth-wrapper" className="min-h-screen">
          <div id="smooth-content">
            <header className="fixed left-0 top-0 z-50 w-full">
              <div className="mx-auto flex max-w-6xl items-center justify-between px-6 py-4">
                <div className="flex items-center gap-3 rounded-full bg-white px-4 py-2 shadow-[0_10px_30px_rgba(15,23,42,0.08)]">
                  <span className="flex h-9 w-9 items-center justify-center rounded-full bg-[#E10600] text-sm font-semibold text-white">
                    M
                  </span>
                  <span className="text-sm font-semibold tracking-tight text-[#1A1A1A]">
                    Menmyguys
                  </span>
                </div>
                <nav className="hidden items-center gap-4 rounded-full bg-white px-5 py-2 text-sm font-semibold text-[#1A1A1A] shadow-[0_10px_30px_rgba(15,23,42,0.08)] lg:flex">
                  <a className="rounded-full px-4 py-2 transition hover:bg-[#EDEDED]" href="#">
                    Company
                  </a>
                  <a className="rounded-full px-4 py-2 transition hover:bg-[#EDEDED]" href="#">
                    Vendors
                  </a>
                  <a className="rounded-full px-4 py-2 transition hover:bg-[#EDEDED]" href="#">
                    Riders
                  </a>
                  <a className="rounded-full px-4 py-2 transition hover:bg-[#EDEDED]" href="#">
                    Products
                  </a>
                </nav>
                <div className="flex items-center gap-3">
                  <button className="hidden rounded-full bg-white px-5 py-2 text-sm font-semibold text-[#1A1A1A] shadow-[0_10px_30px_rgba(15,23,42,0.08)] transition hover:bg-[#EDEDED] lg:inline-flex">
                    More
                  </button>
                  <button className="inline-flex h-11 w-11 items-center justify-center rounded-full bg-[#E10600] text-white shadow-[0_10px_30px_rgba(225,6,0,0.3)]">
                    ☰
                  </button>
                </div>
              </div>
            </header>
            {children}
          </div>
        </div>
      </body>
    </html>
  );
}
