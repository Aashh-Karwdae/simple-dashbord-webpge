import React from "react";
import "./Product.css";
import { FiSearch } from "react-icons/fi";

export default function Product() {
  return (
    <div className="MainCompo">
      <h3 className="productHeading">Product sell</h3>

      <div className="SideDiv">
        <div className="Productsearchbar">
          <FiSearch className="ProductSearchIcon" />
          <input
            type="text"
            placeholder="Search"
            className="Productsearchname"
          />
        </div>
        <div className="ProductSelectdiv">
          <select className="productSelect">
            <option>Last 30 days</option>
            <option>last 1 month</option>
            <option>last yaer</option>
            <option>Last week</option>
          </select>
        </div>
      </div>
    </div>
  );
}
