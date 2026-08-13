# agpr

Site web de l'association **La Croix Petit – Agir Pour Réussir (AGPR)**, Cergy (Val-d'Oise).

## Stack

- [Next.js](https://nextjs.org/) 16
- React 19
- Tailwind CSS 4
- TypeScript

## Démarrage

```bash
npm install
npm run dev
```

Ouvrir [http://localhost:3000](http://localhost:3000).

## Build production

```bash
npm run build
npm start
```

## Contenu modifiable

| Fichier | Contenu |
|---------|---------|
| `data/news.ts` | Actualités et événements |
| `data/partners.ts` | Partenaires |
| `data/actions.ts` | Axes d'action |
| `public/images/` | Photos de l'association |
| `public/logo-agpr.png` | Logo |

## SEO

- Métadonnées (title, description, Open Graph, Twitter)
- `robots.txt` et `sitemap.xml` automatiques
- Données structurées JSON-LD (Schema.org NGO)

Configurer l'URL publique dans `.env.local` :

```env
NEXT_PUBLIC_SITE_URL=https://votre-domaine.fr
```

(Voir `.env.example`.)

## Contact

- Email : asso.agirpourreussir@gmail.com
- Facebook : [@associationAgirpourreussir](https://www.facebook.com/associationAgirpourreussir)
