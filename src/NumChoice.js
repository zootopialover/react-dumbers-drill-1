import React from "react";

import Button from "./Button";

const NumChoice = React.memo(
  props => {
    console.log("Rendering NumChoice", props.num, props.choice);

    return (
      <span>
        <Button
          chooseDivisibles={() => props.chooseDivisibles(props.num)}
          num={props.num}
          choice={props.choice}
        />
      </span>
    );
  },
  (prevProps, nextProps) => {
    console.log("In prevProps:");
    console.log(prevProps.choice);
    console.log("In nextProps:");
    console.log(nextProps.choice);
    return (
      prevProps.num === nextProps.num &&
      prevProps.choice === nextProps.choice &&
      prevProps.chooseDivisibles === nextProps.chooseDivisibles
    );
  }
);

export default NumChoice;
