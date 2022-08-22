import CodeBlock from "../components/CodeBlock";

export default function Level1() {
  const code = "epic";

  return (
    <div>
      <p>Hello world!</p>
      <CodeBlock
        language="js"
        showLineNumbers={true}
        text={`console.log("hello world")`}
      />
    </div>
  );
}
