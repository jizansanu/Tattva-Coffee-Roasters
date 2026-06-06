type Props = {
  eyebrow?: string;
  title: string;
  sub?: string;
};

// Inner-page title band (sits under the light nav).
export default function PageBanner({ eyebrow, title, sub }: Props) {
  return (
    <section className="bg-[color:var(--color-bone)] border-b hairline">
      <div data-hero-rise className="container-wide py-20 md:py-28 text-center">
        {eyebrow && <p className="eyebrow mb-5">{eyebrow}</p>}
        <h1 className="text-4xl md:text-6xl leading-tight text-[color:var(--color-espresso)]">
          {title}
        </h1>
        {sub && (
          <p className="mt-6 text-lg text-[color:var(--color-stone)] max-w-2xl mx-auto leading-relaxed">
            {sub}
          </p>
        )}
      </div>
    </section>
  );
}
