import Logo from "../components/Logo";
import React, { useState } from "react";
import { Link } from "react-router-dom";
import SaveAcc from "../components/SaveAcc";
import Button from "../components/Button";

const Auth = () => {
  const [log, setLog] = useState({ email: "", password: "" });
  const [isSwitched, setIsSwitched] = useState(false);

  const clickHandler = () => {
    if (isSwitched) {
      setIsSwitched(false);
    } else {
      setIsSwitched(true);
    }
  };
  const changeHandler = (e) => {
    const { name, value } = e.target;
    setLog({ ...log, [name]: value });
  };
  const submitHandler = (e) => {
    console.log(log);
    e.preventDefault();
  };
  return (
    <div className="inputs-container pw-1">
      <Logo></Logo>
      <form action="#" method="" id="loginForm" onSubmit={submitHandler}>
        <div className="input-cont">
          <p className="input-label">Email</p>
          <input
            type="text"
            name="email"
            placeholder="Emal"
            className="input"
            onChange={changeHandler}
          />
        </div>
        <div className="input-cont">
          <p className="input-label">Password</p>
          <input
            type={isSwitched ? "text" : "password"}
            placeholder="Password"
            name="password"
            className="input"
            id="passwordInput"
            onChange={changeHandler}
          />
          <i
            className={`inside-icon pass-control ${
              isSwitched ? "far fa-eye" : "far fa-eye-slash"
            }`}
            id="passwordEye"
            onClick={clickHandler}
          ></i>
        </div>
        <SaveAcc></SaveAcc>
        <Button text={"Sign in"}></Button>
      </form>
      <div className="bottom-links">
        <Link to="/registration">Don't have account yet?</Link>
        <Link to="/resetpass">Forgot your password?</Link>
      </div>
    </div>
  );
};

export default Auth;
