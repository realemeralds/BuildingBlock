import { useContext } from "react";
import { NavbarContext, AddressContext } from "../App";

const SignOutButton = ({ hidden }) => {
  const { setAddress } = useContext(AddressContext);
  const { setNavbar } = useContext(NavbarContext);

  return (
    <div className="button" hidden={hidden}>
      <button
        className="signInButton"
        onClick={() => {
          setAddress("");
          window.localStorage.removeItem("notAnAddress");
          setNavbar(false);
        }}
      >
        <p className="signInText">Sign Out</p>
      </button>
    </div>
  );
};

export default SignOutButton;
