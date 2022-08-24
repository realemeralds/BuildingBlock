import Answer from "./Answer";
import { useState } from "react";
import axios from "axios";
import { useContext } from "react";
import { AddressContext, WalletContext } from "../App";
import assert from "assert";

export default function Poll({ question, answers, points, correct, id }) {
  const [selectedIndex, setIndex] = useState();
  const { address } = useContext(AddressContext);
  const { wallet, setWallet } = useContext(WalletContext);
  let completedPolls = JSON.parse(window.localStorage.getItem("polls"));
  let defaultValue;
  if (completedPolls) {
    defaultValue = completedPolls?.includes(id);
  } else {
    window.localStorage.setItem("polls", JSON.stringify([]));
    defaultValue = false;
  }

  const [completed, setCompleted] = useState(defaultValue);
  const keyHashes = [
    985815021, 13258361, -1922579465, 77294539, -220580849, 617305735,
    -1756583982, 269169273, 282318303, -2122445780, 358835578, -724010591,
    2072187588,
  ];

  const submitHandler = () => {
    if (selectedIndex === correct) {
      if (!address) {
        alert("Oops! looks like you need to log in first");
        return;
      }
      if (completedPolls?.includes(selectedIndex)) {
        alert("Oops! Looks like you already did this...");
        setCompleted(true);
        return;
      }

      setCompleted(true);
      completedPolls.push(id);
      window.localStorage.setItem("polls", JSON.stringify(completedPolls));

      // mint
      if (!address) return;
      axios
        .post("https://flower-express-backend.herokuapp.com/mint", {
          address: address,
          id: id,
          points: points,
          key: keyHashes[id],
        })
        .then(function (response) {
          console.log("first response data:");
          console.log(response?.data);
          axios
            .get(
              `https://flower-express-backend.herokuapp.com/balance?address=${address}`
            )
            .then((response) => {
              if (response?.data?.status === "ERROR") {
                console.log("uh oh");
                console.log(response?.data);
                return;
              }
              assert(response?.data?.balance > wallet);
              console.log(response?.data?.balance);

              setWallet(response?.data?.balance);
            });
        })
        .catch(function (error) {
          console.log(error);
        });
    }
  };

  const answerClickHandler = (index) => {
    setIndex(index);
  };

  return (
    <div className="question">
      <div className="questionHeading">
        <p className="header">Q:</p>
        <div className="text">
          <p>{question}</p>
        </div>
      </div>
      <div className="answerContainer">
        {answers.map((text, index) => (
          <Answer
            text={text}
            index={index}
            key={index}
            onPress={answerClickHandler}
            disabled={completed}
          />
        ))}
      </div>
      <button onClick={submitHandler} className="questionSubmit">
        <p className="questionText">Submit</p>
      </button>
      <p hidden={!completed} className="confirmText">
        Correct! Here's 20 tokens (wait a bit)!
      </p>
    </div>
  );
}
