import Image from "next/image";
import { galleryImages } from "@/data/gallery";

export default function Gallery() {
  return (
    <section id="galerie" className="py-20 bg-white">
      <div className="mx-auto max-w-6xl px-4 sm:px-6 lg:px-8">
        <div className="section-divider mb-12 max-w-xs" />
        <h2 className="font-display text-4xl text-agpr-forest sm:text-5xl">
          La vie de l&apos;association
        </h2>
        <p className="mt-4 max-w-2xl text-lg text-agpr-forest/75">
          Sorties, séjours, activités sportives et moments de convivialité :
          découvrez le quotidien de l&apos;AGPR à travers nos actions sur le terrain.
        </p>

        <div className="mt-12 grid grid-cols-2 gap-3 sm:gap-4 md:grid-cols-6 md:grid-rows-2 md:gap-5">
          {/* Grande photo — sortie nautique lac */}
          <figure className="group relative col-span-2 row-span-2 overflow-hidden rounded-2xl md:col-span-3">
            <div className="relative aspect-[4/3] md:aspect-auto md:h-full md:min-h-[280px]">
              <Image
                src={galleryImages[0].src}
                alt={galleryImages[0].alt}
                fill
                sizes="(max-width: 768px) 100vw, 50vw"
                className="object-cover transition-transform duration-500 group-hover:scale-105"
                priority
              />
            </div>
            <figcaption className="absolute inset-x-0 bottom-0 bg-gradient-to-t from-agpr-forest/80 to-transparent px-4 py-3">
              <p className="text-sm font-semibold text-white">{galleryImages[0].caption}</p>
            </figcaption>
          </figure>

          {/* Photo plage */}
          <figure className="group relative col-span-1 overflow-hidden rounded-2xl md:col-span-3">
            <div className="relative aspect-[3/4] sm:aspect-[4/3]">
              <Image
                src={galleryImages[1].src}
                alt={galleryImages[1].alt}
                fill
                sizes="(max-width: 768px) 50vw, 25vw"
                className="object-cover object-top transition-transform duration-500 group-hover:scale-105"
              />
            </div>
            <figcaption className="absolute inset-x-0 bottom-0 bg-gradient-to-t from-agpr-forest/80 to-transparent px-3 py-2">
              <p className="text-xs font-semibold text-white sm:text-sm">{galleryImages[1].caption}</p>
            </figcaption>
          </figure>

          {/* Photo nautique groupe */}
          <figure className="group relative col-span-1 overflow-hidden rounded-2xl md:col-span-3">
            <div className="relative aspect-[3/4] sm:aspect-[4/3]">
              <Image
                src={galleryImages[2].src}
                alt={galleryImages[2].alt}
                fill
                sizes="(max-width: 768px) 50vw, 25vw"
                className="object-cover object-center transition-transform duration-500 group-hover:scale-105"
              />
            </div>
            <figcaption className="absolute inset-x-0 bottom-0 bg-gradient-to-t from-agpr-forest/80 to-transparent px-3 py-2">
              <p className="text-xs font-semibold text-white sm:text-sm">{galleryImages[2].caption}</p>
            </figcaption>
          </figure>

          {/* Camping + Rencontre — bande basse */}
          <figure className="group relative col-span-1 overflow-hidden rounded-2xl md:col-span-3">
            <div className="relative aspect-[4/3]">
              <Image
                src={galleryImages[3].src}
                alt={galleryImages[3].alt}
                fill
                sizes="(max-width: 768px) 50vw, 25vw"
                className="object-cover transition-transform duration-500 group-hover:scale-105"
              />
            </div>
            <figcaption className="absolute inset-x-0 bottom-0 bg-gradient-to-t from-agpr-forest/80 to-transparent px-3 py-2">
              <p className="text-xs font-semibold text-white sm:text-sm">{galleryImages[3].caption}</p>
            </figcaption>
          </figure>

          <figure className="group relative col-span-1 overflow-hidden rounded-2xl md:col-span-3">
            <div className="relative aspect-[4/3]">
              <Image
                src={galleryImages[4].src}
                alt={galleryImages[4].alt}
                fill
                sizes="(max-width: 768px) 50vw, 25vw"
                className="object-cover object-top transition-transform duration-500 group-hover:scale-105"
              />
            </div>
            <figcaption className="absolute inset-x-0 bottom-0 bg-gradient-to-t from-agpr-forest/80 to-transparent px-3 py-2">
              <p className="text-xs font-semibold text-white sm:text-sm">{galleryImages[4].caption}</p>
            </figcaption>
          </figure>
        </div>
      </div>
    </section>
  );
}
