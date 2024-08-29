import { Link } from "react-router-dom";

export default function Footer() {
  const footermenu = [
    {
      name: "License",
      url: "/",
    },
    {
      name: "More",
      url: "/",
    },
    {
      name: "Terms & Conditions",
      url: "/",
    },
    {
      name: "Support",
      url: "/",
    },
  ];
  return (
    <div className="footer">
      <div className="footer-left">
        <p>
          {" "}
          &copy; {new Date().getFullYear()}. Make with by{" "}
          <a href="https://devsroom.com/">Devsroom</a>
        </p>
      </div>
      <ul className="footer-menu">
        {footermenu?.map((item, i) => (
          <li key={i}>
            <Link to={item?.url}>{item?.name}</Link>
          </li>
        ))}
      </ul>
    </div>
  );
}
