/**
 * Ce site n'utilise pas de PWA.
 * Ce fichier existe pour éviter les 404 et désinscrire
 * d'éventuels service workers laissés par d'autres projets sur localhost.
 */
self.addEventListener("install", () => {
  self.skipWaiting();
});

self.addEventListener("activate", (event) => {
  event.waitUntil(
    (async () => {
      const names = await caches.keys();
      await Promise.all(names.map((name) => caches.delete(name)));
      await self.registration.unregister();
    })()
  );
});
