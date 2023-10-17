import React from "react";
import { RiSettingsLine } from "react-icons/ri";
import "./Secondiv.css";

export default function Secondiv() {
  return (
    <div className="secondDiv">
      <div className="infodivs">
        <div className="infoIconsdiv">
          <RiSettingsLine className="firstIcon" />
        </div>
        <div className="detailsDiv">
          <h4>Earning</h4>
          <h2>$198K</h2>
          <h4>37.8% this months</h4>
        </div>
      </div>
      <div className="infodivs">
        <div className="infoIcon">
          <RiSettingsLine />
        </div>
        <div>
          <h4>Earning</h4>
          <h2>$198K</h2>
          <h4>37.8% this months</h4>
        </div>
      </div>
      <div className="infodivs">
        <div className="infoIcons">
          <RiSettingsLine />
        </div>
        <div>
          <h4>Earning</h4>
          <h2>$198K</h2>
          <h4>37.8% this months</h4>
        </div>
      </div>
      <div className="infodivs">
        <div className="infoIcons">
          <RiSettingsLine />
        </div>
        <div>
          <h4>Earning</h4>
          <h2>$198K</h2>
          <h4>37.8% this months</h4>
        </div>
      </div>
    </div>
  );
}
