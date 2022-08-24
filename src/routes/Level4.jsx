import Navbar from "../components/Navbar";
import TopLinks from "../components/TopLinks";
import Header from "../components/LevelHeader";
import Poll from "../components/Poll";
import CodeBlock from "../components/CodeBlock";

export default function Level4() {
  return (
    <div className="level">
      <Navbar />
      <TopLinks levelIndex={4} />
      <Header
        title={"Level 4 : Introduction and writing smart contracts "}
        text="At this level, you will learn how to write smart contracts."
      />
      <div className="body">
        <div className="textBody">
          <p className="textHeading">Smart contracts</p>
          <p className="textBodyMain">
            Smart contracts are programs stored on the blockchain that run when
            predetermined conditions are met. The conditions are set beforehand,
            so that the smart contract can run automatically when deployed.
          </p>
        </div>
        <div className="textBody">
          <p className="textHeading">Decentralised Applications(dApps)</p>
          <p className="textBodyMain">
            Decentralised applications, or dApps for short, are digital
            applications that uses the blockchain network. DApps can be used for
            gaming, finance and social media.
          </p>
        </div>
        <div className="textBody">
          <p className="textHeading">Advantages and disadvantages of dApps</p>
          <p className="textBodyMain">
            The pros of using dApps is that it provides user privacy as they
            don’t need to submit their personal information to use the
            application. Smart contracts are deployed to make use of the
            application, for which it only requires the conditions to be met.
            <br />
            <br />
            The cons of using dApps is that it is very hard to make changes to
            the application once it is deployed as it is hard to change the code
            without affecting other parts of the application. This makes it hard
            to correct bugs or any security risks.
          </p>
        </div>
        <div className="textBody">
          <p className="textHeading">
            How to start writing your first smart contract?
          </p>
          <p className="textBodyMain">
            An Integrated Development Environment (IDE) is required to write a
            smart contract. It is an application that helps write code so that
            the conditions can be set on the smart contract. Below are the steps
            to download an IDE :
            <br />
            <br />
            Step 1 :<br />
            Go to the Visual Studio Code website https://code.visualstudio.com
            <br />
            <br />
            Step 2 :<br />
            Download Visual Studio Code for the operating system you are on
            <br />
            <br />
            Step 3 :<br />
            Open and run the file and proceed with installation of the Visual
            Studio Code
          </p>
        </div>
        <Poll
          question={"What is a smart contract?"}
          answers={[
            "It is a place to find jobs.",
            "It is a smart way to buy ether.",
            "It is a program that runs automatically when conditions are met.",
          ]}
          points={20}
          correct={2}
          id={4}
        />
        <div className="textWithCode">
          <div className="textCodeBody">
            <p className="textHeading">Evolution of Web</p>
            <p className="textBodyMain">
              Web1.0 is created to be static and centralised and consumers are
              only able to search for information online. Information cannot be
              edited (Read-Only). Internet, msn and yahoo are examples of
              Web1.0. Implemention have been made from Web1.0 to Web2.0 as a
              interactive and centralised space for everyone. This allows
              consumers to comment,edit as well as interact with one another
              online (Read-Write). Some of the examples include Facebook,
              Instagram and Twitter. Moving Forward, Web3.0 has been launched in
              2020 as a space where it is verifiable and decentralised. This
              suggests that consumers are able to own what they have created
              online. Bitcoin is one of the example.
            </p>
          </div>
          <div>
            <CodeBlock
              language="js"
              showLineNumbers={true}
              code={`console.log("hello world")`}
              customStyle={{
                height: "250px",
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
      </div>
    </div>
  );
}
