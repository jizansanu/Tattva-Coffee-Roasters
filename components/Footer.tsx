import Link from "next/link";
import { brand, contact } from "@/lib/content";
import { Instagram, Twitter, Linkedin, MapPin } from "lucide-react";

const footerNav = [
  { label: "Home", href: "/" },
  { label: "Coffee", href: "/coffee" },
  { label: "About", href: "/about-us" },
  { label: "Gallery", href: "/gallery" },
  { label: "Contact", href: "/contact-us" },
];

export default function Footer() {
  return (
    <footer className="bg-[color:var(--color-espresso)] text-[color:var(--color-cream)]">
      {/* location band */}
      <div className="container-wide py-12 border-b border-white/10 flex flex-col md:flex-row md:items-center justify-between gap-4">
        <div className="flex items-center gap-3">
          <MapPin size={18} className="text-[color:var(--color-peach)]" />
          <div>
            <p className="text-xs uppercase tracking-widest opacity-60">
              Our location
            </p>
            <p className="opacity-90">{contact.address}</p>
          </div>
        </div>
        <a
          href={contact.mapsUrl}
          target="_blank"
          rel="noreferrer"
          className="text-sm uppercase tracking-[0.16em] border-b border-white/50 pb-1 hover:border-white transition w-fit"
        >
          View in map
        </a>
      </div>

      {/* main footer */}
      <div className="container-wide py-16 grid md:grid-cols-12 gap-10">
        <div className="md:col-span-4">
          <p className="font-serif text-3xl mb-4">{brand.fullName}</p>
          <p className="opacity-70 max-w-sm leading-relaxed text-sm">
            Tattva Coffee Roasters was created with a simple focus: making good
            coffee that feels easy to enjoy every day. We believe coffee should be
            honest, well-made, and part of your routine — not complicated or
            overdesigned.
          </p>
        </div>

        <div className="md:col-span-2">
          <p className="text-xs uppercase tracking-widest opacity-60 mb-4">
            Navigation
          </p>
          <ul className="space-y-2">
            {footerNav.map((n) => (
              <li key={n.label}>
                <Link href={n.href} className="opacity-90 hover:opacity-100 hover:text-[color:var(--color-peach)] transition">
                  {n.label}
                </Link>
              </li>
            ))}
          </ul>
        </div>

        <div className="md:col-span-3">
          <p className="text-xs uppercase tracking-widest opacity-60 mb-4">
            Hours
          </p>
          {contact.hours.map((h) => (
            <p key={h.day} className="opacity-90 mb-1">
              {h.day} <span className="opacity-60">· {h.time}</span>
            </p>
          ))}
          <p className="opacity-90 mt-4">{contact.phone}</p>
          <p className="opacity-90">{contact.email}</p>
        </div>

        <div className="md:col-span-3">
          <p className="text-xs uppercase tracking-widest opacity-60 mb-4">
            Subscribe to our newsletter
          </p>
          <form className="flex border-b border-white/30 pb-2">
            <input
              type="email"
              placeholder="Your email"
              className="bg-transparent flex-1 text-sm placeholder-white/40 outline-none"
            />
            <button
              type="submit"
              className="text-xs uppercase tracking-widest text-[color:var(--color-peach)]"
            >
              Subscribe
            </button>
          </form>
          <p className="text-xs uppercase tracking-widest opacity-60 mt-8 mb-4">
            Follow us
          </p>
          <div className="flex gap-5">
            <a href={contact.instagram} target="_blank" rel="noreferrer" className="opacity-80 hover:opacity-100 hover:text-[color:var(--color-peach)] transition" aria-label="Instagram">
              <Instagram size={20} />
            </a>
            <a href={contact.twitter} className="opacity-80 hover:opacity-100 hover:text-[color:var(--color-peach)] transition" aria-label="Twitter/X">
              <Twitter size={20} />
            </a>
            <a href={contact.linkedin} className="opacity-80 hover:opacity-100 hover:text-[color:var(--color-peach)] transition" aria-label="LinkedIn">
              <Linkedin size={20} />
            </a>
          </div>
        </div>
      </div>

      <div className="container-wide py-6 border-t border-white/10 flex flex-col sm:flex-row justify-between gap-2 text-xs opacity-60">
        <p>© {new Date().getFullYear()} {brand.fullName}. All rights reserved.</p>
        <p>Made with care in Bengaluru.</p>
      </div>
    </footer>
  );
}
