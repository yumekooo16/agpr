import Image from "next/image";

export default function JoinUs() {
  const roles = [
    {
      title: "Bénévoles",
      description:
        "Rejoignez notre équipe pour animer des activités, accompagner les jeunes ou participer à des projets de quartier.",
      cta: "Devenir bénévole",
      href: "#contact",
    },
    {
      title: "Adhérents",
      description:
        "Soutenez l'association en devenant adhérent et participez aux décisions et à la vie de l'AGPR.",
      cta: "Adhérer",
      href: "#contact",
    },
    {
      title: "Partenaires",
      description:
        "Entreprises, institutions, écoles : construisons ensemble des projets au service de la jeunesse de Cergy.",
      cta: "Devenir partenaire",
      href: "#contact",
    },
    {
      title: "Donateurs",
      description:
        "Votre soutien financier nous permet de développer nos actions et d'atteindre plus de jeunes du quartier.",
      cta: "Faire un don",
      href: "#contact",
    },
  ];

  return (
    <section id="nous-rejoindre" className="relative py-20 overflow-hidden">
      {/* Photo de fond atténuée */}
      <div className="absolute inset-0" aria-hidden="true">
        <Image
          src="/images/activite-plage.jpg"
          alt=""
          fill
          sizes="100vw"
          className="object-cover object-top"
        />
        <div className="absolute inset-0 bg-agpr-green-dark/88" />
      </div>

      <div className="pointer-events-none absolute inset-0 opacity-10" aria-hidden="true">
        <svg className="absolute -left-20 top-10 h-80 w-80" viewBox="0 0 200 200">
          <ellipse cx="100" cy="100" rx="90" ry="70" fill="#C5E84A" />
        </svg>
      </div>

      <div className="relative mx-auto max-w-6xl px-4 sm:px-6 lg:px-8">
        <div className="text-center">
          <h2 className="font-display text-4xl text-white sm:text-5xl">
            Nous rejoindre
          </h2>
          <p className="mx-auto mt-4 max-w-2xl text-lg text-white/85">
            Chaque geste compte. Que vous soyez jeune, parent, professionnel ou
            institution, il y a une place pour vous à l&apos;AGPR.
          </p>
        </div>

        <div className="mt-14 grid gap-6 sm:grid-cols-2 lg:grid-cols-4">
          {roles.map((role) => (
            <div
              key={role.title}
              className="flex flex-col rounded-2xl bg-white/10 p-6 backdrop-blur-sm transition-all hover:bg-white/20"
            >
              <h3 className="font-display text-2xl text-agpr-lime">{role.title}</h3>
              <p className="mt-3 flex-1 text-sm leading-relaxed text-white/80">
                {role.description}
              </p>
              <a
                href={role.href}
                className="mt-6 inline-flex items-center justify-center rounded-full bg-agpr-lime px-5 py-2.5 text-sm font-bold text-agpr-forest transition-colors hover:bg-white"
              >
                {role.cta}
              </a>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}
