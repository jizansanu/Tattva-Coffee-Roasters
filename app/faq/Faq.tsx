"use client";

import { useState } from "react";
import { faqs } from "@/lib/content";
import { Plus, Minus } from "lucide-react";

export default function Faq() {
  const [open, setOpen] = useState<number | null>(0);
  return (
    <div className="container-narrow py-20 md:py-28">
      <div className="divide-y hairline border-y hairline">
        {faqs.map((f, i) => {
          const isOpen = open === i;
          return (
            <div key={f.q}>
              <button
                onClick={() => setOpen(isOpen ? null : i)}
                className="w-full flex items-center justify-between gap-6 py-6 text-left"
              >
                <span className="font-serif text-xl md:text-2xl text-[color:var(--color-espresso)]">
                  {f.q}
                </span>
                <span className="text-[color:var(--color-clay)] shrink-0">
                  {isOpen ? <Minus size={22} /> : <Plus size={22} />}
                </span>
              </button>
              {isOpen && (
                <p className="pb-6 -mt-1 text-[color:var(--color-stone)] leading-relaxed max-w-2xl">
                  {f.a}
                </p>
              )}
            </div>
          );
        })}
      </div>
    </div>
  );
}
