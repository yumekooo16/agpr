import Image from "next/image";

export default function Hero() {
  return (
    <section
      id="accueil"
      className="relative min-h-screen flex items-center splash-bg pt-24 pb-16"
      style={{ backgroundColor: "#FAFAF8" }}
    >
      <div className="pointer-events-none absolute inset-0 overflow-hidden" aria-hidden="true">
        <svg className="absolute -left-10 top-32 h-40 w-40 opacity-20" viewBox="0 0 200 200">
          <ellipse cx="100" cy="100" rx="80" ry="60" fill="#4CAF50" />
        </svg>
        <svg className="absolute -right-16 bottom-20 h-56 w-56 opacity-15" viewBox="0 0 200 200">
          <ellipse cx="100" cy="100" rx="70" ry="50" fill="#C5E84A" />
        </svg>
      </div>

      <div className="relative mx-auto max-w-6xl px-4 sm:px-6 lg:px-8">
        <div className="grid items-center gap-10 lg:grid-cols-2 lg:gap-12">
          <div>
            <p className="mb-4 inline-block rounded-full bg-agpr-green/15 px-4 py-1.5 text-sm font-semibold text-agpr-green-dark">
              Association loi 1901 · Cergy · Depuis 2007
            </p>
            <h1 className="font-display text-5xl leading-none text-agpr-forest sm:text-6xl lg:text-7xl">
              Agir ensemble
              <br />
              <span className="bg-gradient-to-r from-agpr-lime via-agpr-green to-agpr-green-dark bg-clip-text text-transparent">
                pour réussir
              </span>
              <br />à Cergy
            </h1>
            <p className="mt-6 max-w-lg text-lg leading-relaxed text-agpr-forest/80">
              Nous créons du lien social, ouvrons les jeunes à la citoyenneté et
              accompagnons les habitants du quartier des Linandes vers la réussite
              sociale et professionnelle.
            </p>
            <div className="mt-8 flex flex-wrap gap-4">
              <a
                href="#contact"
                className="inline-flex items-center rounded-full bg-agpr-green px-8 py-3.5 font-semibold text-white shadow-lg shadow-agpr-green/25 transition-all hover:bg-agpr-green-dark hover:shadow-xl"
              >
                Nous contacter
              </a>
              <a
                href="#nous-rejoindre"
                className="inline-flex items-center rounded-full border-2 border-agpr-green-dark px-8 py-3.5 font-semibold text-agpr-green-dark transition-all hover:bg-agpr-green-dark hover:text-white"
              >
                Devenir bénévole
              </a>
            </div>

            <div className="mt-10 grid grid-cols-3 gap-3 max-w-sm">
              {[
                { value: "2007", label: "Création" },
                { value: "6", label: "Axes d'action" },
                { value: "95000", label: "Cergy" },
              ].map((stat) => (
                <div
                  key={stat.label}
                  className="rounded-2xl bg-white/60 p-3 text-center backdrop-blur-sm sm:p-4"
                >
                  <p className="font-display text-xl text-agpr-green-dark sm:text-2xl">{stat.value}</p>
                  <p className="text-xs font-semibold text-agpr-forest/70">{stat.label}</p>
                </div>
              ))}
            </div>
          </div>

          {/* Mosaïque photos */}
          <div className="flex justify-center lg:justify-end">
            <div className="grid h-[240px] w-full max-w-md grid-cols-3 grid-rows-2 gap-2 sm:h-[300px] sm:gap-3">
              <div className="relative col-span-2 row-span-2 overflow-hidden rounded-2xl shadow-md">
                <Image
                  src="/images/activite-lac.jpg"
                  alt="Jeune souriant lors d'une sortie nautique organisée par l'AGPR"
                  fill
                  sizes="(max-width: 768px) 60vw, 300px"
                  className="object-cover"
                  priority
                />
              </div>
              <div className="relative overflow-hidden rounded-xl shadow-md">
                <Image
                  src="/images/activite-plage.jpg"
                  alt="Groupe de jeunes en gilets de sauvetage"
                  fill
                  sizes="(max-width: 768px) 40vw, 180px"
                  className="object-cover object-top"
                  priority
                />
              </div>
              <div className="relative overflow-hidden rounded-xl shadow-md">
                <Image
                  src="/images/activite-rencontre.jpg"
                  alt="Jeunes réunis autour d'une table lors d'une activité AGPR"
                  fill
                  sizes="(max-width: 768px) 40vw, 180px"
                  className="object-cover object-top"
                />
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}
