import React from "react";

const ANNEE_MIN = 2014;
const ANNEE_MAX = 2027;
const NB_ANNEES = ANNEE_MAX - ANNEE_MIN + 1;

type Evenement = {
  annee: number;
  couloir: 1 | 2 | 3;
  titre: string;
  texte: string;
  label: string;
  fin?: number;
};

const EVENEMENTS: Evenement[] = [
  {
    annee: 2014,
    couloir: 3,
    titre: "Licence de droit",
    texte: "Université Grenoble Alpes",
    label: "2014-2017",
  },
  {
    annee: 2017,
    couloir: 2,
    titre: "Licence en économie",
    texte: "Université Grenoble Alpes",
    label: "2017-2018",
  },
  {
    annee: 2017,
    couloir: 1,
    titre: "Assistante clerc de notaire",
    texte: "Office Notarial d'Eybens",
    label: "2017-2018",
  },
  {
    annee: 2018,
    couloir: 3,
    titre: "Master 1 Droit de la propriété intellectuelle et du numérique",
    texte: "Université Paris Saclay",
    label: "2018-2019",
  },
  {
    annee: 2019,
    couloir: 2,
    titre: "Master 2 Philosophie du droit",
    texte: "Université Paris Assas",
    label: "2019-2020",
  },
  {
    annee: 2019,
    couloir: 1,
    titre: "Libraire",
    texte: "Boulinier Paris",
    label: "2019-2022",
  },
  {
    annee: 2023,
    couloir: 1,
    titre: "Apprentie développeuse",
    texte: "Université Paris Assas",
    label: "2023-2024",
  },
  {
    annee: 2023,
    couloir: 2,
    titre: "Développeur concepteur d'applications",
    texte: "Wild Code School",
    label: "2023-2024",
  },
  {
    annee: 2025,
    couloir: 2,
    titre: "Expert en Ingénierie logicielle",
    texte: "Iscod",
    label: "2025-2027",
  },
  {
    annee: 2025,
    couloir: 1,
    titre: "Apprentie développeuse",
    texte: "Fifteen",
    label: "2025-2027",
  },
];

const GRADUATIONS = [
  2014, 2015, 2016, 2017, 2018, 2019, 2020, 2021, 2022, 2023, 2024, 2025, 2026,
  2027,
];

const colonne = (annee: number): number => ANNEE_MAX - annee + 1;

const anneeFin = (e: Evenement): number => {
  if (e.fin) return e.fin;
  const m = e.label.match(/\d{4}\s*[-–]\s*(\d{4})/);
  return m ? Number(m[1]) : e.annee;
};

function CarteEvenement(e: Evenement) {
  const fin = Math.min(anneeFin(e), ANNEE_MAX);
  const duree = fin - e.annee + 1;

  const styleCarte: React.CSSProperties = {
    gridColumn: `${colonne(fin)} / span ${duree}`,
  };
  const styleTige: React.CSSProperties = {
    gridColumn: `${colonne(e.annee)} / span 1`,
  };

  return (
    <article className={`evenement couloir-${e.couloir}`}>
      <div className="tige" style={styleTige} />
      <div className="carte" style={styleCarte}>
        <span className="annee-carte">{e.label}</span>
        <h2>{e.titre}</h2>
        <p>{e.texte}</p>
      </div>
    </article>
  );
}

export default function Curriculum() {
  return (
    <div className="frise-page">
      <style>{styles}</style>

      <header>
        <p className="surtitre">Parcours</p>
        <h1>Mon parcours</h1>
        <p>
          Frise anti-chronologique représentant mes études et expériences
          professionnelles pertinentes depuis 2014.
        </p>
      </header>

      <div className="defilement">
        <section
          className="frise"
          style={{ "--nb-annees": NB_ANNEES } as React.CSSProperties}
        >
          {EVENEMENTS.map((e, i) => (
            <CarteEvenement key={i} {...e} />
          ))}

          {GRADUATIONS.map((a) => (
            <span key={a} className="annee" style={{ gridColumn: colonne(a) }}>
              {a}
            </span>
          ))}
        </section>
      </div>
    </div>
  );
}

