import placeholder from "../assets/casper.png";

export default function Header() {
  return (
    <div className="header">
      <div className="headerText">
        <p className="headerTitle">Level 1: What is Web3 even?</p>
        <p className="headerSubtitle">
          Lorem ipsum dolor sit amet consectetur adipisicing elit. Omnis
          voluptatem autem tempora cum explicabo sunt eos reprehenderit iusto
          dignissimos quas?
        </p>
      </div>
      <img className="headerImage" src={placeholder} alt="placeholder" />
    </div>
  );
}
