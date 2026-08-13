export interface Partner {
  id: string;
  name: string;
  url?: string;
}

export const partners: Partner[] = [
  { id: "khadispal", name: "Khadispal", url: "https://www.khadispal.com" },
  { id: "edf", name: "EDF", url: "https://www.edf.fr" },
  { id: "cergy", name: "Ville de Cergy", url: "https://www.cergy.fr" },
  { id: "tasty", name: "Tasty Crousty" },
  { id: "kedge", name: "Kedge BS", url: "https://kedge.edu" },
  { id: "essec", name: "Essec BS", url: "https://www.essec.edu" },
  { id: "otacos", name: "O'Tacos", url: "https://o-tacos.com" },
  { id: "intersport", name: "Intersport", url: "https://www.intersport.fr" },
  { id: "dololka", name: "Dololka Paris" },
  { id: "dada", name: "DADA" },
  { id: "k10", name: "K10 Team" },
];
