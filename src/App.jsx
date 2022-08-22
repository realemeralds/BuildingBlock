import "bootstrap/dist/css/bootstrap.min.css";
import "./styles/App.scss";
import Navbar from "./components/Navbar";
import Splash from "./components/Splash";
import LinksToLevels from "./components/LinksToLevels";

export default function App() {
  return (
    <div className="main">
      <Navbar />
      <Splash />
      <LinksToLevels />
    </div>
  );
}
