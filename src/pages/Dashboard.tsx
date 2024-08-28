import Sidebar from "../components/header/Sidebar";
import Topbar from "../components/header/Topbar";

export default function Dashboard() {
  return (
    <div className="main">
      <Sidebar />
      <div className="main-wrp">
        <Topbar />
      </div>
    </div>
  );
}
