import Panels from "./Panels";

const LinksToLevels = () => (
  <>
    <div className="basicsDivider" />
    <div className="basicsPanel">
      <p className="basicsText">Start with the basics.</p>
      <div className="panelContainer">
        <Panels offset={1} />
      </div>
    </div>
    <div className="advancedPanel">
      <p className="advancedText">Go further with key concepts.</p>
      <Panels offset={4} />
    </div>
  </>
);

export default LinksToLevels;
