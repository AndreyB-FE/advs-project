import React, { useState } from "react";
import Logo from "../components/Logo";
import { Link } from "react-router-dom";
import LogBtn from "../components/LogBtn";
import handleRegistration from "../hadlers/backFunctions";

const Registration = () => {
  const [log, setLog] = useState({
    email: "",
    name: "",
    surname: "",
    password: "",
    repPassword: "",
  });

  const [isSwitched, setIsSwitched] = useState(false);
  const [isEqual, setIsEqual] = useState(true);
  const changeHandler = (e) => {
    const { name, value } = e.target;
    setLog({ ...log, [name]: value });
  };
  const submitHandler = (e) => {
    if (!comparePasswords(log.password, log.repPassword)) {
      setIsEqual(false);
    } else {
      setIsEqual(true);
      console.log(handleRegistration(log));
    }
    e.preventDefault();
  };
  const comparePasswords = (pass, repeat) => {
    if (pass !== repeat) return false;
    return true;
  };
  // useEffect(() => {});
  return (
    <div className="inputs-container pw-1">
      <Logo></Logo>
      <form action="#" method="" id="regForm" onSubmit={submitHandler}>
        <div className="input-cont">
          <p className="input-label">Email</p>
          <input
            type="email"
            name="email"
            placeholder="Email"
            className="input"
            onChange={changeHandler}
          />
        </div>
        <div className="input-cont">
          <p className="input-label">Name</p>
          <input
            type="text"
            name="name"
            placeholder="Name"
            className="input"
            onChange={changeHandler}
          />
        </div>
        <div className="input-cont">
          <p className="input-label">Surname</p>
          <input
            type="text"
            name="surname"
            placeholder="Second name"
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
            onClick={() => {
              setIsSwitched(!isSwitched);
            }}
          ></i>
        </div>
        <div className="input-cont">
          {isEqual ? (
            <p className="input-label">Repeat password</p>
          ) : (
            <p className="input-label" style={{ color: "red" }}>
              Passwords are different
            </p>
          )}
          <input
            type={isSwitched ? "text" : "password"}
            placeholder="Repeat password"
            name="repPassword"
            className="input"
            id="repPasswordInput"
            onChange={changeHandler}
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
