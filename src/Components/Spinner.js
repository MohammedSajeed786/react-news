import React from "react";
import Rhombus from "./Rhombus.gif";
const Spinner = () => {
  return (
    <div className="text-center my-3">
      <img src={Rhombus} alt="loading" />
    </div>
  );
};
export default Spinner;
