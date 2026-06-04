import type { Metadata } from "next";
import Nav from "@/components/Nav";
import Footer from "@/components/Footer";
import PageBanner from "@/components/PageBanner";
import { contact } from "@/lib/content";
import { MapPin, Phone, Clock, Mail, ArrowUpRight } from "lucide-react";

export const metadata: Metadata = {
  title: "Contact — Tattva Coffee Roasters",
  description: "Visit us in JP Nagar, Bengaluru. Hours, address, and how to reach us.",
};

export default function ContactPage() {
  return (
    <>
      <Nav />
      <PageBanner eyebrow="Come by" title="Visit us" sub="The café and roastery in JP Nagar. We'd love you to drop in." />
      <main className="container-wide py-20 md:py-28 grid md:grid-cols-2 gap-12 lg:gap-20">
        {/* details */}
        <div>
          <ul className="space-y-8">
            <li className="flex gap-4">
              <MapPin size={20} className="mt-1 text-[color:var(--color-clay)]" />
              <div>
                <p className="text-xs uppercase tracking-widest text-[color:var(--color-stone)] mb-1">Address</p>
                <p className="text-[color:var(--color-bark)]">{contact.address}</p>
              </div>
            </li>
            <li className="flex gap-4">
              <Phone size={20} className="mt-1 text-[color:var(--color-clay)]" />
              <div>
                <p className="text-xs uppercase tracking-widest text-[color:var(--color-stone)] mb-1">Phone</p>
                <p className="text-[color:var(--color-bark)]">{contact.phone}</p>
              </div>
            </li>
            <li className="flex gap-4">
              <Mail size={20} className="mt-1 text-[color:var(--color-clay)]" />
              <div>
                <p className="text-xs uppercase tracking-widest text-[color:var(--color-stone)] mb-1">Email</p>
                <p className="text-[color:var(--color-bark)]">{contact.email}</p>
              </div>
            </li>
            <li className="flex gap-4">
              <Clock size={20} className="mt-1 text-[color:var(--color-clay)]" />
              <div>
                <p className="text-xs uppercase tracking-widest text-[color:var(--color-stone)] mb-1">Hours</p>
                {contact.hours.map((h) => (
                  <p key={h.day} className="text-[color:var(--color-bark)]">{h.day} · {h.time}</p>
                ))}
              </div>
            </li>
          </ul>
          <a href={contact.mapsUrl} target="_blank" rel="noreferrer" className="btn-primary mt-10">
            Get directions <ArrowUpRight size={16} />
          </a>
        </div>

        {/* form */}
        <div className="bg-[color:var(--color-bone)] rounded-lg p-8 md:p-10">
          <h2 className="text-2xl md:text-3xl mb-6">Send us a message</h2>
          <form className="space-y-5">
            <div>
              <label className="text-xs uppercase tracking-widest text-[color:var(--color-stone)]">Name</label>
              <input type="text" className="mt-2 w-full bg-[color:var(--color-cream)] border hairline rounded-md px-4 py-3 outline-none focus:border-[color:var(--color-clay)]" />
            </div>
            <div>
              <label className="text-xs uppercase tracking-widest text-[color:var(--color-stone)]">Email</label>
              <input type="email" className="mt-2 w-full bg-[color:var(--color-cream)] border hairline rounded-md px-4 py-3 outline-none focus:border-[color:var(--color-clay)]" />
            </div>
            <div>
              <label className="text-xs uppercase tracking-widest text-[color:var(--color-stone)]">Message</label>
              <textarea rows={5} className="mt-2 w-full bg-[color:var(--color-cream)] border hairline rounded-md px-4 py-3 outline-none focus:border-[color:var(--color-clay)] resize-none" />
            </div>
            {/* TODO: wire form to email / form backend */}
            <button type="submit" className="btn-primary w-full justify-center">Send message</button>
          </form>
        </div>
      </main>
      <Footer />
    </>
  );
}
