export default function Header({ title, text, image }) {
  return (
    <div className="header">
      <div className="headerText">
        <p className="headerTitle">{title}</p>
        <p className="headerSubtitle">{text}</p>
      </div>
      <img
        className="headerImage"
        src={image}
        alt="Header"
        width={348}
        height={348}
      />
    </div>
  );
}
