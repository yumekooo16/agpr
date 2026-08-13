export interface GalleryImage {
  src: string;
  alt: string;
  caption: string;
  featured?: boolean;
}

export const galleryImages: GalleryImage[] = [
  {
    src: "/images/activite-lac.jpg",
    alt: "Jeune participant souriant lors d'une sortie nautique sur le lac",
    caption: "Sortie nautique estivale",
    featured: true,
  },
  {
    src: "/images/activite-plage.jpg",
    alt: "Groupe de jeunes en gilets de sauvetage sur une plage",
    caption: "Activités sportives en plein air",
    featured: true,
  },
  {
    src: "/images/activite-nautique.jpg",
    alt: "Groupe de jeunes en gilets orange lors d'une activité nautique",
    caption: "Sortie collective en bord de mer",
  },
  {
    src: "/images/activite-camping.jpg",
    alt: "Campement de tentes lors d'un séjour jeunesse",
    caption: "Séjour camping jeunesse",
  },
  {
    src: "/images/activite-rencontre.jpg",
    alt: "Jeunes réunis autour d'une table lors d'une activité de quartier",
    caption: "Moments de partage et de lien social",
    featured: true,
  },
];

export const heroImages = galleryImages.filter((img) => img.featured);
