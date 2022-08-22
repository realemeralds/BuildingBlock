import { Link } from "react-router-dom";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faCubes } from "@fortawesome/free-solid-svg-icons";
import placeholderPerson from "../assets/placeholder.png";

import { useLocation } from "react-router-dom";
import { useEffect, useState } from "react";

export const Navbar = () => {
  const location = useLocation();
  let [activeNavIndex, setActiveNavIndex] = useState(0);

  useEffect(() => {
    console.log(location.pathname);
    if (location.pathname === "/") {
      setActiveNavIndex(0);
    } else if (location.pathname === "/about") {
      setActiveNavIndex(1);
    }
  }, [location, activeNavIndex]);

  return (
    <div>
      <nav className="navbar">
        <button className="headerLogo">
          <FontAwesomeIcon icon={faCubes} size="3x" className="headerIcon" />
          <p className="headerLogoText">
            Block<span className="headerAccent">Bro</span>
          </p>
        </button>
        <div className="headerNavigation">
          <Link
            className={`headerLink ${activeNavIndex === 0 ? "active" : ""}`}
            to="/"
          >
            Home
          </Link>
          <Link
            className={`headerLink ${activeNavIndex === 1 ? "active" : ""}`}
            to="/about"
          >
            About
          </Link>
        </div>
        <div className="headerEndContainer">
          <img
            className="userImage"
            src={placeholderPerson}
            alt="placeholder"
          />
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
};

export default Navbar;
