import { Link } from "react-router-dom";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faCubes, faCoins } from "@fortawesome/free-solid-svg-icons";
import placeholderPerson from "../assets/placeholder.png";

import { useLocation } from "react-router-dom";
import { useContext, useEffect, useState } from "react";
import SignInButton from "./SignInButton";
import { NavbarContext, AddressContext, WalletContext } from "../App";
import SignOutButton from "./SignOutButton";

export const Navbar = () => {
  const { navbar: signedIn } = useContext(NavbarContext);
  const { address } = useContext(AddressContext);
  const { wallet } = useContext(WalletContext);

  const location = useLocation();
  let [activeNavIndex, setActiveNavIndex] = useState(0);

  useEffect(() => {
    console.log(wallet);
  }, [wallet]);

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
        <Link to="/" className="headerLogo">
          <FontAwesomeIcon icon={faCubes} className="headerIcon" />
          <p className="headerLogoText">
            Building<span className="headerAccent">Block</span>
          </p>
        </Link>
        <div className="headerEndContainer">
          <img
            className="userImage"
            src={placeholderPerson}
            alt="placeholder"
          />
          <SignInButton hidden={signedIn} />
          <a href={`https://testnet.bscscan.com/address/${address}`}>
            <button className="points" hidden={!signedIn}>
              <FontAwesomeIcon icon={faCoins} className="pointsIcon" />
              <p className="pointsText">{wallet} coins</p>
            </button>
          </a>
          <SignOutButton hidden={!signedIn} />
        </div>
      </nav>
      <div style={{ height: 60 }}></div>
    </div>
  );
};

export default Navbar;
