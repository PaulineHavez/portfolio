import { useEffect, useRef, useState } from "react";
import { NavLink } from "react-router-dom";

const technicalSkills = [
  { label: "Analyse du besoin", to: "/competences/analyse-du-besoin" },
  {
    label: "Concevoir une solution",
    to: "/competences/concevoir-une-solution",
  },
  {
    label: "Développement d'une solution",
    to: "/competences/developpement-d-une-solution",
  },
  {
    label: "Étude d'une documentation",
    to: "/competences/etude-d-une-documentation",
  },
  {
    label: "Maintenance et évolution",
    to: "/competences/maintenance-et-evolution",
  },
  { label: "Raisonnement logique", to: "/competences/raisonnement-logique" },
];

const humanSkills = [
  {
    label: "Capacité de remise en question",
    to: "/competences/capacite-remise-en-question",
  },
  { label: "Rigueur", to: "/competences/rigueur" },
  { label: "Esprit collaboratif", to: "/competences/esprit-collaboratif" },
  {
    label: "Sens du dialogue et de la pédagogie",
    to: "/competences/sens-du-dialogue-et-pedagogie",
  },
];

const aboutLinks = [
  { label: "Présentation", to: "/a-propos/presentation" },
  { label: "Parcours", to: "/a-propos/parcours" },
];

const projects = [
  { label: "Shopwise", to: "/projets/shopwise" },
  { label: "Eco City Guide", to: "/projets/eco-city-guide" },
  { label: "Hackathon IA", to: "/projets/hackathon-ia" },
  { label: "Sitemap Nuxt & Strapi", to: "/projets/sitemap-nuxt-strapi" },
  { label: "Migration Vuetify 2 → 3", to: "/projets/migration-vuetify" },
];

