import React, { useState, useEffect } from "react";

const Semaforo = () => {
  const [color, setColor] = useState("naranja");

  useEffect(() => {
    console.log("useEffect usado");
  }, [color]);

  const handleClick = (newColor) => {
    console.log(`Botón ${newColor} clickeado`);
    setColor(newColor);
  };

  return (
    <div>
      <div className="trafficLight">
        <button
          className={`rojo ${color == "rojo" ? "on" : ""}`}
          onClick={() => handleClick("rojo")}
        ></button>
        <button
          className={`naranja ${color == "naranja" ? "on" : ""}`}
          onClick={() => handleClick("naranja")}
        ></button>
        <button
          className={`verde ${color == "verde" ? "on" : ""}`}
          onClick={() => handleClick("verde")}
        ></button>
      </div>
      <div className="palo"></div>
    </div>
  );
};

export default Semaforo;
