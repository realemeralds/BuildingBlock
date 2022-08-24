import Navbar from "./Navbar";
import Header from "./LevelHeader";
import TopLinks from "./TopLinks";
import Image from "../assets/headerPlaceholder.png";

export default function Body({ index }) {
  return (
    <div className="level">
      <Navbar />
      <TopLinks levelIndex={index} />
      <Header
        title={"Level 5: Deploying your Smart Contract"}
        text="coming soon!"
        image={Image}
      />
      <div className="body">
        <div className="textBody">
          <p className="textHeading">Coming soon:</p>
          <p className="textBodyMain">Watch this space!</p>
        </div>
      </div>
    </div>
  );
}
