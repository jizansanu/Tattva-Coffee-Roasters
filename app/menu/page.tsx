import type { Metadata } from "next";
import Nav from "@/components/Nav";
import Footer from "@/components/Footer";
import PageBanner from "@/components/PageBanner";
import {
  cafeMenu,
  newAdditions,
  menuNotes,
  type MenuGroup,
} from "@/lib/content";
import { MapPin } from "lucide-react";

export const metadata: Metadata = {
  title: "Menu — Tattva Coffee Roasters",
  description:
    "South Indian filter coffee, signature decoction drinks, cold coffee, take-home powder, and new additions. JP Nagar, Bengaluru.",
};

function MenuColumn({ groups }: { groups: MenuGroup[] }) {
  return (
    <div className="space-y-14">
      {groups.map((group) => (
        <div key={group.title} data-reveal>
          {/* Group heading */}
          <div className="flex items-center gap-4 mb-7">
            <h2 className="text-2xl md:text-3xl text-[color:var(--color-clay)] tracking-tight">
              {group.title}
            </h2>
            <span className="flex-1 h-px bg-[color:var(--color-line)]" />
          </div>

          <ul className="space-y-6">
            {group.items.map((item) => (
              <li key={item.name + (item.note ?? "")}>
                <div className="flex items-baseline justify-between gap-4">
                  <h3 className="font-serif text-xl text-[color:var(--color-espresso)]">
                    {item.name}
                    {item.note && (
                      <span className="ml-2 text-sm not-italic text-[color:var(--color-stone)] font-sans">
                        {item.note}
                      </span>
                    )}
                  </h3>
                  {/* Single-price items show price inline on the right */}
                  {item.prices.length === 1 && (
                    <>
                      <span className="flex-1 mx-1 border-b border-dotted border-[color:var(--color-line)] translate-y-[-3px]" />
                      <span className="text-[color:var(--color-bark)] font-medium">
                        {item.prices[0].price}
                      </span>
                    </>
                  )}
                </div>

                {/* Multi-tier items show size · price chips below */}
                {item.prices.length > 1 && (
                  <div className="mt-2 flex flex-wrap gap-x-6 gap-y-1">
                    {item.prices.map((p) => (
                      <span key={p.size} className="text-sm text-[color:var(--color-stone)]">
                        {p.size}{" "}
                        <span className="text-[color:var(--color-bark)] font-medium">
                          {p.price}
                        </span>
                      </span>
                    ))}
                  </div>
                )}
              </li>
            ))}
          </ul>
        </div>
      ))}
    </div>
  );
}

export default function MenuPage() {
  return (
    <>
      <Nav />
      <PageBanner
        eyebrow="At the café · JP Nagar"
        title="The Menu"
        sub="Filter coffee built on a fresh decoction, signature pours you won't find elsewhere, and a few good things to eat."
      />
      <main className="container-wide py-20 md:py-28">
        {/* Two-column menu (Beano-style menu sheet) */}
        <div className="grid lg:grid-cols-2 gap-x-20 gap-y-14">
          <MenuColumn groups={cafeMenu} />

          <div>
            {/* New additions header */}
            <div className="mb-10">
              <p className="eyebrow mb-2">Just landed</p>
              <h2 className="text-4xl md:text-5xl text-[color:var(--color-clay)] tracking-tight leading-none">
                New Additions
              </h2>
            </div>
            <MenuColumn groups={newAdditions} />
          </div>
        </div>

        {/* Footnotes — takeaway, origin, more coming */}
        <div className="mt-20 pt-10 border-t hairline flex flex-col sm:flex-row sm:items-center sm:justify-between gap-6">
          <div className="flex flex-wrap items-center gap-x-8 gap-y-3">
            <span className="inline-flex items-center gap-2 text-sm">
              <span
                className="inline-grid place-items-center w-7 h-7 rounded-full text-[0.6rem] font-semibold"
                style={{ backgroundColor: "var(--color-clay)", color: "var(--color-cream)" }}
              >
                +₹10
              </span>
              <span className="text-[color:var(--color-stone)]">{menuNotes.takeaway}</span>
            </span>
            <span className="inline-flex items-center gap-2 text-sm text-[color:var(--color-stone)]">
              <MapPin size={15} className="text-[color:var(--color-clay)]" />
              {menuNotes.origin}
            </span>
          </div>
          <p className="font-serif italic text-lg text-[color:var(--color-bark)]">
            {menuNotes.more}
          </p>
        </div>
      </main>
      <Footer />
    </>
  );
}
