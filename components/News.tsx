import { news } from "@/data/news";

const tagColors: Record<string, string> = {
  événement: "bg-agpr-green text-white",
  actualité: "bg-agpr-lime/40 text-agpr-forest",
  projet: "bg-agpr-green-dark/15 text-agpr-green-dark",
};

function formatDate(dateStr: string) {
  return new Date(dateStr).toLocaleDateString("fr-FR", {
    day: "numeric",
    month: "long",
    year: "numeric",
  });
}

export default function News() {
  return (
    <section id="actualites" className="py-20 bg-white">
      <div className="mx-auto max-w-6xl px-4 sm:px-6 lg:px-8">
        <div className="section-divider mb-12 max-w-xs" />
        <h2 className="font-display text-4xl text-agpr-forest sm:text-5xl">
          Actualités & Événements
        </h2>
        <p className="mt-4 max-w-2xl text-lg text-agpr-forest/75">
          Retrouvez ici nos prochains événements et actualités de l&apos;association.
        </p>

        <div className="mt-12 grid gap-6 sm:grid-cols-2">
          {news.map((item) => (
            <article
              key={item.id}
              className="flex flex-col rounded-2xl border border-agpr-green/15 bg-agpr-cream p-6 transition-shadow hover:shadow-md"
            >
              <div className="flex items-center justify-between gap-3">
                <time
                  dateTime={item.date}
                  className="text-sm font-semibold text-agpr-green-dark"
                >
                  {formatDate(item.date)}
                </time>
                <span
                  className={`rounded-full px-3 py-0.5 text-xs font-bold uppercase tracking-wide ${tagColors[item.tag]}`}
                >
                  {item.tag}
                </span>
              </div>
              <h3 className="mt-4 font-display text-2xl text-agpr-forest">{item.title}</h3>
              <p className="mt-3 flex-1 text-sm leading-relaxed text-agpr-forest/75">
                {item.excerpt}
              </p>
              {item.location && (
                <p className="mt-4 flex items-center gap-2 text-sm font-medium text-agpr-green-dark">
                  <svg className="h-4 w-4 shrink-0" fill="none" viewBox="0 0 24 24" stroke="currentColor" aria-hidden="true">
                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M17.657 16.657L13.414 20.9a1.998 1.998 0 01-2.827 0l-4.244-4.243a8 8 0 1111.314 0z" />
                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M15 11a3 3 0 11-6 0 3 3 0 016 0z" />
                  </svg>
                  {item.location}
                </p>
              )}
            </article>
          ))}
        </div>
      </div>
    </section>
  );
}
