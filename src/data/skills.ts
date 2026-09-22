export interface Skill {
  name: string;
  note: string;
}

export interface SkillGroup {
  title: string;
  skills: Skill[];
}

export const SKILL_GROUPS: SkillGroup[] = [
  {
    title: 'Design & direction artistique',
    skills: [
      { name: 'UI / UX Design', note: 'Interfaces & parcours' },
      { name: 'Figma', note: 'Prototypage' },
      { name: 'Photoshop', note: 'Retouche & compositing' },
      { name: 'Illustrator', note: 'Illustration vectorielle' },
      { name: 'InDesign', note: 'Mise en page' },
    ],
  },
  {
    title: 'Web & motion',
    skills: [
      { name: 'HTML', note: 'Structure' },
      { name: 'CSS', note: 'Mise en forme' },
      { name: 'JavaScript', note: 'Interactions' },
      { name: 'Premiere Pro', note: 'Montage vidéo' },
      { name: 'After Effects', note: 'Animation' },
    ],
  },
];
