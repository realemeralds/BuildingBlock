import { Link } from "react-router-dom";
import Panel from "./Panel";

const Panels = ({ offset, icons, descriptions }) => {
  return (
    <div className="panelContainer">
      {Array(3)
        .fill(0)
        .map((element, index) => (
          <Link to={`/level${index + offset}`} className="panelLink">
            <Panel
              index={index + offset}
              icon={icons[index]}
              description={descriptions[index]}
            />
          </Link>
        ))}
    </div>
  );
};

export default Panels;
