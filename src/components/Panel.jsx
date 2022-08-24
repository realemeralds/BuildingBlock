import { Link } from "react-router-dom";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";

const Panel = ({ icon, description, index }) => (
  <div className="panel">
    <FontAwesomeIcon icon={icon} size="5x" className="panelIcon" />
    <p className="panelHeader">Level {index}</p>
    <p className="panelDesc">{description}</p>
    <Link to={`/level${index}`}>
      <p className="panelLink">→ Browse Level {index}</p>
    </Link>
  </div>
);

export default Panel;
