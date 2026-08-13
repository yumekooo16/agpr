import Image from "next/image";

export default function About() {
  return (
    <section id="qui-sommes-nous" className="py-20 bg-white">
      <div className="mx-auto max-w-6xl px-4 sm:px-6 lg:px-8">
        <div className="section-divider mb-12 max-w-xs" />
        <div className="grid gap-12 lg:grid-cols-2 lg:items-start">
          <div>
            <h2 className="font-display text-4xl text-agpr-forest sm:text-5xl">
              Qui sommes-nous ?
            </h2>
            <p className="mt-6 text-lg leading-relaxed text-agpr-forest/80">
              <strong className="text-agpr-green-dark">La Croix Petit – Agir Pour Réussir (AGPR)</strong>{" "}
              est une association loi 1901 déclarée, créée le{" "}
              <strong>25 juin 2007</strong>. Nous sommes ancrés dans le quartier
              des <strong>Linandes à Cergy</strong> (Val-d&apos;Oise), au cœur de la
              Maison de quartier des Linandes.
            </p>
            <p className="mt-4 text-lg leading-relaxed text-agpr-forest/80">
              Notre mission : promouvoir la citoyenneté et le pouvoir d&apos;agir des
              habitants. Nous créons du lien social intergénérationnel, favorisons
              le vivre-ensemble et la mixité, et contribuons à une image positive
              de la jeunesse de Cergy.
            </p>

            <figure className="mt-8 overflow-hidden rounded-2xl border border-agpr-green/10 bg-agpr-cream shadow-md">
              <Image
                src="/images/activite-nautique.jpg"
                alt="Groupe de jeunes en gilets orange lors d'une sortie nautique AGPR"
                width={800}
                height={1200}
                sizes="(max-width: 1024px) 100vw, 480px"
                className="h-auto w-full"
              />
              <figcaption className="bg-agpr-cream px-4 py-2 text-sm text-agpr-forest/70">
                Des sorties collectives pour renforcer la cohésion et la confiance en soi.
              </figcaption>
            </figure>
          </div>

          <div className="space-y-4">
            {[
              {
                title: "Lien social",
                text: "Rapprocher les habitants, toutes générations confondues, autour de projets communs.",
              },
              {
                title: "Ouverture culturelle",
                text: "Ouvrir socialement et culturellement les jeunes du quartier.",
              },
              {
                title: "Insertion professionnelle",
                text: "Accompagner les jeunes dans leurs démarches vers l'emploi.",
              },
              {
                title: "Réussite des habitants",
                text: "Participer à la réussite sociale et économique de Cergy.",
              },
            ].map((item) => (
              <div
                key={item.title}
                className="flex gap-4 rounded-2xl border border-agpr-green/20 bg-agpr-cream p-5 transition-shadow hover:shadow-md"
              >
                <div className="mt-0.5 flex h-8 w-8 shrink-0 items-center justify-center rounded-full bg-agpr-green text-sm font-bold text-white">
                  ✓
                </div>
                <div>
                  <h3 className="font-display text-xl text-agpr-green-dark">{item.title}</h3>
                  <p className="mt-1 text-sm text-agpr-forest/75">{item.text}</p>
                </div>
              </div>
            ))}

            <figure className="overflow-hidden rounded-2xl border border-agpr-green/10 bg-agpr-cream shadow-md">
              <Image
                src="/images/activite-camping.jpg"
                alt="Séjour camping jeunesse de l'association AGPR"
                width={800}
                height={600}
                sizes="(max-width: 1024px) 100vw, 480px"
                className="h-auto w-full"
              />
              <figcaption className="bg-agpr-green/10 px-4 py-2 text-sm font-medium text-agpr-green-dark">
                Séjours et camps jeunesse
              </figcaption>
            </figure>
          </div>
        </div>
      </div>
    </section>
  );
}
