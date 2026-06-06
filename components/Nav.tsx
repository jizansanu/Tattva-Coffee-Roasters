import Link from "next/link";
import Image from "next/image";
import { brand, navCenter, navRight } from "@/lib/content";

type Props = { variant?: "light" | "dark" };

export default function Nav({ variant = "light" }: Props) {
  const isDark = variant === "dark";
  const text = isDark ? "text-white" : "text-[color:var(--color-espresso)]";
  const linkBase = isDark
    ? "text-white/95 hover:text-white"
    : "text-[color:var(--color-bark)] hover:text-[color:var(--color-clay)]";
  const wrapBg = isDark
    ? "absolute top-0 left-0 right-0 bg-transparent"
    : "sticky top-0 bg-[color:var(--color-cream)]/85 backdrop-blur-md border-b hairline";

  return (
    <header className={`${wrapBg} z-50 w-full`}>
      <div className="container-wide grid grid-cols-3 items-center h-20">
        {/* Left: logo */}
        <Link href="/" className="flex items-center" aria-label={brand.fullName}>
          <Image
            src={isDark ? "/tattva-logo-cream.svg" : "/tattva-logo.svg"}
            alt={brand.name}
            width={145}
            height={33}
            priority
            className="h-7 w-auto md:h-8"
          />
        </Link>

        {/* Center nav links */}
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

        {/* Right nav links */}
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
      </div>
      {/* Bottom hairline */}
      <div
        className={`h-px w-full ${
          isDark ? "bg-white/25" : "bg-[color:var(--color-line)]"
        }`}
      />
    </header>
  );
}
