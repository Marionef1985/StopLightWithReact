import React, { useState } from "react";

const Semaforo = () => {
  const black = ["⚫️  ⚫️  ⚫️"];
  const red = ["🔴  ⚫️  ⚫️"];
  const yellow = ["⚫️  🟡  ⚫️"];
  const green = ["⚫️  ⚫️  🟢"];
  const purple = ["⚫️  ⚫️  🟣"];

  const [semaforo, setSemaforo] = useState(black);

  const getBlack = () => {
    setSemaforo(black)
  }

  const GetPurple = () => {
    setSemaforo(purple);
    setTimeout(getBlack, 4000);
  }

  const GetGreen = () => {
    setSemaforo(green);
    setTimeout(getBlack, 2000);
  };

  const GetYellow = () => {
    setSemaforo(yellow);
    setTimeout(GetGreen, 2000);
  };
  const GetRed = () => {
    setSemaforo(red);
    setTimeout(GetYellow, 2000);
  };
  return (
    <>
      <div className="conatiner-fluid">
        <div className="conatiner">
          <div className="row">
            <div className="col-12">
              <div className="semaforo">
                <span>{semaforo}</span>
              </div>
              <div className="col-12">
                <svg className="rectangle position-absolute"></svg>
                <svg className="stick position-absolute"></svg>
              </div>
            </div>
          </div>
          <div className="col-12 ">
            <button
              type="button"
              class="btn btn-dark position-absolute primerBoton"
              onClick={() => {
                GetRed();
              }}
            >
              Play!
            </button>
            <div className="col-12 ">
              <button
                type="button"
                class="btn btn-dark position-absolute segundoBoton"
                onClick={() => {
                  GetPurple();
                }}
              >
                Extra!
              </button>
            </div>
          </div>
        </div>
      </div>
    </>
  );
};

export default Semaforo;
