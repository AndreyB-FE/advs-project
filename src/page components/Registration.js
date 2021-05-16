import React, { useState } from "react";
import Logo from "../components/Logo";
import { Link } from "react-router-dom";
import LogBtn from "../components/LogBtn";

const Registration = () => {
  const [isSwitched, setIsSwitched] = useState(false);

  const handleClick = () => {
    if (isSwitched) {
      setIsSwitched(false);
    } else {
      setIsSwitched(true);
    }
  };
  return (
    <div className="inputs-container pw-1">
      <Logo></Logo>
      <form action="#" method="" id="regForm">
        <div className="input-cont">
          <input
            type="email"
            name="email"
            placeholder="Email"
            className="input"
          />
        </div>
        <div className="input-cont">
          <input type="text" name="name" placeholder="Name" className="input" />
        </div>
        <div className="input-cont">
          <input
            type="text"
            name="surname"
            placeholder="Second name"
            className="input"
          />
        </div>
        <div className="input-cont">
          <input
            type={isSwitched ? "text" : "password"}
            placeholder="Password"
            name="password"
            className="input"
            id="passwordInput"
          />
          <i
            className={
              isSwitched
                ? "inside-icon pass-control far fa-eye-slash"
                : "inside-icon pass-control far fa-eye"
            }
            id="passwordEye"
            onClick={handleClick}
          ></i>
        </div>
        <div className="input-cont">
          <input
            type={isSwitched ? "text" : "password"}
            placeholder="Repeat password"
            name="repPassword"
            className="input"
            id="repPasswordInput"
          />
        </div>

        <LogBtn text="Sign up"></LogBtn>
      </form>
      <div className="bottom-links">
        <Link to="/login">Back to Login page</Link>
        <Link to="/resetpass">Forgot your password?</Link>
      </div>
    </div>
  );
};

export default Registration;
