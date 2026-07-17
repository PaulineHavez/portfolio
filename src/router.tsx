import { createBrowserRouter } from "react-router-dom";
import Layout from "./components/Layout";
import Presentation from "./pages/about/Presentation";
import Curriculum from "./pages/about/Curriculum";
import NeedAnalysis from "./pages/skills/NeedAnalysis";
import QuestionOneSelf from "./pages/skills/QuestionOneSelf";
import DesignSolution from "./pages/skills/DesignSolution";
import SolutionDevelopment from "./pages/skills/SolutionDevelopment";
import CollaborativeSpirit from "./pages/skills/CollaborativeSpirit";
import DocumentationStudy from "./pages/skills/DocumentationStudy";
import MaintenanceEvolution from "./pages/skills/MaintenanceEvolution";
import LogicalReasoning from "./pages/skills/LogicalReasoning";
import Rigor from "./pages/skills/Rigor";
import DialogueAndPedagogy from "./pages/skills/DialogueAndPedagogy";
import Home from "./pages/Home";
import GeneralSkills from "./pages/skills/General";
import Shopwise from "./pages/projects/Shopwise";
import EcoCityGuide from "./pages/projects/EcoCityGuide";
import HackathonIA from "./pages/projects/HackathonIA";
import SitemapNuxtStrapi from "./pages/projects/SitemapNuxtStrapi";
import MigrationVuetify from "./pages/projects/MigrationVuetify";

export const router = createBrowserRouter(
  [
    {
      path: "/",
      element: <Layout />,
      children: [
        {
          path: "/competences/general",
          element: <GeneralSkills />,
        },
        {
          path: "/",
          element: <Home />,
        },
        {
          path: "/a-propos/presentation",
          element: <Presentation />,
        },
        {
          path: "/a-propos/parcours",
          element: <Curriculum />,
        },
        {
          path: "/competences/analyse-du-besoin",
          element: <NeedAnalysis />,
        },
        {
          path: "/competences/capacite-remise-en-question",
          element: <QuestionOneSelf />,
        },
        {
          path: "/competences/concevoir-une-solution",
          element: <DesignSolution />,
        },
        {
          path: "/competences/developpement-d-une-solution",
          element: <SolutionDevelopment />,
        },
        {
          path: "/competences/esprit-collaboratif",
          element: <CollaborativeSpirit />,
        },
        {
          path: "/competences/etude-d-une-documentation",
          element: <DocumentationStudy />,
        },
        {
          path: "/competences/maintenance-et-evolution",
          element: <MaintenanceEvolution />,
        },
        {
          path: "/competences/raisonnement-logique",
          element: <LogicalReasoning />,
        },
        {
          path: "/competences/rigueur",
          element: <Rigor />,
        },
        {
          path: "/competences/sens-du-dialogue-et-pedagogie",
          element: <DialogueAndPedagogy />,
        },
        {
          path: "/projets/shopwise",
          element: <Shopwise />,
        },
        {
          path: "/projets/eco-city-guide",
          element: <EcoCityGuide />,
        },
        {
          path: "/projets/hackathon-ia",
          element: <HackathonIA />,
        },
        {
          path: "/projets/sitemap-nuxt-strapi",
          element: <SitemapNuxtStrapi />,
        },
        {
          path: "/projets/migration-vuetify",
          element: <MigrationVuetify />,
        },
      ],
    },
  ],
  {
    basename: "/portfolio/",
  }
);
