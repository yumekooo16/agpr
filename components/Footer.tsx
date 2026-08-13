import Logo from "./Logo";

export default function Footer() {
  const currentYear = new Date().getFullYear();

  return (
    <footer className="bg-agpr-forest text-white/80">
      <div className="mx-auto max-w-6xl px-4 py-12 sm:px-6 lg:px-8">
        <div className="grid gap-10 sm:grid-cols-2 lg:grid-cols-4">
          <div className="sm:col-span-2 lg:col-span-1">
            <Logo className="h-16 w-[170px]" />
            <p className="mt-4 text-sm leading-relaxed">
              Association loi 1901 déclarée le 25 juin 2007.
              <br />
              Agir pour la citoyenneté et la réussite des jeunes à Cergy.
            </p>
          </div>

          <div>
            <h3 className="font-display text-lg text-agpr-lime">Navigation</h3>
            <ul className="mt-4 space-y-2 text-sm">
              {[
                { href: "#accueil", label: "Accueil" },
                { href: "#qui-sommes-nous", label: "Qui sommes-nous" },
                { href: "#nos-actions", label: "Nos actions" },
                { href: "#galerie", label: "Galerie" },
                { href: "#actualites", label: "Actualités" },
                { href: "#nous-rejoindre", label: "Nous rejoindre" },
                { href: "#partenaires", label: "Partenaires" },
                { href: "#contact", label: "Contact" },
              ].map((link) => (
                <li key={link.href}>
                  <a href={link.href} className="transition-colors hover:text-agpr-lime">
                    {link.label}
                  </a>
                </li>
              ))}
            </ul>
          </div>

          <div>
            <h3 className="font-display text-lg text-agpr-lime">Contact</h3>
            <ul className="mt-4 space-y-2 text-sm">
              <li>6 rue du Ponceau, 95000 Cergy</li>
              <li>
                <a href="tel:+33788681139" className="hover:text-agpr-lime">
                  +33 7 88 68 11 39
                </a>
              </li>
              <li>
                <a
                  href="mailto:asso.agirpourreussir@gmail.com"
                  className="hover:text-agpr-lime"
                >
                  asso.agirpourreussir@gmail.com
                </a>
              </li>
            </ul>
          </div>

          <div>
            <h3 className="font-display text-lg text-agpr-lime">Suivez-nous</h3>
            <a
              href="https://www.facebook.com/associationAgirpourreussir"
              target="_blank"
              rel="noopener noreferrer"
              className="mt-4 inline-flex items-center gap-2 text-sm transition-colors hover:text-agpr-lime"
            >
              <svg className="h-5 w-5" fill="currentColor" viewBox="0 0 24 24" aria-hidden="true">
                <path d="M24 12.073c0-6.627-5.373-12-12-12s-12 5.373-12 12c0 5.99 4.388 10.954 10.125 11.854v-8.385H7.078v-3.47h3.047V9.43c0-3.007 1.792-4.669 4.533-4.669 1.312 0 2.686.235 2.686.235v2.953H15.83c-1.491 0-1.956.925-1.956 1.874v2.25h3.328l-.532 3.47h-2.796v8.385C19.612 23.027 24 18.062 24 12.073z" />
              </svg>
              Facebook
            </a>
          </div>
        </div>

        <div className="mt-10 border-t border-white/15 pt-8 text-center text-xs text-white/50">
          <p>
            © {currentYear} La Croix Petit – Agir Pour Réussir (AGPR). Tous droits réservés.
          </p>
          <p className="mt-2">
            Association loi 1901 ·{" "}
            <a href="#mentions-legales" className="hover:text-agpr-lime">
              Mentions légales
            </a>
          </p>
          <p className="mt-2 text-white/40">
            Site réalisé par{" "}
            <span className="font-semibold text-agpr-lime/80">Wyatt</span>
          </p>
        </div>
      </div>

      {/* Mentions légales (ancre) */}
      <div id="mentions-legales" className="border-t border-white/10 bg-agpr-forest/80 px-4 py-8">
        <div className="mx-auto max-w-3xl text-center text-xs text-white/40">
          <p className="font-semibold text-white/60">Mentions légales</p>
          <p className="mt-2">
            Éditeur : Association La Croix Petit – Agir Pour Réussir (AGPR),
            6 rue du Ponceau, 95000 Cergy. Contact : asso.agirpourreussir@gmail.com.
            Association déclarée sous le régime de la loi du 1er juillet 1901.
          </p>
        </div>
      </div>
    </footer>
  );
}
