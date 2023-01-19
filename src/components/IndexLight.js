import React from "react";

const IndexLight = ({ lcolor, activeTime }) => (
  <div
    className="indexLight"
    style={{ backgroundColor: lcolor, opacity: activeTime ? 1 : 0.4 }}
  />
);

export default IndexLight;