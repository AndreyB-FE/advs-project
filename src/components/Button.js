import React from "react";

const Button = (props) => {
  return (
    <button type={props.type} className="btn">
      {props.text}
    </button>
  );
};

export default Button;
