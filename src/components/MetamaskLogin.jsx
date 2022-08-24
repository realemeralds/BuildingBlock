import "../styles/metamask.scss";
import MetamaskLogo from "../assets/metamask-fox.svg";
import { AddressContext } from "../App";
import { useContext, useState } from "react";
import Web3 from "web3";
import { ethers } from "ethers";

export default function MetaMaskLogin({ setShow }) {
  const { setAddress } = useContext(AddressContext);
  const [errorText, setErrorText] = useState("");
  const [hidden, setHidden] = useState(true);

  const accountConnect = async () => {
    try {
      if (window?.ethereum?.isMetaMask) {
        const provider = new ethers.providers.Web3Provider(window.ethereum);
        const accounts = await provider.send("eth_requestAccounts", []);
        const account = Web3.utils.toChecksumAddress(accounts[0]);
        setAddress(account);
        window.localStorage.setItem("notAnAddress", account);
        setShow(false);
      } else {
        setErrorText("Please download");
        setHidden(false);
      }
    } catch (error) {
      if (error.code === 4001) {
        // EIP-1193 userRejectedRequest error
        setErrorText("Please connect to MetaMask.");
      } else {
        console.error(error);
      }
    }
  };

  return (
    <>
      <button className="metalinkButton" onClick={accountConnect}>
        <img className="metalinkLogo" src={MetamaskLogo} alt="metamask logo" />{" "}
        <p className="metalinkText">Login with Metamask</p>
      </button>
      <p className="errorText">
        {errorText}
        <a hidden={hidden} href="https://metamask.io/download">
          {" "}
          Metamask.
        </a>
      </p>
    </>
  );
}
