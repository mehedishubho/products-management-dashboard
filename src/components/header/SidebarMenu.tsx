import { AiOutlineProduct } from "react-icons/ai";
import { FaRegUser } from "react-icons/fa";
import { TfiDashboard } from "react-icons/tfi";
import { Link } from "react-router-dom";

export default function SidebarMenu() {
  const menus = [
    {
      name: "Dashboard",
      icon: <TfiDashboard />,
      url: "/",
    },
    {
      name: "Porducts",
      icon: <AiOutlineProduct />,
      url: "/",
    },
    {
      name: "Users",
      icon: <FaRegUser />,
      url: "/",
    },
  ];
  return (
    <div className="sidebar-menu">
      <div className="sidebar-menu-title">
        <span>APPS & PAGES</span>
      </div>
      <ul className="sidebar-menu-wrp">
        {menus?.map((item, i) => (
          <li key={i} className="">
            <Link to={item?.url}>
              {" "}
              <div className="icon">{item?.icon}</div>
              <span>{item?.name}</span>
            </Link>
          </li>
        ))}
      </ul>
    </div>
  );
}
