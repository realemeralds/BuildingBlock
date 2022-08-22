import Answer from "./Answer";
import CodeBlock from "../components/CodeBlock";

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
      <div className="question">
        <div className="questionHeading">
          <p className="header">Q:</p>
          <div className="text">
            <p>Lorem ipsum dolor sit amet.</p>
          </div>
        </div>
        <div className="answerContainer">
          {Array(4)
            .fill(0)
            .map(() => (
              <Answer text={"Lorem ipsum dolor sit amet."} />
            ))}
        </div>
      </div>
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
