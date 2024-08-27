import { useEffect, useRef, useState } from "react";
import { FaQuestion } from "react-icons/fa";
import { GiPriceTag } from "react-icons/gi";
import { ImCoinPound } from "react-icons/im";
import { IoIosLogOut } from "react-icons/io";
import { IoSettingsOutline } from "react-icons/io5";
import { LuUser } from "react-icons/lu";
import { Link } from "react-router-dom";

export default function Profile() {
  const [activeDropdown, setActiveDropdown] = useState<boolean>(false);
  const profile = useRef<HTMLDivElement>(null);

  const handleClickOutside = (event: MouseEvent) => {
    if (profile.current && !profile.current.contains(event.target as Node)) {
      setActiveDropdown(false);
    }
  };

  useEffect(() => {
    // Add event listener when component mounts
    document.addEventListener("mousedown", handleClickOutside);

    // Remove event listener when component unmounts
    return () => {
      document.removeEventListener("mousedown", handleClickOutside);
    };
  }, []);

  const profileMenus = [
    {
      name: "Profile",
      icon: <LuUser />,
      url: "/",
    },
    {
      name: "Settings",
      icon: <IoSettingsOutline />,
      url: "/",
    },
    {
      name: "Billing",
      icon: <ImCoinPound />,
      url: "/",
    },
    {
      name: "Priceing",
      icon: <GiPriceTag />,
      url: "/",
    },
    {
      name: "FAQ",
      icon: <FaQuestion />,
      url: "/",
    },
  ];
  return (
    <div ref={profile} className="profile">
      <button
        className="profile-btn"
        onClick={() => {
          setActiveDropdown(!activeDropdown);
        }}
      >
        <img src="/images/profile.png" alt="" />
        <div className="active-sine"></div>
      </button>
      <div className={`dropdown ${(activeDropdown && "show") || ""}`}>
        <div className="profile-topbar">
          <div className="img">
            <img src="/images/profile.png" alt="" />
          </div>
          <div className="content">
            <strong>John doe</strong>
            <span>Admin</span>
          </div>
        </div>
        <ul>
          {profileMenus?.map((item, i) => (
            <li key={i}>
              <Link to={item?.url}>
                <div className="icon">{item?.icon}</div>{" "}
                <span>{item?.name}</span>
              </Link>
            </li>
          ))}
        </ul>
        <button className="logout-btn">
          <span>Log out</span> <IoIosLogOut />
        </button>
      </div>
    </div>
  );
}
