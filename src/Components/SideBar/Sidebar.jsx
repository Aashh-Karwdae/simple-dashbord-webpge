import "./Sidebar.css";
import { RiSettingsLine } from "react-icons/ri";
import { LuUserSquare } from "react-icons/lu";
import { MdOutlineHelpCenter } from "react-icons/md";
import { LuWallet } from "react-icons/lu";
import { LuBadgePercent } from "react-icons/lu";
import { MdAddShoppingCart } from "react-icons/md";
import { TbSquareKey } from "react-icons/tb";

export default function Sidebar() {
  return (
    <div className="sidebar">
      <div className="SidebarContent">
        <div className="firstitle">
          <RiSettingsLine className="TitleIcon" />
          <h2>Dashboard</h2>
        </div>
        <div className="sidelistblock">
          <div className="Sidelist">
            <TbSquareKey />
            <h4>Dashboard</h4>
          </div>
          <div className="Sidelist">
            <MdAddShoppingCart />
            <h4>Product</h4>
          </div>
          <div className="Sidelist">
            <LuUserSquare className="sideIcon" />
            <h4>Customers</h4>
          </div>
          <div className="Sidelist">
            <LuWallet />
            <h4>Income</h4>
          </div>
          <div className="Sidelist">
            <LuBadgePercent />
            <h4>Promote</h4>
          </div>
          <div className="Sidelist">
            <MdOutlineHelpCenter className="sideIcon" />
            <h4>Help</h4>
          </div>
        </div>
      </div>
    </div>
  );
}
