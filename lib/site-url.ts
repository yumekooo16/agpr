const DEFAULT_SITE_URL = "https://agpr.vercel.app";

/** URL publique sûre pour metadata, sitemap et SEO (évite les crash si .env vide). */
export function getSiteUrl(): string {
  const fromEnv = process.env.NEXT_PUBLIC_SITE_URL?.trim();

  if (fromEnv) {
    try {
      return new URL(fromEnv).origin;
    } catch {
      // Variable d'environnement invalide — on ignore
    }
  }

  if (process.env.VERCEL_URL) {
    return `https://${process.env.VERCEL_URL}`;
  }

  return DEFAULT_SITE_URL;
}
