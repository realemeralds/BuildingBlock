import "bootstrap/dist/css/bootstrap.min.css";
import "./styles/App.scss";
import Navbar from "./components/Navbar";
import Splash from "./components/Splash";
import LinksToLevels from "./components/LinksToLevels";
import { ethers } from "ethers";
import Web3 from "web3";
import axios from "axios";
import assert from "assert";

import { createContext, useEffect, useState } from "react";
import { BrowserRouter, Routes, Route } from "react-router-dom";
import Level1 from "./routes/Level1";
import Level2 from "./routes/Level2";
import Level3 from "./routes/Level3";
import Level4 from "./routes/Level4";
import Level5 from "./routes/Level5";
import Level6 from "./routes/Level6";

export const AddressContext = createContext({
  address: "",
  setAddress: () => {},
});

export const NavbarContext = createContext({
  navbar: "",
  setNavbar: () => {},
});

export const WalletContext = createContext({
  wallet: "",
  setWallet: () => {},
});

export default function App() {
  const [address, setAddress] = useState("");
  const addressState = { address, setAddress };
  const [navbar, setNavbar] = useState(false);
  const navbarState = { navbar, setNavbar };
  const [wallet, setWallet] = useState(0);
  const walletState = { wallet, setWallet };
  const isConnect = window?.ethereum?.isConnected();
  const localStorageConnected = window?.localStorage?.getItem("notAnAddress");

  useEffect(() => {
    if (isConnect && localStorageConnected && address) {
      setAddress(localStorageConnected);
      setNavbar(true);
      axios
        .get(
          `https://flower-express-backend.herokuapp.com/balance?address=${address}`
        )
        .then((response) => {
          console.log("getting");
          if (response?.data?.status === "ERROR") {
            console.log("uh oh");
            console.log(response?.data);
            return;
          }
          console.log(response?.data);
          assert(response?.data?.balance >= wallet);
          setWallet(response?.data?.balance);
        });
    }
  }, [isConnect, localStorageConnected, address, wallet]);

  window?.ethereum?.on("accountsChanged", async (accounts) => {
    if (accounts.length === 0) {
      setNavbar(false);
      setAddress("");
      window.localStorage.removeItem("notAnAddress");
    } else {
      if (!address) return;
      const provider = new ethers.providers.Web3Provider(window.ethereum);
      const accounts = await provider.send("eth_requestAccounts", []);
      const account = Web3.utils.toChecksumAddress(accounts[0]);
      window.localStorage.setItem("notAnAddress", account);
      setAddress(account);
      setNavbar(true);
      if (!address) return;
      axios
        .get(
          `https://flower-express-backend.herokuapp.com/balance?address=${address}`
        )
        .then((response) => {
          console.log("getting");
          if (response?.data?.status === "ERROR") {
            console.log("uh oh");
            console.log(response?.data);
            return;
          }
          console.log(response?.data?.balance);
          assert(response?.data?.balance >= wallet);
          setWallet(response?.data?.balance);
        })
        .catch((err) => console.log(err));
    }
  });
  return (
    <AddressContext.Provider value={addressState}>
      <NavbarContext.Provider value={navbarState}>
        <WalletContext.Provider value={walletState}>
          <BrowserRouter>
            <Routes>
              <Route path="/" element={<Home />} />
              <Route path="level1" element={<Level1 />} />
              <Route path="level2" element={<Level2 />} />
              <Route path="level3" element={<Level3 />} />
              <Route path="level4" element={<Level4 />} />
              <Route path="level5" element={<Level5 />} />
              <Route path="level6" element={<Level6 />} />
            </Routes>
          </BrowserRouter>
        </WalletContext.Provider>
      </NavbarContext.Provider>
    </AddressContext.Provider>
  );
}

export function Home() {
  return (
    <div className="main">
      <Navbar />
      <Splash />
      <LinksToLevels />
    </div>
  );
}
