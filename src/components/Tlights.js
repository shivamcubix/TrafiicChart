
// import { useTrafficLight } from "react-hooks-helper";
import React, { useState, useEffect } from "react";
import IndexLight from "./IndexLight";


const lightTime = [3000, 2000, 1000];

const red="#ff0000"
const yellow="#FFEA00"
const green="#008000"


const Lights = ({ state }) => {
  const [sColor, setColor] = useState(state);

  useEffect(() => {
    const timer = setTimeout(() => {
        setColor((sColor + 1) % 3);
    }, lightTime[sColor]);
    return () => {
      clearTimeout(timer);
    };
  });

  return (
    <div className="trafficLight">
      <IndexLight lcolor={red} activeTime={sColor === 0} />
      <IndexLight lcolor={yellow} activeTime={sColor === 2} />
      <IndexLight lcolor={green} activeTime={sColor === 1} />
    </div>
  );
};

export default Lights;
