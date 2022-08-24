import { useRef, useState } from "react";

export default function Answer({ text, index, onPress, disabled }) {
  const elContainer = useRef(null);
  const [bgColor, setBgColor] = useState("#F1F1F1");
  const [borderColor, setBorderColor] = useState("#824c71ff");

  return (
    <label className="answerWrapper" style={{ backgroundColor: bgColor }}>
      <div className="answer" style={{ borderLeftColor: borderColor }}>
        <input
          type="radio"
          name="radio"
          className="radio"
          disabled={disabled}
          ref={elContainer}
          onFocus={() => {
            bgColor === "#F1F1F1"
              ? setBgColor("#8661C1")
              : setBgColor("#F1F1F1");
            borderColor === "#824c71ff"
              ? setBorderColor("#FFF")
              : setBorderColor("#824c71ff");
          }}
          onClick={() => {
            onPress(index);
          }}
          onBlur={() => {
            bgColor === "#F1F1F1"
              ? setBgColor("#8661C1")
              : setBgColor("#F1F1F1");
            borderColor === "#824c71ff"
              ? setBorderColor("#FFF")
              : setBorderColor("#824c71ff");
          }}
        />
        <p className="text">{text}</p>{" "}
      </div>
    </label>
  );
}
