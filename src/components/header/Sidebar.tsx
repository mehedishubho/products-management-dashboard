import { FaRegDotCircle } from "react-icons/fa";
import SidebarMenu from "./SidebarMenu";

export default function Sidebar() {
  return (
    <div className="sidebar">
      <div className="sidebar-top">
        <div className="brand">
          <img src="/images/logo.png" alt="" />
        </div>
        <div className="icon">
          <FaRegDotCircle />
        </div>
      </div>
      <div className="sidebar-title">
        <h4>Dashboard</h4>
      </div>
      <SidebarMenu />
    </div>
  );
}
