import SubRoot from "../components/basic/SubRoot";
import Footer from "../components/footer/Footer";
import Sidebar from "../components/header/Sidebar";
import Topbar from "../components/header/Topbar";

export default function Dashboard() {
  return (
    <div className="main">
      <Sidebar />
      <div className="main-wrp">
        <Topbar />
        <div className="main-body">
          <SubRoot />
        </div>
        <Footer />
      </div>
    </div>
  );
}
