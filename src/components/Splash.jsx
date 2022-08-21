import { Link } from "react-router-dom";

const Splash = () => (
  <div className="splash">
    <p className="splashText">Learn Web3 - without the BS.</p>
    <div className="splashSide">
      <p className="splashSideText">
        Blockchain should be accessible, jargon-free, and easy to learn.
      </p>
      <Link to="/level1">
        <button className="splashButton">
          <p>Dive right in.</p>
        </button>
      </Link>
    </div>
  </div>
);

export default Splash;
