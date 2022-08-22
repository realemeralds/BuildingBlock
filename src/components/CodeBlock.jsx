import { CopyBlock, a11yDark } from "react-code-blocks";

export default function CodeBlock({ code, language, showLineNumbers }) {
  return (
    <div style={{ fontFamily: "CascadiaCode" }}>
      <CopyBlock
        text={code}
        language={language}
        showLineNumbers={showLineNumbers}
        theme={a11yDark}
        codeBlock
      />
    </div>
  );
}
