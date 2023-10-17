import Recharts from "../Recharts/Rechart";
import "./Overview.css";

export default function Overview() {
  return (
    <div className="overview">
      <h3>Overview</h3>
      <div className="select">
        <select placeholder="Quarterly">
          <option className="Option">Quarterly</option>
          <option className="Option">Weekly</option>
          <option className="Option">Monthly</option>
          <option className="Option">Yearly</option>
        </select>
      </div>
      <Recharts />
    </div>
  );
}
