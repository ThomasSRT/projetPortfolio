export interface Project {
  title: string;
  desc: string;
  tag: string;
  media: { type: 'img' | 'video'; src: string };
  link?: { href: string; label: string };
}

export const PROJECTS: Project[] = [
  {
    title: "Bannière d'événement pour AS'UP",
    desc: "Design d'une bannière pour un événement d'entreprise.",
    tag: 'Design graphique',
    media: { type: 'img', src: '/img/image.png' },
  },
  {
    title: 'Post LinkedIn pour BFIE',
    desc: "Création d'un post LinkedIn pour promouvoir le site internet de BFIE en respectant la charte graphique.",
    tag: 'Réseaux sociaux',
    media: { type: 'img', src: '/img/image (1).png' },
  },
  {
    title: 'Post TikTok Cash Okaz',
    desc: "Création d'une vidéo format TikTok pour Cash Okaz afin de promouvoir leur service de réparation de bijoux.",
    tag: 'Motion design',
    media: { type: 'img', src: '/img/1749660244553.jpg' },
  },
  {
    title: "Refonte complète d'un site internet",
    desc: "Refonte du design et de l'expérience utilisateur de Lys Transport.",
    tag: 'Web design',
    media: { type: 'img', src: '/img/lys transport.png' },
    link: { href: 'https://lys-transport.fr', label: 'Voir le site' },
  },
  {
    title: 'Post LinkedIn du Groupe DOURS',
    desc: "Création d'un post respectant la charte graphique de l'entreprise Dours, pour promouvoir un de leurs nouveaux projets.",
    tag: 'Réseaux sociaux',
    media: { type: 'img', src: '/img/dours.jpg' },
  },
  {
    title: 'Post Instagram Lys Transport',
    desc: "Création d'un post Instagram pour promouvoir le nouveau site de Lys Transport et ses nouvelles fonctionnalités.",
    tag: 'Réseaux sociaux',
    media: { type: 'img', src: '/img/visuel lys transport.png' },
  },
  {
    title: 'Animation sur After Effects',
    desc: "Création de l'animation d'un fantôme sur After Effects.",
    tag: 'Motion design',
    media: { type: 'video', src: '/img/projet after effects 2.mp4' },
  },
  {
    title: 'Charte graphique (fictive) — Pchitt',
    desc: "Création d'une charte graphique en moins de 3h pour un partiel blanc.",
    tag: 'Identité visuelle',
    media: { type: 'img', src: "/img/Capture d'écran 2026-04-01 115255.png" },
    link: { href: '/img/charte graphiquePchitt.pdf', label: 'Ouvrir le PDF' },
  },
  {
    title: 'Charte graphique (fictive) — Montagem',
    desc: "Création d'une charte graphique pour une sous-marque de Montagem, pour de nouveaux produits.",
    tag: 'Identité visuelle',
    media: { type: 'img', src: "/img/Capture d'écran 2026-04-02 150240.png" },
    link: { href: '/img/charte graphique.pdf', label: 'Ouvrir le PDF' },
  },
  {
    title: 'Jeu vidéo créé en moins de 2 jours (1er)',
    desc: 'Jeu créé pour le Hackathon organisé par la MANU en moins de 2 jours — première place du Hackathon.',
    tag: 'Game dev',
    media: { type: 'video', src: '/img/2026-04-17 11-09-05.mkv' },
  },
  {
    title: "Packaging d'emballage de Cookie",
    desc: "Création du design d'un emballage de cookie (marque fictive).",
    tag: 'Packaging',
    media: { type: 'img', src: '/img/thomas.png' },
  },
];
