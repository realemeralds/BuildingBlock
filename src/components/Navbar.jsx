import { Link } from "react-router-dom";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faCubes, faCoins } from "@fortawesome/free-solid-svg-icons";
import placeholderPerson from "../assets/placeholder.png";

import { useLocation } from "react-router-dom";
import { useContext, useEffect, useState } from "react";
import SignInButton from "./SignInButton";
import { NavbarContext } from "../App";
import SignOutButton from "./SignOutButton";

export const Navbar = ({ points = 0 }) => {
  const { navbar: signedIn } = useContext(NavbarContext);
  console.log(signedIn);
  const location = useLocation();
  let [activeNavIndex, setActiveNavIndex] = useState(0);

  useEffect(() => {
    console.log(location.pathname);
    if (location.pathname === "/") {
      setActiveNavIndex(0);
    } else if (location.pathname === "/about") {
      setActiveNavIndex(1);
    } else {
      setActiveNavIndex(2);
    }
  }, [location, activeNavIndex]);

  return (
    <div>
      <nav className="navbar">
        <button className="headerLogo">
          <FontAwesomeIcon icon={faCubes} className="headerIcon" />
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
          <SignInButton hidden={signedIn} />
          <div className="points" hidden={!signedIn}>
            <FontAwesomeIcon icon={faCoins} className="pointsIcon" />
            <p className="pointsText">{points} coins</p>
          </div>
          <SignOutButton hidden={!signedIn} />
        </div>
      </nav>
      <div style={{ height: 60 }}></div>
    </div>
  );
};

export default Navbar;
