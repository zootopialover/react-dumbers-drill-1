import React from "react";

const Button = React.memo(
  props => {
    console.log("Rendering button", props.num);

    return (
      <button
        style={
          props.choice
            ? { backgroundColor: "red" }
            : { backgroundColor: "white" }
        }
        onClick={props.chooseDivisibles}
      >
        {props.num}
      </button>
    );
  },
  (prevProps, nextProps) =>
    prevProps.num === nextProps.num &&
    prevProps.choice === nextProps.choice &&
    prevProps.chooseDivisibles === nextProps.chooseDivisibles
);

export default Button;
