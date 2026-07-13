import { useState } from "react";
import { NavLink } from "react-router-dom";

const technicalSkills = [
  { label: "Analyse du besoin", to: "/competences/analyse-du-besoin" },
  { label: "Concevoir une solution", to: "/competences/concevoir-une-solution" },
  { label: "Développement d'une solution", to: "/competences/developpement-d-une-solution" },
  { label: "Étude d'une documentation", to: "/competences/etude-d-une-documentation" },
  { label: "Maintenance et évolution", to: "/competences/maintenance-et-evolution" },
  { label: "Raisonnement logique", to: "/competences/raisonnement-logique" },
];

const humanSkills = [
  { label: "Capacité de remise en question", to: "/competences/capacite-remise-en-question" },
  { label: "Rigueur", to: "/competences/rigueur" },
  { label: "Esprit collaboratif", to: "/competences/esprit-collaboratif" },
  { label: "Sens du dialogue et de la pédagogie", to: "/competences/sens-du-dialogue-et-pedagogie" },
];

function NavBar() {
  const [competencesOpen, setCompetencesOpen] = useState(false);

  return (
    <nav className="bg-white sticky w-full z-20 top-0 inset-s-0 border-default">
      <div className="flex justify-between p-8">
        <a href="#" className="flex items-center space-x-3 rtl:space-x-reverse">
          <img
            src="https://flowbite.com/docs/images/logo.svg"
            className="h-7"
            alt="Flowbite Logo"
          />
          <span className="self-center text-xl text-heading font-semibold whitespace-nowrap">
            Flowbite
          </span>
        </a>
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
            <li>
              <a
                href="#"
                className="block py-2 px-3 text-white bg-brand rounded md:bg-transparent md:text-fg-brand md:p-0"
                aria-current="page"
              >
                Home
              </a>
            </li>
            <NavLink to="/about">
              <li>
                <a
                  href="#"
                  className="block py-2 px-3 text-heading rounded hover:bg-neutral-tertiary md:hover:bg-transparent md:border-0 md:hover:text-fg-brand md:p-0 md:dark:hover:bg-transparent"
                >
                  À propos
                </a>
              </li>
            </NavLink>
            <li className="relative">
              <button
                id="dropdownCompetencesButton"
                type="button"
                onClick={() => setCompetencesOpen((open) => !open)}
                aria-haspopup="true"
                aria-expanded={competencesOpen}
                aria-controls="dropdownCompetences"
                className="flex items-center justify-between w-full py-2 px-3 rounded font-medium text-heading md:w-auto hover:bg-neutral-tertiary md:hover:bg-transparent md:border-0 md:hover:text-fg-brand md:p-0"
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
                className={`${competencesOpen ? "" : "hidden"} absolute z-10 mt-2 bg-neutral-primary-medium border border-default-medium rounded-base shadow-lg w-72`}
              >
                <div
                  className="p-2 text-sm text-body font-medium"
                  aria-labelledby="dropdownCompetencesButton"
                >
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
            <li>
              <button
                id="dropdownNvbarButton"
                data-dropdown-toggle="dropdownNavbar"
                className="flex items-center justify-between w-full py-2 px-3 rounded font-medium text-heading md:w-auto hover:bg-neutral-tertiary md:hover:bg-transparent md:border-0 md:hover:text-fg-brand md:p-0"
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
                id="dropdownNavbar"
                className="z-10 hidden bg-neutral-primary-medium border border-default-medium rounded-base shadow-lg w-44"
              >
                <ul
                  className="p-2 text-sm text-body font-medium"
                  aria-labelledby="dropdownNvbarButton"
                >
                  <li>
                    <a
                      href="#"
                      className="inline-flex items-center w-full p-2 hover:bg-neutral-tertiary-medium hover:text-heading rounded"
                    >
                      Dashboard
                    </a>
                  </li>
                  <li>
                    <a
                      href="#"
                      className="inline-flex items-center w-full p-2 hover:bg-neutral-tertiary-medium hover:text-heading rounded"
                    >
                      Settings
                    </a>
                  </li>
                  <li>
                    <a
                      href="#"
                      className="inline-flex items-center w-full p-2 hover:bg-neutral-tertiary-medium hover:text-heading rounded"
                    >
                      Earnings
                    </a>
                  </li>
                  <li>
                    <a
                      href="#"
                      className="inline-flex items-center w-full p-2 hover:bg-neutral-tertiary-medium hover:text-heading rounded"
                    >
                      Sign out
                    </a>
                  </li>
                </ul>
              </div>
            </li>
            <NavLink to="/contact">
              <li>
                <a
                  href="#"
                  className="block py-2 px-3 text-heading rounded hover:bg-neutral-tertiary md:hover:bg-transparent md:border-0 md:hover:text-fg-brand md:p-0 md:dark:hover:bg-transparent"
                >
                  Contact
                </a>
              </li>
            </NavLink>
          </ul>
        </div>
      </div>
    </nav>
  );
}

export default NavBar;
