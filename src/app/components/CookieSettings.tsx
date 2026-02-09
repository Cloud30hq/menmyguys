"use client";

import { useEffect, useState } from "react";

type CookiePreferences = {
  necessary: true;
  analytics: boolean;
  marketing: boolean;
  preferences: boolean;
};

const STORAGE_KEY = "mmg-cookie-preferences";
const COOKIE_NAME = "mmg-cookie-consent";

const defaultPreferences: CookiePreferences = {
  necessary: true,
  analytics: false,
  marketing: false,
  preferences: false,
};

const parseCookie = (name: string) => {
  if (typeof document === "undefined") {
    return null;
  }
  const cookies = document.cookie.split(";");
  for (const cookie of cookies) {
    const [key, ...rest] = cookie.trim().split("=");
    if (key === name) {
      return decodeURIComponent(rest.join("="));
    }
  }
  return null;
};

const writeCookie = (name: string, value: string, days = 365) => {
  if (typeof document === "undefined") {
    return;
  }
  const maxAge = days * 24 * 60 * 60;
  document.cookie = `${name}=${encodeURIComponent(value)}; max-age=${maxAge}; path=/; SameSite=Lax`;
};

const loadPreferences = (): CookiePreferences | null => {
  if (typeof window === "undefined") {
    return null;
  }
  const stored = window.localStorage.getItem(STORAGE_KEY);
  if (stored) {
    try {
      return { ...defaultPreferences, ...JSON.parse(stored), necessary: true } as CookiePreferences;
    } catch {
      return null;
    }
  }
  const cookieValue = parseCookie(COOKIE_NAME);
  if (!cookieValue) {
    return null;
  }
  try {
    return { ...defaultPreferences, ...JSON.parse(cookieValue), necessary: true } as CookiePreferences;
  } catch {
    return null;
  }
};

