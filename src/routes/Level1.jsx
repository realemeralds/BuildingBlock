import Navbar from "../components/Navbar";
import TopLinks from "../components/TopLinks";
import Header from "../components/LevelHeader";
import Body from "../components/LevelBody";

export default function Level1() {
  return (
    <div className="level">
      <Navbar />
      <TopLinks levelIndex={1} />
      <Header />
      <Body />
    </div>
  );
}
