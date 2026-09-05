import Logo from "./Logo";

const instagramUrl = "https://www.instagram.com/agpr.95";
const tiktokUrl = "https://www.tiktok.com/@agpr_asso";

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
            <ul className="mt-4 space-y-3 text-sm">
              <li>
                <a
                  href={instagramUrl}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="inline-flex items-center gap-2 transition-colors hover:text-agpr-lime"
                >
                  <svg className="h-5 w-5" fill="currentColor" viewBox="0 0 24 24" aria-hidden="true">
                    <path d="M12 2.163c3.204 0 3.584.012 4.85.07 3.252.148 4.771 1.691 4.919 4.919.058 1.265.069 1.645.069 4.849 0 3.205-.012 3.584-.069 4.849-.149 3.225-1.664 4.771-4.919 4.919-1.266.058-1.644.07-4.85.07-3.204 0-3.584-.012-4.849-.07-3.26-.149-4.771-1.699-4.919-4.92-.058-1.265-.07-1.644-.07-4.849 0-3.204.013-3.583.07-4.849.149-3.227 1.664-4.771 4.919-4.919 1.266-.057 1.645-.069 4.849-.069zM12 0C8.741 0 8.333.014 7.053.072 2.695.272.273 2.69.073 7.052.014 8.333 0 8.741 0 12c0 3.259.014 3.668.072 4.948.2 4.358 2.618 6.78 6.98 6.98C8.333 23.986 8.741 24 12 24c3.259 0 3.668-.014 4.948-.072 4.354-.2 6.782-2.618 6.979-6.98.059-1.28.073-1.689.073-4.948 0-3.259-.014-3.667-.072-4.947-.196-4.354-2.617-6.78-6.979-6.98C15.668.014 15.259 0 12 0zm0 5.838a6.162 6.162 0 100 12.324 6.162 6.162 0 000-12.324zM12 16a4 4 0 110-8 4 4 0 010 8zm6.406-11.845a1.44 1.44 0 100 2.881 1.44 1.44 0 000-2.881z" />
                  </svg>
                  Instagram
                </a>
              </li>
              <li>
                <a
                  href={tiktokUrl}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="inline-flex items-center gap-2 transition-colors hover:text-agpr-lime"
                >
                  <svg className="h-5 w-5" fill="currentColor" viewBox="0 0 24 24" aria-hidden="true">
                    <path d="M12.525.02c1.31-.02 2.61-.01 3.91-.02.08 1.53.63 3.09 1.75 4.17 1.12 1.11 2.7 1.62 4.24 1.79v4.03c-1.44-.05-2.89-.35-4.2-.97-.57-.26-1.1-.59-1.62-.93-.01 2.92.01 5.84-.02 8.75-.08 1.4-.54 2.79-1.35 3.94-1.31 1.92-3.58 3.17-5.91 3.21-1.43.08-2.86-.31-4.08-1.03-2.02-1.19-3.44-3.37-3.65-5.71-.02-.5-.03-1-.01-1.49.18-1.9 1.12-3.72 2.58-4.96 1.66-1.44 3.98-2.13 6.15-1.72.02 1.48-.04 2.96-.04 4.44-.99-.32-2.15-.23-3.02.37-.63.41-1.11 1.04-1.36 1.75-.21.51-.15 1.07-.14 1.61.24 1.64 1.82 3.02 3.5 2.87 1.12-.01 2.19-.66 2.77-1.61.19-.33.4-.67.41-1.06.1-1.79.06-3.57.07-5.36.01-4.03-.01-8.05.02-12.07z" />
                  </svg>
                  TikTok
                </a>
              </li>
            </ul>
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
