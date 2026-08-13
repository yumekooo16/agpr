import Link from "next/link";

export default function NotFound() {
  return (
    <main className="flex min-h-screen flex-col items-center justify-center bg-agpr-cream px-4 text-center">
      <p className="font-display text-6xl text-agpr-green-dark">404</p>
      <h1 className="mt-4 font-display text-3xl text-agpr-forest">Page introuvable</h1>
      <p className="mt-3 max-w-md text-agpr-forest/75">
        La page que vous cherchez n&apos;existe pas ou a été déplacée.
      </p>
      <Link
        href="/"
        className="mt-8 inline-flex rounded-full bg-agpr-green px-8 py-3 font-semibold text-white hover:bg-agpr-green-dark"
      >
        Retour à l&apos;accueil
      </Link>
    </main>
  );
}
