import "./Home.css";

export default function Home() {
  return (
    <div className="homeContainer">
      <p className="myName">Salut, je suis Pauline.</p>
      <div className="grid place-items-center">
        <p className="shortDescription">Une développeuse curieuse.</p>
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
            <div className="tasse">
              <span className="vapeur"></span>
            </div>

            <div className="livres">
              <div
                className="livre"
                style={{ bottom: 0, width: 160, background: "#B34A3F" }}
              ></div>
              <div
                className="livre"
                style={{
                  bottom: 28,
                  width: 145,
                  left: 8,
                  background: "#2447F5",
                }}
              ></div>
              <div
                className="livre"
                style={{
                  bottom: 56,
                  width: 150,
                  left: 2,
                  background: "#E8A13D",
                }}
              ></div>
              <div className="debout"></div>
            </div>
          </div>
          <div className="sol"></div>
        </div>
      </div>
    </div>
  );
}
