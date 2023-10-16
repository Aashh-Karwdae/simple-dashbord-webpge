import "./Rightbar.css";
import { FiSearch } from "react-icons/fi";

export default function Rightbar() {
  return (
    <div className="rightbar">
      <div className="Header">
        <h2 className="sidebarTitle">Hello Ashwin 👋🏻,</h2>
        <div className="searchbar">
          <FiSearch className="searchIcon" />
          <input type="text" placeholder="Search" className="searchname" />
        </div>
      </div>
    </div>
  );
}
