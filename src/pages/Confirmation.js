import React from "react";
import Logo from "../components/Logo";
import Button from "../components/Button";
import { Link } from "react-router-dom";

const Confirmation = () => {
  return (
    <div className="inputs-container pw-1">
      <Logo></Logo>
      <form action="#" method="" id="resetForm">
        <label
          style={{
            fontSize: "0.8em",
            textAlign: "center",
          }}
        >
          <div className="input-cont">
            We sent confirmation message to your mail. Write confirmation code
            below
            <input
              type="text"
              name="confirmCode"
              className="input"
              placeholder="Code"
            />
          </div>
        </label>
        <div className="buttons">
          <Button text={"Confirm"} path="/resetpass"></Button>
          <Link to="/resetpass">
            <Button text="Resend"></Button>
          </Link>
        </div>
      </form>
      <div className="bottom-links">
        <Link to="/login">Back to Login page</Link>
        <Link to="/registration">Back to Registration page</Link>
      </div>
    </div>
  );
};

export default Confirmation;
