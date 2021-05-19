import React from "react";
import "../styles/saveAcc.scss";

const SaveAcc = () => {
  return (
    <div className="save-container">
      <input
        id="saveCheckbox"
        name="save-checkbox"
        className="checkbox"
        type="checkbox"
      />
      <label htmlFor="saveCheckbox" className="back-checkbox">
        <i className="fa fa-check-circle icon"></i>
        <p>Remember Me</p>
      </label>
    </div>
  );
};

export default SaveAcc;
