import "./App.scss";
import Sidebar from "./components/header/Sidebar";
import Topbar from "./components/header/Topbar";

function App() {
  return (
    <div className="main">
      <Sidebar />
      <div className="main-wrp">
        <Topbar />
      </div>
    </div>
  );
}

export default App;
