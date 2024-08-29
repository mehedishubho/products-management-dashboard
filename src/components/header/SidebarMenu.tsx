import { AiOutlineProduct } from "react-icons/ai";
import { FaRegUser } from "react-icons/fa";
import { FaTags } from "react-icons/fa6";
import { GrCatalog } from "react-icons/gr";
import { SiOpenmediavault } from "react-icons/si";
import { TbBrandAbstract } from "react-icons/tb";
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
      url: "/product",
    },
    {
      name: "Catagoris",
      icon: <GrCatalog />,
      url: "/",
    },
    {
      name: "Brands",
      icon: <TbBrandAbstract />,
      url: "/",
    },
    {
      name: "Tags",
      icon: <FaTags />,
      url: "/",
    },
    {
      name: "Media",
      icon: <SiOpenmediavault />,
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
