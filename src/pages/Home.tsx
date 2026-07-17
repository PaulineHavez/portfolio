import { useEffect, useState } from "react";
import { NavLink } from "react-router-dom";
import "./Home.css";

const adjectives = ["curieuse", "investie", "engagée"];

export default function Home() {
  const [adjectiveIndex, setAdjectiveIndex] = useState(0);

  useEffect(() => {
    const interval = setInterval(() => {
      setAdjectiveIndex((current) => (current + 1) % adjectives.length);
    }, 3000);
    return () => clearInterval(interval);
  }, []);

  return (
    <div className="homeContainer">
      <div className="textContent">
        <p className="text-lg text-gray-500 mb-3">Salut, je suis Pauline 👋</p>
        <h1 className="text-5xl md:text-4xl font-bold text-[#20123a] leading-tight">
          Une développeuse{" "}
          <span className="text-[#7d02a0]">{adjectives[adjectiveIndex]}</span>.
        </h1>
        <p className="text-gray-600 leading-relaxed mt-6 max-w-xl">
          J'aime développer des applications de A à Z : de la définition du
          produit à son développement, puis déploiement.
        </p>
        <div className="flex gap-4 mt-8">
          <NavLink
            to="/a-propos/parcours"
            className="px-6 py-3 bg-[#7d02a0] text-white rounded-lg font-medium hover:bg-[#6d28d9] transition"
          >
            Mon parcours
          </NavLink>
          <NavLink
            to="/competences/general"
            className="px-6 py-3 border border-gray-300 rounded-lg font-medium text-gray-700 hover:border-[#7d02a0] hover:text-[#7d02a0] transition"
          >
            Mes compétences
          </NavLink>
        </div>
      </div>
      <div className="grid">
        <div className="bureau-wrap">
          <div className="scene">
            <div className="laptop">
              <div className="ecran">
                <div
                  className="ligne"
                  style={{ width: "55%", background: "#7FB3F0" }}
                ></div>
                <div
                  className="ligne"
                  style={{
                    width: "80%",
                    background: "#5C7089",
                    marginLeft: 14,
                  }}
                ></div>
                <div
                  className="ligne"
                  style={{
                    width: "65%",
                    background: "#E8A13D",
                    marginLeft: 14,
                  }}
                ></div>
                <div
                  className="ligne"
                  style={{
                    width: "72%",
                    background: "#5C7089",
                    marginLeft: 14,
                  }}
                ></div>
                <div
                  className="ligne"
                  style={{ width: "38%", background: "#6FCF97" }}
                ></div>
              </div>
              <div className="socle"></div>
            </div>

            <div className="livres">
              <div className="tasse">
                <span className="vapeur"></span>
              </div>
              <div
                className="livre"
                style={{ bottom: 0, width: 120, background: "#B34A3F" }}
              ></div>
              <div
                className="livre"
                style={{
                  bottom: 22,
                  width: 108,
                  left: 8,
                  background: "#253068",
                }}
              ></div>
              <div
                className="livre"
                style={{
                  bottom: 44,
                  width: 112,
                  left: 2,
                  background: "#E8A13D",
                }}
              ></div>
              {/* <div className="debout"></div> */}
            </div>
          </div>
          <div className="sol"></div>
        </div>
      </div>
    </div>
  );
}
