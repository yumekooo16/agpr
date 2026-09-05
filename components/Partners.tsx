import { partners } from "@/data/partners";

const cardClassName =
  "group flex h-24 w-44 shrink-0 items-center justify-center rounded-xl border border-agpr-green/20 bg-agpr-cream px-4 py-3 transition-all hover:border-agpr-green hover:shadow-md sm:h-28 sm:w-52";

function PartnerCard({
  name,
  logo,
  url,
}: {
  name: string;
  logo: string;
  url?: string;
}) {
  const image = (
    // eslint-disable-next-line @next/next/no-img-element
    <img
      src={logo}
      alt={name}
      width={180}
      height={80}
      className="max-h-14 w-auto max-w-full object-contain sm:max-h-16"
      loading="lazy"
      decoding="async"
    />
  );

  if (url) {
    return (
      <a
        href={url}
        target="_blank"
        rel="noopener noreferrer"
        className={cardClassName}
        aria-label={`Partenaire : ${name}`}
      >
        {image}
      </a>
    );
  }

  return (
    <div className={cardClassName} aria-label={`Partenaire : ${name}`}>
      {image}
    </div>
  );
}

export default function Partners() {
  const doubled = [...partners, ...partners];

  return (
    <section id="partenaires" className="py-16 bg-white overflow-hidden">
      <div className="mx-auto max-w-6xl px-4 sm:px-6 lg:px-8">
        <div className="text-center">
          <div className="section-divider mx-auto mb-8 max-w-xs" />
          <h2 className="font-display text-4xl text-agpr-forest sm:text-5xl">
            Nos partenaires
          </h2>
          <p className="mt-4 text-agpr-forest/70">
            Merci à nos partenaires qui rendent nos actions possibles.
          </p>
        </div>
      </div>

      <div className="relative mt-12">
        <div className="pointer-events-none absolute left-0 top-0 z-10 h-full w-16 bg-gradient-to-r from-white to-transparent" />
        <div className="pointer-events-none absolute right-0 top-0 z-10 h-full w-16 bg-gradient-to-l from-white to-transparent" />

        <div className="flex overflow-hidden">
          <div className="partners-track flex shrink-0 gap-8 px-4">
            {doubled.map((partner, i) => (
              <PartnerCard
                key={`${partner.id}-${i}`}
                name={partner.name}
                logo={partner.logo}
                url={partner.url}
              />
            ))}
          </div>
        </div>
      </div>
    </section>
  );
}
