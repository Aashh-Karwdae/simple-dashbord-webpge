import Lastchart from "../LastChart/Lastchart";
import Recharts from "../Recharts/Rechart";
import "./Overview.css";

export default function Overview() {
  return (
    <div className="overview">
      <div className="FirstCompo">
        <div className="topbar">
          <h3 className="Heading">Overview</h3>
          <div className="selectDiv">
            <select className="selectOption">
              <option className="option">Quaterly</option>
              <option className="option">Weekly</option>
              <option className="option">Monthly</option>
              <option className="option">Yearly</option>
            </select>
          </div>
        </div>
        <Recharts />
      </div>
      <Lastchart />
    </div>
  );
}
