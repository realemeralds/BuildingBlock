import CodeBlock from "../components/CodeBlock";
import Poll from "./Poll";

export default function Body() {
  return (
    <div className="body">
      <div className="textBody">
        <p className="textHeading">Heading</p>
        <p className="textBodyMain">
          Lorem ipsum dolor sit amet consectetur adipisicing elit. Omnis
          voluptatem autem tempora cum explicabo sunt eos reprehenderit iusto
          dignissimos quas?
        </p>
      </div>
      <Poll
        question={"lorem4"}
        answers={["hey", "hi", "yo", "cry"]}
        points={50}
        correct={3}
        id={0}
      />
      <div className="textWithCode">
        <div className="textCodeBody">
          <p className="textHeading">Heading</p>
          <p className="textBodyMain">
            Lorem ipsum dolor sit amet consectetur adipisicing elit. Omnis
            voluptatem autem tempora cum explicabo sunt eos reprehenderit iusto
            dignissimos quas?
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
  );
}
