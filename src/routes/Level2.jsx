import Navbar from "../components/Navbar";
import TopLinks from "../components/TopLinks";
import Header from "../components/LevelHeader";
import Poll from "../components/Poll";
import CodeBlock from "../components/CodeBlock";

export default function Level2() {
  return (
    <div className="level">
      <Navbar />
      <TopLinks levelIndex={2} />
      <Header
        title={"Level 2: Using MetaMask"}
        text="At this level, you will be learning about cryptowallets, their functions and how to get and use Metamask."
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
            Step 1: <br />
            Open your Google Chrome and make sure you are connected to your
            Google account
            <br />
            <br />
            Step 2:
            <br />
            Go to the Google Chrome webstore
            https://chrome.google.com/webstore/category/extensions
            <br />
            <br />
            Step 3: <br />
            Search for Metamask on the Chrome Webstore
            <br />
            <br />
            Step 4: <br />
            Add Metamask to Chrome
            <br />
            <br />
            Step 5: <br />
            Create a new Wallet on Metamask
            <br />
            <br />
            Step 6: <br />
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
