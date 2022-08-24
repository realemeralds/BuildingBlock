import { Link } from "react-router-dom";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import {
  faChevronLeft,
  faChevronRight,
} from "@fortawesome/free-solid-svg-icons";

export default function TopLinks({ levelIndex }) {
  return (
    <div className="topLinks">
      <Link
        to={levelIndex < 2 ? `/` : `/level${levelIndex - 1}`}
        className="link"
        style={{
          opacity: +(levelIndex > 1),
          pointerEvents: levelIndex > 1 ? undefined : "none",
        }}
      >
        <FontAwesomeIcon className="icon" icon={faChevronLeft} />
        <p>Back to: Level {levelIndex - 1}</p>
      </Link>
      <Link
        to={levelIndex > 5 ? `/` : `/level${levelIndex + 1}`}
        className="link"
        style={{
          opacity: +(levelIndex < 6),
          pointerEvents: levelIndex < 6 ? undefined : "none",
        }}
      >
        <p>Jump to: Level {levelIndex + 1}</p>
        <FontAwesomeIcon className="icon" icon={faChevronRight} />
      </Link>
    </div>
  );
}
