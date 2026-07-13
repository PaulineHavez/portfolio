import { createBrowserRouter } from "react-router-dom";
import Layout from "./components/Layout";
import About from "./pages/About"
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

export const router = createBrowserRouter([
  {
    path: "/",
    element: <Layout />,
    children: [
      {
        path : "/about",
        element : <About/>
      },
      {
        path: "/competences/analyse-du-besoin",
        element: <NeedAnalysis />
      },
      {
        path: "/competences/capacite-remise-en-question",
        element: <QuestionOneSelf />
      },
      {
        path: "/competences/concevoir-une-solution",
        element: <DesignSolution />
      },
      {
        path: "/competences/developpement-d-une-solution",
        element: <SolutionDevelopment />
      },
      {
        path: "/competences/esprit-collaboratif",
        element: <CollaborativeSpirit />
      },
      {
        path: "/competences/etude-d-une-documentation",
        element: <DocumentationStudy />
      },
      {
        path: "/competences/maintenance-et-evolution",
        element: <MaintenanceEvolution />
      },
      {
        path: "/competences/raisonnement-logique",
        element: <LogicalReasoning />
      },
      {
        path: "/competences/rigueur",
        element: <Rigor />
      },
      {
        path: "/competences/sens-du-dialogue-et-pedagogie",
        element: <DialogueAndPedagogy />
      }
    ],
  },
]);
