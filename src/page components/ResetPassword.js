import React from "react";
import Logo from "../components/Logo";
import LogBtn from "../components/LogBtn";
import { Link } from "react-router-dom";

const ResetPassword = () => {
  return (
    <div className="inputs-container pw-1">
      <Logo></Logo>
      <form action="#" method="" id="resetForm">
        <div className="input-cont">
          <input
            type="email"
            name="email"
            className="input"
            placeholder="Email"
          />
        </div>
        <Link to="/resetpass/confirmation">
          <LogBtn text="Reset"></LogBtn>
        </Link>
      </form>
      <div className="bottom-links">
        <Link to="/login">Back to Login page</Link>
        <Link to="/registration">Back to Registration page</Link>
      </div>
    </div>
  );
};

export default ResetPassword;
