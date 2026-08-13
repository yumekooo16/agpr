import ContactForm from "./ContactForm";

const contactInfo = [
  {
    label: "Adresse",
    value: "6 rue du Ponceau, 95000 Cergy",
    icon: (
      <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M17.657 16.657L13.414 20.9a1.998 1.998 0 01-2.827 0l-4.244-4.243a8 8 0 1111.314 0z" />
    ),
  },
  {
    label: "Siège d'activité",
    value: "Maison de quartier des Linandes, rue des Linandes Beiges, 95000 Cergy",
    icon: (
      <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M19 21V5a2 2 0 00-2-2H7a2 2 0 00-2 2v16m14 0h2m-2 0h-5m-9 0H3m2 0h5M9 7h1m-1 4h1m4-4h1m-1 4h1m-5 10v-5a1 1 0 011-1h2a1 1 0 011 1v5m-4 0h4" />
    ),
  },
  {
    label: "Téléphone",
    value: "+33 7 88 68 11 39",
    href: "tel:+33788681139",
    icon: (
      <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M3 5a2 2 0 012-2h3.28a1 1 0 01.948.684l1.498 4.493a1 1 0 01-.502 1.21l-2.257 1.13a11.042 11.042 0 005.516 5.516l1.13-2.257a1 1 0 011.21-.502l4.493 1.498a1 1 0 01.684.949V19a2 2 0 01-2 2h-1C9.716 21 3 14.284 3 6V5z" />
    ),
  },
  {
    label: "Email",
    value: "asso.agirpourreussir@gmail.com",
    href: "mailto:asso.agirpourreussir@gmail.com",
    icon: (
      <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M3 8l7.89 5.26a2 2 0 002.22 0L21 8M5 19h14a2 2 0 002-2V7a2 2 0 00-2-2H5a2 2 0 00-2 2v10a2 2 0 002 2z" />
    ),
  },
];

export default function Contact() {
  return (
    <section id="contact" className="py-20 bg-agpr-cream">
      <div className="mx-auto max-w-6xl px-4 sm:px-6 lg:px-8">
        <div className="section-divider mb-12 max-w-xs" />
        <h2 className="font-display text-4xl text-agpr-forest sm:text-5xl">
          Contact
        </h2>
        <p className="mt-4 max-w-2xl text-lg text-agpr-forest/75">
          Une question, envie de nous rejoindre ou de participer à un événement ?
          Écrivez-nous !
        </p>

        <div className="mt-12 grid gap-12 lg:grid-cols-2">
          {/* Coordonnées */}
          <div>
            <ul className="space-y-5">
              {contactInfo.map((item) => (
                <li key={item.label} className="flex gap-4">
                  <div className="flex h-10 w-10 shrink-0 items-center justify-center rounded-full bg-agpr-green/15 text-agpr-green-dark">
                    <svg className="h-5 w-5" fill="none" viewBox="0 0 24 24" stroke="currentColor" aria-hidden="true">
                      {item.icon}
                    </svg>
                  </div>
                  <div>
                    <p className="text-sm font-semibold text-agpr-forest/60">{item.label}</p>
                    {item.href ? (
                      <a
                        href={item.href}
                        className="font-medium text-agpr-green-dark hover:underline"
                      >
                        {item.value}
                      </a>
                    ) : (
                      <p className="font-medium text-agpr-forest">{item.value}</p>
                    )}
                  </div>
                </li>
              ))}
            </ul>

            <div className="mt-8">
              <p className="text-sm font-semibold text-agpr-forest/60">Réseaux sociaux</p>
              <a
                href="https://www.facebook.com/associationAgirpourreussir"
                target="_blank"
                rel="noopener noreferrer"
                className="mt-2 inline-flex items-center gap-2 rounded-full bg-[#1877F2] px-5 py-2.5 text-sm font-semibold text-white transition-opacity hover:opacity-90"
              >
                <svg className="h-5 w-5" fill="currentColor" viewBox="0 0 24 24" aria-hidden="true">
                  <path d="M24 12.073c0-6.627-5.373-12-12-12s-12 5.373-12 12c0 5.99 4.388 10.954 10.125 11.854v-8.385H7.078v-3.47h3.047V9.43c0-3.007 1.792-4.669 4.533-4.669 1.312 0 2.686.235 2.686.235v2.953H15.83c-1.491 0-1.956.925-1.956 1.874v2.25h3.328l-.532 3.47h-2.796v8.385C19.612 23.027 24 18.062 24 12.073z" />
                </svg>
                @associationAgirpourreussir
              </a>
            </div>

            {/* Carte OpenStreetMap */}
            <div className="mt-8 overflow-hidden rounded-2xl border border-agpr-green/20 shadow-sm">
              <iframe
                title="Localisation AGPR — Maison de quartier des Linandes, Cergy"
                src="https://www.openstreetmap.org/export/embed.html?bbox=2.0400%2C49.0350%2C2.0650%2C49.0500&layer=mapnik&marker=49.0425%2C2.0525"
                className="h-64 w-full"
                loading="lazy"
                referrerPolicy="no-referrer-when-downgrade"
              />
              <p className="bg-white px-4 py-2 text-xs text-agpr-forest/60">
                Quartier des Linandes — Cergy (95000)
              </p>
            </div>
          </div>

          {/* Formulaire */}
          <div className="rounded-2xl bg-white p-6 shadow-sm sm:p-8">
            <h3 className="font-display text-2xl text-agpr-green-dark">
              Envoyez-nous un message
            </h3>
            <div className="mt-6">
              <ContactForm />
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}