const styles = `
@import url('https://fonts.googleapis.com/css2?family=Space+Grotesk:wght@500;700&family=IBM+Plex+Sans:wght@400;600&family=IBM+Plex+Mono:wght@500&display=swap');

.frise-page {
  --fond: #EDF1F5;
  --sourdine: #5B6B7A;
  --accent: #2447F5;
  --ambre: #E8A13D;
  --carte: #FFFFFF;
  --largeur-annee: 86px;
}

.frise-page *, .frise-page *::before, .frise-page *::after { box-sizing: border-box; }
.frise-page h1, .frise-page h2, .frise-page p { margin: 0; }

.frise-page header { text-align: center; margin-bottom: 3rem; padding: 0 1.5rem; }
.frise-page .surtitre {
  font-family: "IBM Plex Mono", monospace;
  font-size: 0.8rem; letter-spacing: 0.18em;
  text-transform: uppercase; color: var(--accent);
}
.frise-page header h1 {
  font-family: "Space Grotesk", sans-serif;
  font-size: clamp(1.8rem, 4vw, 2.8rem);
  margin-top: 0.4rem;
}
.frise-page header p { color: var(--sourdine); margin-top: 0.5rem; }

.defilement {
  overflow-x: auto;
  padding: 0 2rem 1.5rem;
  scrollbar-color: var(--accent) transparent;
}

.frise {
  display: grid;
  grid-template-columns: repeat(var(--nb-annees), var(--largeur-annee));
  grid-template-rows: auto auto auto 56px;
  width: max-content;
  position: relative;
  margin: 0 auto;
  padding-left: 14px;
}

.frise::before {
  content: "";
  grid-row: 4;
  grid-column: 1 / -1;
  align-self: start;
  height: 3px;
  background: linear-gradient(90deg, var(--accent), var(--accent) 92%, var(--ambre));
  border-radius: 3px;
}

.frise::after {
  content: "";
  grid-row: 4;
  grid-column: 1;
  align-self: start;
  justify-self: start;
  width: 0; height: 0;
  border-top: 8px solid transparent;
  border-bottom: 8px solid transparent;
  border-right: 14px solid var(--accent);
  transform: translate(-13px, calc(-50% + 1.5px));
}

.evenement { display: contents; }

.tige {
  justify-self: center;
  width: 3px;
  background: var(--accent);
  opacity: 0.45;
  z-index: 0;
  position: relative;
}

.tige::after {
  content: "";
  position: absolute;
  bottom: 0; left: 50%;
  transform: translate(-50%, 50%);
  width: 14px; height: 14px;
  border-radius: 50%;
  background: var(--accent);
  border: 3px solid var(--fond);
  box-sizing: content-box;
}

.carte {
  align-self: end;
  z-index: 1;
  background: var(--carte);
  border-radius: 12px;
  padding: 0.85rem 1rem;
  margin: 0.5rem 0.35rem;
  box-shadow: 0 2px 6px rgba(22, 35, 47, 0.08);
  border: 1px solid rgba(22, 35, 47, 0.06);
  transition: transform 0.2s ease, box-shadow 0.2s ease;
}
.carte:hover {
  transform: translateY(-3px);
  box-shadow: 0 8px 20px rgba(36, 71, 245, 0.18);
}
.carte h2 { font-family: "Space Grotesk", sans-serif; font-size: 0.95rem; font-weight: 700; }
.carte p { font-size: 0.8rem; color: var(--sourdine); margin-top: 0.2rem; }
.annee-carte { font-family: "IBM Plex Mono", monospace; font-size: 0.7rem; color: var(--accent); }

.couloir-1 .carte { grid-row: 3; }  .couloir-1 .tige { grid-row: 3 / 4; }
.couloir-2 .carte { grid-row: 2; }  .couloir-2 .tige { grid-row: 2 / 4; }
.couloir-3 .carte { grid-row: 1; }  .couloir-3 .tige { grid-row: 1 / 4; }

.annee {
  grid-row: 4;
  justify-self: center;
  align-self: end;
  font-family: "IBM Plex Mono", monospace;
  font-size: 0.75rem;
  color: var(--sourdine);
  position: relative;
  padding-bottom: 0.2rem;
}
.annee::before {
  content: "";
  position: absolute;
  top: -34px; left: 50%;
  width: 1px; height: 10px;
  background: var(--sourdine);
  opacity: 0.5;
}

@media (prefers-reduced-motion: reduce) {
  .carte { transition: none; }
}
`;
