export interface Action {
  id: string;
  title: string;
  description: string;
  icon: string;
}

export const actions: Action[] = [
  {
    id: "scolaire",
    title: "Soutien scolaire",
    description:
      "Accompagnement personnalisé pour aider les jeunes à progresser à l'école, renforcer leur confiance et développer leur autonomie dans les apprentissages.",
    icon: "📚",
  },
  {
    id: "sport",
    title: "Activités sportives",
    description:
      "Des activités physiques variées pour favoriser la santé, l'esprit d'équipe et la mixité filles-garçons dans un cadre convivial et dynamique.",
    icon: "⚽",
  },
  {
    id: "culture",
    title: "Culture & loisirs",
    description:
      "Sorties, ateliers créatifs et moments de détente pour ouvrir les jeunes à la culture, aux arts et aux loisirs du quartier.",
    icon: "🎭",
  },
  {
    id: "citoyennete",
    title: "Actions citoyennes",
    description:
      "Projets de quartier, sensibilisation et engagement citoyen pour renforcer le lien social et le pouvoir d'agir des habitants.",
    icon: "🤝",
  },
  {
    id: "insertion",
    title: "Insertion professionnelle",
    description:
      "Accompagnement vers l'emploi : CV, entretiens, stages et mise en relation avec des entreprises partenaires du territoire.",
    icon: "💼",
  },
  {
    id: "economie",
    title: "Développement économique",
    description:
      "Soutien à l'entrepreneuriat local et aux initiatives économiques qui dynamisent le quartier des Linandes et Cergy.",
    icon: "🌱",
  },
];
