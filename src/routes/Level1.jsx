import Navbar from "../components/Navbar";
import TopLinks from "../components/TopLinks";
import Header from "../components/LevelHeader";
import Poll from "../components/Poll";
import CodeBlock from "../components/CodeBlock";
export default function Level1() {
  return (
    <div className="level">
      <Navbar />
      <TopLinks levelIndex={1} />
      <Header
        title={"Level 1: Introduction to Web3.0"}
        text="At this level, you will be learning the evolution of web, relevance,
            drawbacks as well as some common misconceptions."
      />
      <div className="body">
        <div className="textBody">
          <p className="textHeading">Evolution of Web</p>
          <p className="textBodyMain">
            Web1.0 is created to be static and centralised and consumers are
            only able to search for information online. Information cannot be
            edited (Read-Only). Internet, msn and yahoo are examples of Web1.0.
            <br />
            <br />
            Implemention have been made from Web1.0 to Web2.0 as a interactive
            and centralised space for everyone. This allows consumers to
            comment,edit as well as interact with one another online
            (Read-Write). Some of the examples include Facebook, Instagram and
            Twitter.
            <br />
            <br />
            Moving Forward, Web3.0 has been launched in 2020 as a space where it
            is verifiable and decentralised. This suggests that consumers are
            able to own what they have created online. Bitcoin is one of the
            example.
          </p>
        </div>
        <div className="textBody">
          <p className="textHeading">Why we need to learn Web3.0?</p>
          <p className="textBodyMain">
            Web3.0 technologies like blockchain provide several benefits,
            especially in terms of data privacy and security. Blockchain itself
            has a proven high level of security for simple use cases (e.g.
            sending transactions from one person to another).
          </p>
        </div>
        <div className="textBody">
          <p className="textHeading">Misconception of Web3.0</p>
          <p className="textBodyMain">
            Misconception 1: “Web3.0” Is the Same Thing as “The Metaverse”. The
            metaverse is just a small sector within Web3.0 while Web3.0 is
            all-encompassing.
            <br />
            <br />
            Misconception 2: Web3.0 Is 100% Decentralized. Numerous Web3.0
            platforms are centralized, meaning that they have owners who control
            access. For example, the OpenSea NFT marketplace is actually
            centralized.
            <br />
            <br />
            Misconception 3: Web3.0 Is More Secure than Web2. Applications that
            use emerging types of Web3.0 technologies aren’t nearly as secure.
            For example, smart contracts used to power Web3 applications can be
            exploited.
          </p>
        </div>
        <Poll
          question={
            "What are the differences between Web 3.0 and Web 1.0 and Web 2.0?"
          }
          answers={[
            "Web3.0 is more secure.",
            "Web3.0 is more centralised.",
            "Web3.0 is less user friendly.",
          ]}
          points={20}
          correct={0}
          id={0}
        />
        <Poll
          question={
            "What are the differences between Web 3.0 and Web 1.0 and Web 2.0?"
          }
          answers={[
            "Web3.0 is the same as The Metaverse.",
            "Web3.0 provides security and data privacy.",
            "All Web3.0 platfoms are decentralised.",
          ]}
          points={20}
          correct={2}
          id={1}
        />
      </div>
    </div>
  );
}
