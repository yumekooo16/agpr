/**
 * Actualités et événements — modifiez ce fichier pour publier du contenu.
 * Ajoutez un objet au tableau `news` pour chaque nouvel article ou événement.
 */
export interface NewsItem {
  id: string;
  title: string;
  date: string;
  excerpt: string;
  location?: string;
  tag: "événement" | "actualité" | "projet";
}

export const news: NewsItem[] = [
  {
    id: "1",
    title: "Journée portes ouvertes à la Maison de quartier des Linandes",
    date: "2026-03-15",
    excerpt:
      "Venez découvrir nos activités, rencontrer l'équipe de bénévoles et participer à des ateliers pour toute la famille. Entrée libre et gratuite.",
    location: "Maison de quartier des Linandes, Cergy",
    tag: "événement",
  },
  {
    id: "2",
    title: "Reprise du soutien scolaire",
    date: "2026-02-01",
    excerpt:
      "Les permanences de soutien scolaire reprennent chaque mercredi après-midi. Inscriptions ouvertes pour les collégiens et lycéens du quartier.",
    location: "Maison de quartier des Linandes",
    tag: "actualité",
  },
  {
    id: "3",
    title: "Tournoi inter-quartiers de football",
    date: "2026-04-20",
    excerpt:
      "Grand tournoi mixte filles-garçons sur le terrain du quartier. Inscriptions par équipe de 7 joueurs — places limitées !",
    location: "Cergy — Linandes",
    tag: "événement",
  },
  {
    id: "4",
    title: "Atelier insertion pro avec Kedge BS",
    date: "2026-03-08",
    excerpt:
      "Session de préparation aux entretiens d'embauche animée par des étudiants et alumni de Kedge Business School. Sur inscription.",
    location: "Maison de quartier des Linandes",
    tag: "projet",
  },
];
