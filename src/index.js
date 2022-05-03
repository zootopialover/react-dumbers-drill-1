import React, { useState, useCallback } from "react";
import ReactDOM from "react-dom";
import NumChoice from "./NumChoice";

import "./styles.css";

const choiceList = [];
for (let choice = 0; choice < 40; choice++) {
  choiceList.push(false);
}

const App = () => {
  const [choices, setChoices] = useState(choiceList);

  const chooseDivisibles = useCallback(num => {
    console.log(num);
    setChoices(oldChoices => {
      const newChoices = [...oldChoices];
      for (let index = 0; index < newChoices.length; index++) {
        if (index % num === 0) {
          newChoices[index] = true;
        } else {
          newChoices[index] = false;
        }
      }
      return newChoices;
    });
  }, []);

  console.log(choices);
  return (
    <>
      {choices.map((c, idx) => (
        <NumChoice
          key={idx}
          chooseDivisibles={chooseDivisibles}
          choice={c}
          num={idx}
        />
      ))}
      <p>{choices.length}</p>
    </>
  );
};

const rootElement = document.getElementById("root");
ReactDOM.render(<App />, rootElement);
