import { Link } from "react-router-dom";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faCoffee } from "@fortawesome/free-solid-svg-icons";

const Panels = ({ offset }) => (
  <div className="panelContainer">
    {Array(3)
      .fill(0)
      .map((element, index) => (
        <Link to={`/level${index + offset}`} className="panelLink">
          <div className="panel">
            <FontAwesomeIcon icon={faCoffee} size="5x" className="panelIcon" />
            <p className="panelHeader">Level {index + offset}</p>
            <p className="panelDesc">
              Lorem ipsum dolor sit amet consectetur adipisicing elit. Et
              corporis esse, molestiae nihil quidem iusto!
            </p>
            <p className="panelLink">→ Browse Level {index + offset}</p>
          </div>
        </Link>
      ))}
  </div>
);

export default Panels;
