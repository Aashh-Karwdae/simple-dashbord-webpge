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
            <TbSquareKey className="Icons" />
            <h4>Dashboard</h4>
          </div>
          <div className="Sidelist">
            <MdAddShoppingCart className="Icons" />
            <h4 className="SideHeadings">Product</h4>
          </div>
          <div className="Sidelist">
            <LuUserSquare className="Icons" />
            <h4 className="SideHeadings">Customers</h4>
          </div>
          <div className="Sidelist">
            <LuWallet className="Icons" />
            <h4 className="SideHeadings">Income</h4>
          </div>
          <div className="Sidelist">
            <LuBadgePercent className="Icons" />
            <h4 className="SideHeadings">Promote</h4>
          </div>
          <div className="Sidelist">
            <MdOutlineHelpCenter className="Icons" />
            <h4 className="SideHeadings">Help</h4>
          </div>
        </div>
      </div>
    </div>
  );
}