export default function CookieSettings() {
  const [mounted, setMounted] = useState(false);
  const [isOpen, setIsOpen] = useState(false);
  const [showBanner, setShowBanner] = useState(false);
  const [preferences, setPreferences] = useState<CookiePreferences>(defaultPreferences);

  useEffect(() => {
    const stored = loadPreferences();
    if (stored) {
      setPreferences(stored);
      setShowBanner(false);
    } else {
      setShowBanner(true);
    }
    setMounted(true);
  }, []);

  const savePreferences = (next: CookiePreferences) => {
    if (typeof window === "undefined") {
      return;
    }
    const payload = JSON.stringify(next);
    window.localStorage.setItem(STORAGE_KEY, payload);
    writeCookie(COOKIE_NAME, payload);
    setPreferences(next);
    setShowBanner(false);
    setIsOpen(false);
  };

  const handleAcceptAll = () => {
    savePreferences({
      necessary: true,
      analytics: true,
      marketing: true,
      preferences: true,
    });
  };

  const handleRejectAll = () => {
    savePreferences({
      necessary: true,
      analytics: false,
      marketing: false,
      preferences: false,
    });
  };

  if (!mounted) {
    return null;
  }

  return (
    <>
      {showBanner && (
        <div className="fixed bottom-6 left-1/2 z-50 w-[min(100%-2rem,640px)] -translate-x-1/2 rounded-[2rem] border border-slate-200 bg-white/95 p-6 shadow-[0_24px_60px_rgba(15,23,42,0.16)] backdrop-blur">
          <div className="flex flex-col gap-4">
            <div>
              <p className="text-sm font-semibold text-[#1A1A1A]">Cookie settings</p>
              <p className="mt-2 text-sm text-[#5B5B5B]">
                We use essential cookies to make the site work and optional cookies to improve your
                experience. You can accept all or choose your own settings.
              </p>
            </div>
            <div className="flex flex-wrap gap-3">
              <button
                className="rounded-full bg-[#000000] px-5 py-2 text-xs font-semibold uppercase tracking-[0.2em] text-white transition hover:-translate-y-0.5"
                onClick={handleAcceptAll}
              >
                Accept all
              </button>
              <button
                className="rounded-full border border-[#000000]/20 px-5 py-2 text-xs font-semibold uppercase tracking-[0.2em] text-[#1A1A1A] transition hover:-translate-y-0.5"
                onClick={handleRejectAll}
              >
                Reject all
              </button>
              <button
                className="rounded-full border border-[#000000]/20 px-5 py-2 text-xs font-semibold uppercase tracking-[0.2em] text-[#1A1A1A] transition hover:-translate-y-0.5"
                onClick={() => setIsOpen(true)}
              >
                Settings
              </button>
            </div>
          </div>
        </div>
      )}

      {isOpen && (
        <div
          className="fixed inset-0 z-50 flex items-center justify-center bg-black/40 px-6 py-10"
          role="dialog"
          aria-modal="true"
          aria-labelledby="cookie-settings-title"
        >
          <div className="w-full max-w-xl rounded-[2rem] bg-white p-6 shadow-[0_30px_80px_rgba(15,23,42,0.2)]">
            <div className="flex items-start justify-between gap-4">
              <div>
                <h2
                  id="cookie-settings-title"
                  className="text-xl font-semibold tracking-tight text-[#1A1A1A]"
                >
                  Customize cookies
                </h2>
                <p className="mt-2 text-sm text-[#5B5B5B]">
                  Choose which cookies you want to allow. Essential cookies are always on.
                </p>
              </div>
              <button
                className="rounded-full border border-[#000000]/20 px-3 py-1 text-xs font-semibold uppercase tracking-[0.2em] text-[#1A1A1A]"
                onClick={() => setIsOpen(false)}
              >
                Close
              </button>
            </div>

            <div className="mt-6 space-y-4">
              <div className="flex items-center justify-between rounded-2xl border border-slate-200 bg-[#FAFAFA] px-4 py-3">
                <div>
                  <p className="text-sm font-semibold text-[#1A1A1A]">Essential</p>
                  <p className="text-xs text-[#6B6B6B]">Needed for the site to function.</p>
                </div>
                <span className="text-xs font-semibold uppercase tracking-[0.2em] text-[#000000]">
                  Always on
                </span>
              </div>

              <label className="flex cursor-pointer items-center justify-between rounded-2xl border border-slate-200 px-4 py-3">
                <div>
                  <p className="text-sm font-semibold text-[#1A1A1A]">Preferences</p>
                  <p className="text-xs text-[#6B6B6B]">Remember your choices on this site.</p>
                </div>
                <input
                  type="checkbox"
                  className="h-4 w-4"
                  checked={preferences.preferences}
                  onChange={(event) =>
                    setPreferences((prev) => ({
                      ...prev,
                      preferences: event.target.checked,
                    }))
                  }
                />
              </label>

              <label className="flex cursor-pointer items-center justify-between rounded-2xl border border-slate-200 px-4 py-3">
                <div>
                  <p className="text-sm font-semibold text-[#1A1A1A]">Analytics</p>
                  <p className="text-xs text-[#6B6B6B]">Help us improve performance and usage.</p>
                </div>
                <input
                  type="checkbox"
                  className="h-4 w-4"
                  checked={preferences.analytics}
                  onChange={(event) =>
                    setPreferences((prev) => ({
                      ...prev,
                      analytics: event.target.checked,
                    }))
                  }
                />
              </label>

              <label className="flex cursor-pointer items-center justify-between rounded-2xl border border-slate-200 px-4 py-3">
                <div>
                  <p className="text-sm font-semibold text-[#1A1A1A]">Marketing</p>
                  <p className="text-xs text-[#6B6B6B]">Personalized offers and ads.</p>
                </div>
                <input
                  type="checkbox"
                  className="h-4 w-4"
                  checked={preferences.marketing}
                  onChange={(event) =>
                    setPreferences((prev) => ({
                      ...prev,
                      marketing: event.target.checked,
                    }))
                  }
                />
              </label>
            </div>

            <div className="mt-6 flex flex-wrap gap-3">
              <button
                className="rounded-full bg-[#000000] px-6 py-2 text-xs font-semibold uppercase tracking-[0.2em] text-white transition hover:-translate-y-0.5"
                onClick={() => savePreferences(preferences)}
              >
                Save preferences
              </button>
              <button
                className="rounded-full border border-[#000000]/20 px-6 py-2 text-xs font-semibold uppercase tracking-[0.2em] text-[#1A1A1A] transition hover:-translate-y-0.5"
                onClick={handleRejectAll}
              >
                Reject all
              </button>
              <button
                className="rounded-full border border-[#000000]/20 px-6 py-2 text-xs font-semibold uppercase tracking-[0.2em] text-[#1A1A1A] transition hover:-translate-y-0.5"
                onClick={handleAcceptAll}
              >
                Accept all
              </button>
            </div>
          </div>
        </div>
      )}
    </>
  );
}
