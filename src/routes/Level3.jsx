import Navbar from "../components/Navbar";
import TopLinks from "../components/TopLinks";
import Header from "../components/LevelHeader";
import Poll from "../components/Poll";
import CodeBlock from "../components/CodeBlock";

const code = `const { ethers } = require("ethers");
const provider = new ethers.getDefaultProvider("mainnet");
const main = async () => {
  // wait to connect to blockchain
  await provider.ready;

  // read the balance for free
  balance = await provider.getBalance("ethers.eth");

  // log the parsed number
  console.log(parseInt(balance._hex));
};

main();`;

export default function Level3() {
  return (
    <div className="level">
      <Navbar />
      <TopLinks levelIndex={3} />
      <Header
        title={"Level 3: Ether.js and Node.js"}
        text="At this level you will understand how ether.js and node.js works."
      />
      <div className="body">
        <div className="textBody">
          <p className="textHeading">What is Node.js?</p>
          <p className="textBodyMain">
            Open source development platform for executing JavaScript code
            server-side. Node is useful for developing applications that require
            a persistent connection from the browser to the server and is often
            used for real-time applications such as chat, news feeds and web
            push notifications.
          </p>
        </div>
        <div className="textBody">
          <p className="textHeading">How does Node.js work?</p>
          <p className="textBodyMain">
            Node is completely event-driven. Basically the server consists of
            one thread processing one event after another.
            <br />
            <br />A new request coming in is one kind of event. The server
            starts processing it and when there is a blocking Input/Outout (IO)
            operation, it does not wait until it completes and instead registers
            a callback function. The server then immediately starts to process
            another event (maybe another request). When the IO operation is
            finished, that is another kind of event, and the server will process
            it (i.e. continue working on the request) by executing the callback
            as soon as it has time.
          </p>
        </div>
        <div className="textWithCode">
          <div className="textCodeBody">
            <p className="textHeading">Setup Node.js</p>
            <p className="textBodyMain">
              Step 1 :<br />
              Download Node.js Installer using https://nodejs.org/en/download/
              <br />
              <br />
              Step 2 :<br />
              Install Node.js and NPM from Browser. After finish dowloading,
              click run and go to the Node.js Setup Wizard.
              <br />
              <br />
              Step 3 :<br />
              Click Next and the next screen shows the license agreement click
              Next if you agree.
              <br />
              <br />
              Step 4 :<br />
              Click the install button to run the installer after u have chosen
              the location of the installation as well as selection of the
              different components in Node.js
              <br />
              <br />
              Step 5 :<br />
              Open command prompt/Powershell in your computer to verify
              installation by using: node -v The system should display the
              Node.js version installed on your system. You can do the same for
              NPM: npm -v
            </p>
          </div>
          <div>
            <CodeBlock
              language="js"
              showLineNumbers={true}
              code={`node -v \nnpm-v`}
              customStyle={{
                width: "200px",
                padding: "10px 15px",
                fontSize: "1rem",
                margin: "0px 50px",
                borderRadius: "10",
                boxShadow: "1px 2px 3px rgba(0,0,0,0.35)",
                fontFamily: "NCascadiaCode",
              }}
            />
          </div>
        </div>
        <div className="textBody">
          <p className="textHeading">Ether.js</p>
          <p className="textBodyMain">
            Ethers.js is a JavaScript library that aims to be a complete and
            compact library for interacting with the Ethereum Blockchain and its
            ecosystem.
          </p>
        </div>
        <div className="textBody"></div>
        <div className="textWithCode">
          <div className="textCodeBody">
            <p className="textHeading">Blockchain Interaction</p>
            <p className="textBodyMain">
              Now, after knowing how ether.js and node.js works, lets look at
              how blockchain interact using all the codes provided in the code
              block!
              <br />
              <br />
              The first line of code helps to import ether.js into the program.
              <br />
              <br />
              The second code is to make a constant provider for the Ethereum
              network connection.
              <br />
              <br />
              The third code is to connect ether.js to Metamask
              <br />
              <br />
              The fourth code helps to get ETH Balance with Ether.js
              <br />
              <br />
              The fifth code parses a string argument and returns an integer.
              <br />
              <br />
              The last code serves as the starting point for program execution.
            </p>
          </div>
          <div>
            <CodeBlock
              language="js"
              showLineNumbers={true}
              code={code}
              customStyle={{
                width: "400px",
                padding: "10px 15px",
                fontSize: "1rem",
                margin: "0px 50px",
                borderRadius: "10",
                boxShadow: "1px 2px 3px rgba(0,0,0,0.35)",
                fontFamily: "NCascadiaCode",
              }}
            />
          </div>
        </div>
        <Poll
          question={"What is Node.js?"}
          answers={[
            "It is an application that is used to create smart contract.",
            "It is a platform for executing JavaScript.",
            "It is a platform to install JavaScript.",
          ]}
          points={20}
          correct={1}
          id={3}
        />
      </div>
    </div>
  );
}
