import "bootstrap/dist/css/bootstrap.min.css";
import "./styles/App.scss";
import Navbar from "./components/Navbar";
import Splash from "./components/Splash";

import { Link } from "react-router-dom";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faCoffee } from "@fortawesome/free-solid-svg-icons";

export default function App() {
  return (
    <div className="main">
      <Navbar />
      <Splash />
      <div className="basicsDivider" />
      <div className="basicsPanel">
        <p className="basicsText">Start with the basics.</p>
        <div className="panelContainer">
          {Array(3)
            .fill(0)
            .map((element, index) => (
              <Link to={`/level${index + 1}`} className="panelLink">
                <div className="panel">
                  <FontAwesomeIcon
                    icon={faCoffee}
                    size="5x"
                    className="panelIcon"
                  />
                  <p className="panelHeader">Level {index + 1}</p>
                  <p className="panelDesc">
                    Lorem ipsum dolor sit amet consectetur adipisicing elit. Et
                    corporis esse, molestiae nihil quidem iusto!
                  </p>
                  <p className="panelLink">→ Browse Level {index + 1}</p>
                </div>
              </Link>
            ))}
        </div>
      </div>

      <div className="advancedPanel">
        <p className="advancedText">Go further with key concepts.</p>
        <div className="panelContainer">
          {Array(3)
            .fill(0)
            .map((element, index) => (
              <Link to={`/level${index + 4}`} className="panelLink">
                <div className="panel">
                  <FontAwesomeIcon
                    icon={faCoffee}
                    size="5x"
                    className="panelIcon"
                  />
                  <p className="panelHeader">Level {index + 4}</p>
                  <p className="panelDesc">
                    Lorem ipsum dolor sit amet consectetur adipisicing elit. Et
                    corporis esse, molestiae nihil quidem iusto!
                  </p>

                  <p className="panelLink">→ Browse Level {index + 4}</p>
                </div>
              </Link>
            ))}
        </div>
      </div>
    </div>
  );
}
