import { useEffect, useRef, useState } from "react";
import { IoNotificationsOutline } from "react-icons/io5";
import { Link } from "react-router-dom";

export default function Notification() {
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

  const notificaionItems = [
    {
      title: "Congratulation Flora! 🎉",
      text: "Won the monthly best seller gold badge",
      time: "Today",
      img: "/images/profile.png",
      url: "/",
    },
    {
      title: "New user registered.",
      text: "Won the monthly best seller gold badge",
      time: "Today",
      img: "/images/profile.png",
      url: "/",
    },
    {
      title: "New user registered.",
      text: "Won the monthly best seller gold badge",
      time: "Today",
      img: "/images/profile.png",
      url: "/",
    },
    {
      title: "New user registered.",
      text: "Won the monthly best seller gold badge",
      time: "Today",
      img: "/images/profile.png",
      url: "/",
    },
    {
      title: "New user registered.",
      text: "Won the monthly best seller gold badge",
      time: "Today",
      img: "/images/profile.png",
      url: "/",
    },
    {
      title: "New user registered.",
      text: "Won the monthly best seller gold badge",
      time: "Today",
      img: "/images/profile.png",
      url: "/",
    },
  ];
  return (
    <div ref={profile} className="notification">
      <button
        className="notification-btn"
        onClick={() => {
          setActiveDropdown(!activeDropdown);
        }}
      >
        <IoNotificationsOutline />
        <div className="active-sine"></div>
      </button>
      <div className={`dropdown ${(activeDropdown && "show") || ""}`}>
        <div className="notification-topbar">
          <strong>Notifications</strong>
          <div className="count"> 8 New</div>
        </div>
        <ul className="notification-body">
          {notificaionItems?.map((item, i) => (
            <li key={i}>
              <Link to={item?.url}>
                <div className="img">
                  <img src={item?.img} alt="" />
                </div>
                <div className="content">
                  <h4>{item?.title}</h4>
                  <p>{item?.text}</p>
                  <span>{item?.time}</span>
                </div>
              </Link>
            </li>
          ))}
        </ul>
        <div className="notification-bottom">
          <Link to="/">View All Notifications</Link>
        </div>
      </div>
    </div>
  );
}
