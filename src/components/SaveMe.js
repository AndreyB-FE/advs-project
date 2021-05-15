import React from "react";

const SaveMe = () => {
  return (
    <div className="page__toggle">
      <div className="center">
        <label>
          <input
            id="entry-savemy"
            name="entry-savemy"
            className="label__checkbox"
            type="checkbox"
          />
          <span className="label__text">
            <span className="label__check">
              <i className="fa fa-check-circle icon"></i>
              <p className="savemy">Remember Me</p>
            </span>
          </span>
        </label>
      </div>
    </div>
  );
};

export default SaveMe;
