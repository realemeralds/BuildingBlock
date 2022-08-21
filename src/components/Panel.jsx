import { Link } from "react-router-dom";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faCoffee } from "@fortawesome/free-solid-svg-icons";

const index = 0;

const Panel = () => (
  <div className="panel">
    <FontAwesomeIcon icon={faCoffee} size="5x" className="panelIcon" />
    <p className="panelHeader">Level {index + 1}</p>
    <p className="panelDesc">
      Lorem ipsum dolor sit amet consectetur adipisicing elit. Et corporis esse,
      molestiae nihil quidem iusto!
    </p>
    <Link to={`/level${index + 1}`}>
      <p className="panelLink">→ Browse Level {index + 1}</p>
    </Link>
  </div>
);

export default Panel;
