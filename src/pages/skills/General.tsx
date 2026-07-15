import { Radar } from "react-chartjs-2";
import "chart.js/auto";

const data = {
  labels: [
    "Analyse du besoin",
    "Concevoir une solution",
    "Développement d'une solution",
    "Étude d'une documentation",
    "Maintenance et évolution",
    "Raisonnement logique", // techniques
    "Capacité de remise en question",
    "Rigueur",
    "Esprit collaboratif",
    "Sens du dialogue et de la pédagogie", // humaines
  ],
  datasets: [
    {
      label: "Compétences techniques",
      data: [3, 3, 3, 3, 3, 4, 0, 0, 0, 0],
      fill: true,
      backgroundColor: "rgba(42, 120, 214, 0.15)",
      borderColor: "rgb(42, 120, 214)",
    },
    {
      label: "Compétences humaines",
      data: [0, 0, 0, 0, 0, 0, 5, 4, 4, 4],
      fill: true,
      backgroundColor: "rgba(27, 175, 122, 0.15)",
      borderColor: "rgb(27, 175, 122)",
    },
  ],
};

export default function GeneralSkills() {
  return (
    <div className="generalContainer">
      <style>{styles}</style>
      <h1>Vue comparative de mes compétences</h1>
      <Radar className="radarChart" data={data} />
    </div>
  );
}

const styles = `
h1 {
  font-size: 24px;
  margin-bottom: 14px;
  font-weight: 500;
}

.radarChart {
  margin-left: 40px;
  margin-right: 40px;
 
}

.generalContainer{
  display:flex;
  flex-direction: column;
  align-items: center;
  justify-content: center;
}
`;
