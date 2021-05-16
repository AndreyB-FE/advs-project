import Logo from "../components/Logo";
import React, { useState } from "react";
import { Link } from "react-router-dom";
import SaveMe from "../components/SaveMe";
import LogBtn from "../components/LogBtn";

const Auth = () => {
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
      <form action="#" method="" id="loginForm">
        <div className="input-cont">
          <input
            type="text"
            name="login"
            placeholder="Login"
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
        <SaveMe></SaveMe>
        <LogBtn text={"Sign in"}></LogBtn>
      </form>
      <div className="bottom-links">
        <Link to="/registration">Don't have account yet?</Link>
        <Link to="/resetpass">Forgot your password?</Link>
      </div>
    </div>
  );
};

export default Auth;
