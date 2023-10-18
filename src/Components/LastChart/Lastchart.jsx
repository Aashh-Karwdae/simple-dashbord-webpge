import React from "react";
import Piechart from "../PieChart/Piechart";
import "./Lastchart.css";

export default function Lastchart() {
  return (
    <div className="piechart">
      <h3 className="pieheading">Customers</h3>
      <h4 className="pieHeadtow">Customers that buy Products</h4>
      <div className="PieDiv">
        <Piechart />
      </div>
    </div>
  );
}
