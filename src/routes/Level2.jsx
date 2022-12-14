import Navbar from "../components/Navbar";
import TopLinks from "../components/TopLinks";
import Header from "../components/LevelHeader";
import Poll from "../components/Poll";
import Image from "../assets/two.png";

export default function Level2() {
  return (
    <div className="level">
      <Navbar />
      <TopLinks levelIndex={2} />
      <Header
        title={"Level 2: Using MetaMask"}
        text="At this level, you will be learning about cryptowallets, their functions and how to get and use Metamask."
        image={Image}
      />
      <div className="body">
        <div className="textBody">
          <p className="textHeading">Crypto wallets</p>
          <p className="textBodyMain">
            Crypto wallets are programs or devices that allow you to store
            crytocurrency keys and allows the user to access the coins that is
            stored inside.
            <br />
            <br />
            Metamask is a free web and mobile crypto wallet and it is usually
            the cryto wallet of choice due to its accessibility, from either a
            chrome extension or a phone app, and its new user friendly
            interface.
          </p>
        </div>
        <div className="textBody">
          <p className="textHeading">Creating a MetaMask Account</p>
          <p className="textBodyMain">
            <u>Step 1:</u> <br />
            Open your Google Chrome and make sure you are connected to your
            Google account
            <br />
            <br />
            <u>Step 2:</u>
            <br />
            Go to the Google Chrome webstore
            https://chrome.google.com/webstore/category/extensions
            <br />
            <br />
            <u>Step 3:</u> <br />
            Search for Metamask on the Chrome Webstore
            <br />
            <br />
            <u>Step 4:</u> <br />
            Add Metamask to Chrome
            <br />
            <br />
            <u>Step 5:</u> <br />
            Create a new Wallet on Metamask
            <br />
            <br />
            <u>Step 6:</u> <br />
            Record down the secret recovery phrase, this is important as it is
            the only way to recover your account in case of forgotten password.
          </p>
        </div>
        <Poll
          question={"What are cryptowallets?"}
          answers={[
            "Places to store foreign currencies.",
            "Places to store cryptocurrency keys.",
            "Places to store commodities.",
          ]}
          points={20}
          correct={1}
          id={2}
        />
      </div>
    </div>
  );
}
