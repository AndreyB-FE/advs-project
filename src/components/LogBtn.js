import React from "react";

const LogBtn = (props) => {
  return (
    <button type={props.type} className="btn">
      {props.text}
    </button>
  );
};

export default LogBtn;
