import React from "react";
import { RiExchangeDollarLine } from "react-icons/ri";
import "./Secondiv.css";
import { BsArrowUpShort } from "react-icons/bs";
import { BsArrowDownShort } from "react-icons/bs";
import { RiFileList2Line } from "react-icons/ri";
import { LuWallet } from "react-icons/lu";
import { RiShoppingBasketLine } from "react-icons/ri";

export default function Secondiv() {
  return (
    <div className="secondDiv">
      <div className="infodivs">
        <div className="infoIconsdiv">
          <RiExchangeDollarLine className="firstIcon" />
        </div>
        <div className="detailsDiv">
          <h4 className="firstHeading">Earning</h4>
          <h2 className="price">$198k</h2>
          <div className="ArrowLine">
            <div className="Arrowdiv">
              <BsArrowUpShort className="Arrow" />
              <h4>37.8%</h4>
            </div>
            <h4 className="downHeading">this month</h4>
          </div>
        </div>
      </div>
      <div className="infodivs">
        <div className="orderIconDiv">
          <RiFileList2Line className="SecondIcon" />
        </div>
        <div className="detailsDiv">
          <h4 className="firstHeading">Orders</h4>
          <h2 className="price">$2.4k</h2>
          <div className="ArrowLine">
            <div className="Orderarrowdiv">
              <BsArrowDownShort className="Arrow" />
              <h4>2%</h4>
            </div>
            <h4 className="downHeading">this month</h4>
          </div>
        </div>
      </div>
      <div className="infodivs">
        <div className="balanceIconDiv">
          <LuWallet className="ThirdIcon" />
        </div>
        <div className="detailsDiv">
          <h4 className="firstHeading">Balance</h4>
          <h2 className="price">$2.4k</h2>
          <div className="ArrowLine">
            <div className="balncarrowdiv">
              <BsArrowDownShort className="Arrow" />
              <h4>2% </h4>
            </div>
            <h4 className="downHeading">this month</h4>
          </div>
        </div>
      </div>
      <div className="infodivs">
        <div className="saleIconDiv ">
          <RiShoppingBasketLine className="FourthIcon" />
        </div>
        <div className="detailsDiv">
          <h4 className="firstHeading">Total Sales</h4>
          <h2 className="price">$89K</h2>
          <div className="ArrowLine">
            <div className="Salesarrowdiv">
              <BsArrowUpShort className="Arrow" />
              <h4>37.8%</h4>
            </div>
            <h4 className="downHeading">this month</h4>
          </div>
        </div>
      </div>
    </div>
  );
}
