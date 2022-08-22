import { CopyBlock, a11yDark } from "react-code-blocks";
import "../styles/App.scss";

export default function CodeBlock({
  code,
  language,
  showLineNumbers,
  customStyle,
}) {
  return (
    <div style={{ fontFamily: "NCascadiaCode" }}>
      <CopyBlock
        text={code}
        language={language}
        showLineNumbers={showLineNumbers}
        theme={a11yDark}
        codeBlock
        customStyle={customStyle}
      />
    </div>
  );
}
