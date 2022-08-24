import { Link } from "react-router-dom";

const Splash = () => (
  <div className="splash">
    <div className="splashTextContainer">
      <p className="splashText">Learn Web3 - like never before.</p>
    </div>
    <div className="splashSide">
      <p className="splashSideText">
        Blockchain should be accessible, jargon-free, and easy to learn.
      </p>
      <Link to="/signup">
        <button className="splashButton">
          <p>Dive right in.</p>
        </button>
      </Link>
    </div>
  </div>
);

export default Splash;
