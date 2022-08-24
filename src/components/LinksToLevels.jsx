import Panels from "./Panels";
import {
  faCoffee,
  faCubes,
  faWallet,
  faCodeBranch,
  faFileContract,
  faTerminal,
} from "@fortawesome/free-solid-svg-icons";

const icons1 = [faCubes, faWallet, faCodeBranch];
const descriptions1 = [
  `Aim of this lesson:
  - An overview of the purpose and relevance of Web3.`,
  `Aim of this lesson:
  - Learn how and why to use a cryptowallet.`,
  `Aim of this lesson:
  - Understand how ether.js and node.js works.`,
];
const icons2 = [faFileContract, faTerminal, faTerminal];
const descriptions2 = [
  "Aim of this lesson:\n- In-depth guide into smart contracts and dApps",
  "coming soon...!",
  "coming soon...!",
];

const LinksToLevels = () => (
  <>
    <div className="basicsDivider" />
    <div className="basicsPanel">
      <p className="basicsText">Start with the basics.</p>
      <div className="panelContainer">
        <Panels offset={1} icons={icons1} descriptions={descriptions1} />
      </div>
    </div>
    <div className="advancedPanel">
      <p className="advancedText">Go further with key concepts.</p>
      <Panels offset={4} icons={icons2} descriptions={descriptions2} />
    </div>
  </>
);

export default LinksToLevels;
