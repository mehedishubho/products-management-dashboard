import { IoSearchOutline } from "react-icons/io5";
import Notification from "./Notification";
import Profile from "./Profile";

export default function Topbar() {
  return (
    <div className="topbar">
      <form className="topbar-search">
        <div className="search-group">
          <input type="text" placeholder="Search" />
          <button type="submit">
            <IoSearchOutline />
          </button>
        </div>
      </form>
      <div className="topbar-icons">
        <Notification />
        <Profile />
      </div>
    </div>
  );
}
