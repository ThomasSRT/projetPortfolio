# Portfolio — Thomas Serrurot

Portfolio construit avec [Astro](https://astro.build).

## Prérequis

Node.js **22.12+** (voir `.nvmrc`).

## Commandes

```bash
npm install      # installe les dépendances
npm run dev      # démarre le serveur de développement (http://localhost:4321)
npm run build    # build de production → dist/
npm run preview  # prévisualise le build de production
```

## Structure

- `src/pages/index.astro` — page principale
- `src/components/` — sections et composants de l'interface
- `src/data/` — contenu des projets et compétences (`projects.ts`, `skills.ts`)
- `src/styles/global.css` — feuille de styles globale
- `public/img/` — visuels et médias des projets