function NavBar() {
  const [competencesOpen, setCompetencesOpen] = useState(false);
  const competencesRef = useRef<HTMLLIElement>(null);
  const [aboutOpen, setAboutOpen] = useState(false);
  const aboutRef = useRef<HTMLLIElement>(null);
  const [projectsOpen, setProjectsOpen] = useState(false);
  const projectsRef = useRef<HTMLLIElement>(null);

  useEffect(() => {
    if (!competencesOpen) return;

    function handleClickOutside(event: MouseEvent) {
      if (
        competencesRef.current &&
        !competencesRef.current.contains(event.target as Node)
      ) {
        setCompetencesOpen(false);
      }
    }

    document.addEventListener("mousedown", handleClickOutside);
    return () => document.removeEventListener("mousedown", handleClickOutside);
  }, [competencesOpen]);

  useEffect(() => {
    if (!aboutOpen) return;

    function handleClickOutside(event: MouseEvent) {
      if (
        aboutRef.current &&
        !aboutRef.current.contains(event.target as Node)
      ) {
        setAboutOpen(false);
      }
    }

    document.addEventListener("mousedown", handleClickOutside);
    return () => document.removeEventListener("mousedown", handleClickOutside);
  }, [aboutOpen]);

  useEffect(() => {
    if (!projectsOpen) return;

    function handleClickOutside(event: MouseEvent) {
      if (
        projectsRef.current &&
        !projectsRef.current.contains(event.target as Node)
      ) {
        setProjectsOpen(false);
      }
    }

    document.addEventListener("mousedown", handleClickOutside);
    return () => document.removeEventListener("mousedown", handleClickOutside);
  }, [projectsOpen]);

  return (
    <nav className="bg-white sticky w-full z-20 top-0 inset-s-0 border-default">
      <div className="flex justify-between p-8">
        <NavLink
          to="/"
          className="flex items-center space-x-3 rtl:space-x-reverse"
        >
          <img
            src={`${import.meta.env.BASE_URL}profilePicture.png`}
            className="h-10 w-10 rounded-full object-cover  "
            alt="Pauline Havez"
          />
          <span className="self-center text-xl text-heading font-semibold whitespace-nowrap text-[#7d02a0]">
            Pauline Havez
          </span>
        </NavLink>
        <button
          data-collapse-toggle="navbar-dropdown"
          type="button"
          className="inline-flex items-center p-2 w-10 h-10 justify-center text-sm text-body rounded-base md:hidden hover:bg-neutral-secondary-soft hover:text-heading focus:outline-none focus:ring-2 focus:ring-neutral-tertiary"
          aria-controls="navbar-dropdown"
          aria-expanded="false"
        >
          <span className="sr-only">Open main menu</span>
          <svg
            className="w-6 h-6"
            aria-hidden="true"
            xmlns="http://www.w3.org/2000/svg"
            width="24"
            height="24"
            fill="none"
            viewBox="0 0 24 24"
          >
            <path
              stroke="currentColor"
              stroke-linecap="round"
              stroke-width="2"
              d="M5 7h14M5 12h14M5 17h14"
            />
          </svg>
        </button>
        <div className="hidden w-full md:block md:w-auto" id="navbar-dropdown">
          <ul className="flex flex-col font-medium p-4 md:p-0 mt-4 border border-default rounded-base bg-neutral-secondary-soft md:space-x-8 rtl:space-x-reverse md:flex-row md:mt-0 md:border-0 md:bg-neutral-primary">
            <li className="relative" ref={aboutRef}>
              <button
                id="dropdownAboutButton"
                type="button"
                onClick={() => setAboutOpen((open) => !open)}
                aria-haspopup="true"
                aria-expanded={aboutOpen}
                aria-controls="dropdownAbout"
                className="flex items-center justify-between w-full py-2 px-3 rounded font-medium text-heading md:w-auto hover:bg-neutral-tertiary md:hover:bg-transparent md:border-0 md:hover:text-[#7d02a0] md:p-0"
              >
                À propos
                <svg
                  className="w-4 h-4 ms-1.5"
                  aria-hidden="true"
                  xmlns="http://www.w3.org/2000/svg"
                  width="24"
                  height="24"
                  fill="none"
                  viewBox="0 0 24 24"
                >
                  <path
                    stroke="currentColor"
                    stroke-linecap="round"
                    stroke-linejoin="round"
                    stroke-width="2"
                    d="m19 9-7 7-7-7"
                  />
                </svg>
              </button>
              <div
                id="dropdownAbout"
                className={`${aboutOpen ? "" : "hidden"} absolute right-0 z-10 mt-2 bg-white border border-mist-50 rounded-3xl shadow-lg w-56`}
              >
                <ul
                  className="p-2 text-sm text-body font-medium"
                  aria-labelledby="dropdownAboutButton"
                >
                  {aboutLinks.map((link) => (
                    <li key={link.to}>
                      <NavLink
                        to={link.to}
                        onClick={() => setAboutOpen(false)}
                        className="block w-full p-2 hover:bg-neutral-tertiary-medium hover:text-heading rounded"
                      >
                        {link.label}
                      </NavLink>
                    </li>
                  ))}
                </ul>
              </div>
            </li>
            <li className="relative" ref={competencesRef}>
              <button
                id="dropdownCompetencesButton"
                type="button"
                onClick={() => setCompetencesOpen((open) => !open)}
                aria-haspopup="true"
                aria-expanded={competencesOpen}
                aria-controls="dropdownCompetences"
                className="flex items-center justify-between w-full py-2 px-3 rounded font-medium text-heading md:w-auto hover:bg-neutral-tertiary md:hover:bg-transparent md:border-0 md:hover:text-[#7d02a0] md:p-0"
              >
                Compétences
                <svg
                  className="w-4 h-4 ms-1.5"
                  aria-hidden="true"
                  xmlns="http://www.w3.org/2000/svg"
                  width="24"
                  height="24"
                  fill="none"
                  viewBox="0 0 24 24"
                >
                  <path
                    stroke="currentColor"
                    stroke-linecap="round"
                    stroke-linejoin="round"
                    stroke-width="2"
                    d="m19 9-7 7-7-7"
                  />
                </svg>
              </button>
              <div
                id="dropdownCompetences"
                className={`${competencesOpen ? "" : "hidden"} absolute right-0 z-10 mt-2 bg-white border border-mist-50 rounded-3xl shadow-lg w-72`}
              >
                <div
                  className="p-2 text-sm text-body font-medium"
                  aria-labelledby="dropdownCompetencesButton"
                >
                  <NavLink to="/competences/general">
                    <p className="px-2 pt-1 pb-1 text-xs font-semibold uppercase tracking-wide text-body/70">
                      Vue générale
                    </p>
                  </NavLink>
                  <p className="px-2 pt-1 pb-1 text-xs font-semibold uppercase tracking-wide text-body/70">
                    Techniques
                  </p>
                  <ul>
                    {technicalSkills.map((skill) => (
                      <li key={skill.to}>
                        <NavLink
                          to={skill.to}
                          onClick={() => setCompetencesOpen(false)}
                          className="block w-full p-2 hover:bg-neutral-tertiary-medium hover:text-heading rounded"
                        >
                          {skill.label}
                        </NavLink>
                      </li>
                    ))}
                  </ul>
                  <p className="px-2 pt-3 pb-1 text-xs font-semibold uppercase tracking-wide text-body/70">
                    Humaines
                  </p>
                  <ul>
                    {humanSkills.map((skill) => (
                      <li key={skill.to}>
                        <NavLink
                          to={skill.to}
                          onClick={() => setCompetencesOpen(false)}
                          className="block w-full p-2 hover:bg-neutral-tertiary-medium hover:text-heading rounded"
                        >
                          {skill.label}
                        </NavLink>
                      </li>
                    ))}
                  </ul>
                </div>
              </div>
            </li>
            <li className="relative" ref={projectsRef}>
              <button
                id="dropdownProjectsButton"
                type="button"
                onClick={() => setProjectsOpen((open) => !open)}
                aria-haspopup="true"
                aria-expanded={projectsOpen}
                aria-controls="dropdownProjects"
                className="flex items-center justify-between w-full py-2 px-3 rounded font-medium text-heading md:w-auto hover:bg-neutral-tertiary md:hover:bg-transparent md:border-0 md:hover:text-[#7d02a0] md:p-0"
              >
                Projets
                <svg
                  className="w-4 h-4 ms-1.5"
                  aria-hidden="true"
                  xmlns="http://www.w3.org/2000/svg"
                  width="24"
                  height="24"
                  fill="none"
                  viewBox="0 0 24 24"
                >
                  <path
                    stroke="currentColor"
                    stroke-linecap="round"
                    stroke-linejoin="round"
                    stroke-width="2"
                    d="m19 9-7 7-7-7"
                  />
                </svg>
              </button>
              <div
                id="dropdownProjects"
                className={`${projectsOpen ? "" : "hidden"} absolute right-0 z-10 mt-2 bg-white border border-mist-50 rounded-3xl shadow-lg w-64`}
              >
                <ul
                  className="p-2 text-sm text-body font-medium"
                  aria-labelledby="dropdownProjectsButton"
                >
                  {projects.map((project) => (
                    <li key={project.to}>
                      <NavLink
                        to={project.to}
                        onClick={() => setProjectsOpen(false)}
                        className="block w-full p-2 hover:bg-neutral-tertiary-medium hover:text-heading rounded"
                      >
                        {project.label}
                      </NavLink>
                    </li>
                  ))}
                </ul>
              </div>
            </li>
          </ul>
        </div>
      </div>
    </nav>
  );
}

export default NavBar;
