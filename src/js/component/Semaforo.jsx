import React, { useState } from "react";

const Semaforo = () => {
  const black = ["⚫️  ⚫️  ⚫️"];
  const red = ["🔴  ⚫️  ⚫️"];
  const yellow = ["⚫️  🟡  ⚫️"];
  const green = ["⚫️  ⚫️  🟢"];

  const [semaforo, setSemaforo] = useState(black);



  const afterYellow = () => {
    setSemaforo(green);
    setInterval(afterStart, 2000);
  };

  const afterRed = () => {
    setSemaforo(yellow);
    setInterval(afterYellow, 2000);
  };
  const afterStart = () => {
    setSemaforo(red);
    setInterval(afterRed, 2000);
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
                afterStart();
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
