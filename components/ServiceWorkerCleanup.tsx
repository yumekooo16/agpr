"use client";

import { useEffect } from "react";

/** Désinscrit les service workers résiduels (autre projet, ancien cache navigateur). */
export default function ServiceWorkerCleanup() {
  useEffect(() => {
    if (!("serviceWorker" in navigator)) return;

    navigator.serviceWorker.getRegistrations().then((registrations) => {
      registrations.forEach((registration) => registration.unregister());
    });
  }, []);

  return null;
}
