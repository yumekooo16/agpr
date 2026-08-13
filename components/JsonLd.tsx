import { getSiteUrl } from "@/lib/site-url";

const siteUrl = getSiteUrl();

const organizationSchema = {
  "@context": "https://schema.org",
  "@type": "NGO",
  name: "La Croix Petit – Agir Pour Réussir (AGPR)",
  alternateName: "AGPR",
  url: siteUrl,
  logo: `${siteUrl}/logo-agpr.png`,
  description:
    "Association loi 1901 à Cergy promouvant la citoyenneté, le lien social et la réussite des jeunes du quartier des Linandes.",
  email: "asso.agirpourreussir@gmail.com",
  telephone: "+33788681139",
  address: {
    "@type": "PostalAddress",
    streetAddress: "6 rue du Ponceau",
    addressLocality: "Cergy",
    postalCode: "95000",
    addressCountry: "FR",
  },
  areaServed: {
    "@type": "City",
    name: "Cergy",
  },
  sameAs: ["https://www.facebook.com/associationAgirpourreussir"],
};

export default function JsonLd() {
  return (
    <script
      type="application/ld+json"
      dangerouslySetInnerHTML={{ __html: JSON.stringify(organizationSchema) }}
    />
  );
}
