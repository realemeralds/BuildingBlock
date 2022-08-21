import { Link } from "react-router-dom";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faCubes } from "@fortawesome/free-solid-svg-icons";
import placeholderPerson from "../assets/placeholder.png";

export const Navbar = () => (
  <div>
    <nav className="navbar">
      <button className="headerLogo">
        <FontAwesomeIcon icon={faCubes} size="3x" className="headerIcon" />
        <p className="headerLogoText">
          Block<span className="headerAccent">Bro</span>
        </p>
      </button>
      <div className="headerNavigation">
        <a className="headerLink active" href="/home">
          Home
        </a>
        <a className="headerLink" href="/about">
          About
        </a>
      </div>
      <div className="headerEndContainer">
        <img className="userImage" src={placeholderPerson} alt="placeholder" />
        <div className="signInButton">
          <p className="signInText">Sign In</p>
        </div>
        <div className="signUpButton">
          <p className="signUpText">Sign Up</p>
        </div>
      </div>
    </nav>
  </div>
);

export default Navbar;
