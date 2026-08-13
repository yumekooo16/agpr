import { actions } from "@/data/actions";

export default function Actions() {
  return (
    <section id="nos-actions" className="py-20 bg-agpr-cream splash-bg">
      <div className="mx-auto max-w-6xl px-4 sm:px-6 lg:px-8">
        <div className="text-center">
          <div className="section-divider mx-auto mb-8 max-w-xs" />
          <h2 className="font-display text-4xl text-agpr-forest sm:text-5xl">
            Nos actions
          </h2>
          <p className="mx-auto mt-4 max-w-2xl text-lg text-agpr-forest/75">
            Six grands axes pour accompagner les jeunes et les habitants de Cergy
            vers la réussite, le lien social et l&apos;engagement citoyen.
          </p>
        </div>

        <div className="mt-14 grid gap-6 sm:grid-cols-2 lg:grid-cols-3">
          {actions.map((action) => (
            <article
              key={action.id}
              className="group rounded-2xl bg-white p-6 shadow-sm transition-all hover:-translate-y-1 hover:shadow-lg"
            >
              <div className="mb-4 flex h-14 w-14 items-center justify-center rounded-2xl bg-gradient-to-br from-agpr-lime/30 to-agpr-green/20 text-2xl transition-transform group-hover:scale-110">
                <span role="img" aria-hidden="true">
                  {action.icon}
                </span>
              </div>
              <h3 className="font-display text-2xl text-agpr-green-dark">{action.title}</h3>
              <p className="mt-3 text-sm leading-relaxed text-agpr-forest/75">
                {action.description}
              </p>
            </article>
          ))}
        </div>
      </div>
    </section>
  );
}
