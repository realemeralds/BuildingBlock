import { Link } from "react-router-dom";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";

const Panel = ({ icon, description, index }) => (
  <div className="panel">
    <FontAwesomeIcon icon={icon} size="5x" className="panelIcon" />
    <p className="panelHeader">Level {index}</p>
    {description.split("\n").map((str) => (
      <p className="panelDesc">{str}</p>
    ))}
    <Link to={`/level${index}`}>
      <p className="panelLink">→ Browse Level {index}</p>
    </Link>
  </div>
);

export default Panel;
