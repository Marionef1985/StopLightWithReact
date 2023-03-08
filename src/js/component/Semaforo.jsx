import React, { useState } from "react";

const Semaforo = () => {
  const black = ["⚫️  ⚫️  ⚫️"];
  const red = ["🔴  ⚫️  ⚫️"];
  const yellow = ["⚫️  🟡  ⚫️"];
  const green = ["⚫️  ⚫️  🟢"];

  const [semaforo, setSemaforo] = useState(black);



  const GetGreen = () => {
    setSemaforo(green);
    setInterval(GetRed, 2000);
  };

  const GetYellow = () => {
    setSemaforo(yellow);
    setInterval(GetGreen, 2000);
  };
  const GetRed = () => {
    setSemaforo(red);
    setInterval(GetYellow, 2000);
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
          <div className="col-12">
            <button
              type="button"
              class="btn btn-dark position-absolute"
              onClick={() => {
                GetRed();
              }}
            >
              Play!
            </button>
          </div>
        </div>
      </div>
    </>
  );
};

export default Semaforo;
