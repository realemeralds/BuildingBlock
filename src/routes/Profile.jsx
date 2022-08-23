import Web3 from "web3";
import { useState } from "react";
import ConnectWalletButton from "../components/ConnectWalletButton";

const Profile = () => {
  const [loading, setLoading] = useState(false);
  const [address, setAddress] = useState("");

  const accountConnect = async () => {
    setLoading(true);
    try {
      if (window?.ethereum?.isMetaMask) {
        // Desktop browser
        const accounts = await window.ethereum.request({
          method: "eth_requestAccounts",
        });
        const account = Web3.utils.toChecksumAddress(accounts[0]);
        setAddress(account);
      } else {
        alert("Please download Metamask.");
        window.open("https://metamask.io/download");
      }
    } catch (error) {
      if (error.code === 4001) {
        // EIP-1193 userRejectedRequest error
        console.log("Please connect to MetaMask.");
      } else {
        console.error(error);
      }
    }
  };

  const accountDisconnect = () => {
    setAddress("");
  };
  return (
    <div className="profile">
      <ConnectWalletButton
        connectFn={accountConnect}
        logoutFn={accountDisconnect}
        loading={loading}
        address={address}
      />
      <p className="addressDisplay" hidden={!address}>
        {address}
      </p>
    </div>
  );
};

export default Profile;
