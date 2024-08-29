import { IoLaptopOutline } from "react-icons/io5";
import { LiaGit } from "react-icons/lia";
import { LuWallet } from "react-icons/lu";
import { RiHomeSmile2Line } from "react-icons/ri";

export default function ProductTop() {
  const items = [
    {
      name: "In-Store Sales",
      amount: 5345,
      order: "5k orders",
      icon: <RiHomeSmile2Line />,
    },
    {
      name: "Website sales",
      amount: 5345,
      order: "5k orders",
      icon: <IoLaptopOutline />,
    },
    {
      name: "Discount",
      amount: 5345,
      order: "5k orders",
      icon: <LiaGit />,
    },
    {
      name: "Affilate",
      amount: 5345,
      order: "5k orders",
      icon: <LuWallet />,
    },
    {
      name: "Vendor",
      amount: 5345,
      order: "5k orders",
      icon: <LuWallet />,
    },
  ];
  return (
    <ul className="product-top">
      {items?.map((item, i) => (
        <li key={i} className="product-top-item">
          <div className="product-top-item-left">
            <p>{item?.name}</p>
            <strong>${item?.amount}</strong>
            <span>{item.order}</span>
          </div>
          <div className="product-top-item-right">
            <div className="icon">{item?.icon}</div>
          </div>
        </li>
      ))}
    </ul>
  );
}
