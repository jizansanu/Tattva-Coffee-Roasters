"use client";

import { useState, useEffect } from "react";
import Link from "next/link";
import Image from "next/image";
import { brand, navCenter, navRight, contact } from "@/lib/content";
import { Menu, X, Instagram } from "lucide-react";

type Props = { variant?: "light" | "dark" };

export default function Nav({ variant = "light" }: Props) {
  const isDark = variant === "dark";
  const [open, setOpen] = useState(false);

  // Lock body scroll when the mobile menu is open
  useEffect(() => {
    document.body.style.overflow = open ? "hidden" : "";
    return () => {
      document.body.style.overflow = "";
    };
  }, [open]);

  const linkBase = isDark
    ? "text-white/95 hover:text-white"
    : "text-[color:var(--color-bark)] hover:text-[color:var(--color-clay)]";
  const wrapBg = isDark
    ? "absolute top-0 left-0 right-0 bg-transparent"
    : "sticky top-0 bg-[color:var(--color-cream)]/90 backdrop-blur-md border-b hairline";
  const allLinks = [...navCenter, ...navRight];

  return (
    <header className={`${wrapBg} z-50 w-full`}>
      <div className="container-wide grid grid-cols-[1fr_auto_1fr] md:grid-cols-3 items-center h-16 md:h-20">
        {/* Left: logo */}
        <Link href="/" className="flex items-center" aria-label={brand.fullName}>
          <Image
            src={isDark ? "/tattva-logo-cream.svg" : "/tattva-logo.svg"}
            alt={brand.name}
            width={145}
            height={33}
            priority
            className="h-6 w-auto sm:h-7 md:h-8"
          />
        </Link>

        {/* Center nav links (desktop) */}
        <nav className="hidden md:flex items-center justify-center gap-10">
          {navCenter.map((n) => (
            <a
              key={n.label}
              href={n.href}
              className={`text-xs uppercase tracking-[0.18em] ${linkBase} transition`}
            >
              {n.label}
            </a>
          ))}
        </nav>

        {/* Right nav links (desktop) */}
        <div className="hidden md:flex items-center justify-end gap-8">
          {navRight.map((n) => (
            <a
              key={n.label}
              href={n.href}
              target={n.href.startsWith("http") ? "_blank" : undefined}
              rel={n.href.startsWith("http") ? "noreferrer" : undefined}
              className={`text-xs uppercase tracking-[0.18em] ${linkBase} transition`}
            >
              {n.label}
            </a>
          ))}
        </div>

        {/* Spacer for center column on mobile (keeps logo left) */}
        <span className="md:hidden" aria-hidden />

        {/* Mobile hamburger */}
        <button
          onClick={() => setOpen(true)}
          aria-label="Open menu"
          className={`md:hidden justify-self-end p-2 -mr-2 ${
            isDark ? "text-white" : "text-[color:var(--color-espresso)]"
          }`}
        >
          <Menu size={24} />
        </button>
      </div>

      {/* Bottom hairline */}
      <div
        className={`h-px w-full ${
          isDark ? "bg-white/25" : "bg-[color:var(--color-line)]"
        }`}
      />

      {/* Mobile full-screen menu */}
      <div
        className={`md:hidden fixed inset-0 z-[60] transition-opacity duration-300 ${
          open ? "opacity-100 pointer-events-auto" : "opacity-0 pointer-events-none"
        }`}
      >
        {/* Backdrop */}
        <div
          className="absolute inset-0 bg-black/40"
          onClick={() => setOpen(false)}
        />
        {/* Panel */}
        <div
          className={`absolute top-0 right-0 h-full w-[82%] max-w-sm bg-[color:var(--color-cream)] shadow-2xl flex flex-col transition-transform duration-300 ease-out ${
            open ? "translate-x-0" : "translate-x-full"
          }`}
        >
          <div className="flex items-center justify-between h-16 px-6 border-b hairline">
            <Image
              src="/tattva-logo.svg"
              alt={brand.name}
              width={145}
              height={33}
              className="h-6 w-auto"
            />
            <button
              onClick={() => setOpen(false)}
              aria-label="Close menu"
              className="p-2 -mr-2 text-[color:var(--color-espresso)]"
            >
              <X size={24} />
            </button>
          </div>

          <nav className="flex-1 overflow-y-auto px-6 py-8">
            <ul className="space-y-1">
              {allLinks.map((n, i) => (
                <li key={n.label}>
                  <a
                    href={n.href}
                    target={n.href.startsWith("http") ? "_blank" : undefined}
                    rel={n.href.startsWith("http") ? "noreferrer" : undefined}
                    onClick={() => setOpen(false)}
                    className="flex items-baseline gap-4 py-4 border-b hairline group"
                  >
                    <span className="font-serif text-xs text-[color:var(--color-clay)] w-6">
                      0{i + 1}
                    </span>
                    <span className="font-serif text-2xl text-[color:var(--color-espresso)] group-hover:text-[color:var(--color-clay)] transition">
                      {n.label}
                    </span>
                  </a>
                </li>
              ))}
            </ul>

            <a
              href={contact.instagram}
              target="_blank"
              rel="noreferrer"
              className="mt-10 inline-flex items-center gap-2 text-sm uppercase tracking-[0.18em] text-[color:var(--color-bark)]"
            >
              <Instagram size={18} /> Follow us
            </a>
          </nav>

          <div className="px-6 py-6 border-t hairline text-sm text-[color:var(--color-stone)] leading-relaxed">
            {contact.address}
          </div>
        </div>
      </div>
    </header>
  );
}
