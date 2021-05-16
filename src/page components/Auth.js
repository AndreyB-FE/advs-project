import Logo from "../components/Logo";
import React from "react";
import { Link } from "react-router-dom";
import SaveMe from "../components/SaveMe";
import LogBtn from "../components/LogBtn";

class Auth extends React.Component {
  constructor() {
    super();
    this.state = {
      login: " ",
      password: " ",
      isVisisble: false,
    };
    this.changeHandler = this.changeHandler.bind(this);
    this.clickHandler = this.clickHandler.bind(this);
    this.submitHandler = this.submitHandler.bind(this);
  }
  clickHandler() {
    if (this.state.isVisisble) {
      this.setState({ isVisisble: false });
    } else {
      this.setState({ isVisisble: true });
    }
  }
  changeHandler(e) {
    const { name, value } = e.target;
    this.setState({ [name]: value });
  }
  submitHandler(e) {
    e.preventDefault();
  }
  render() {
    return (
      <div className="inputs-container pw-1">
        <Logo></Logo>
        <form action="#" method="" id="loginForm" onSubmit={this.submitHandler}>
          <div className="input-cont">
            <input
              type="text"
              name="login"
              placeholder="Login"
              className="input"
              onChange={this.changeHandler}
            />
          </div>
          <div className="input-cont">
            <input
              type={this.state.isVisisble ? "text" : "password"}
              placeholder="Password"
              name="password"
              className="input"
              id="passwordInput"
              onChange={this.changeHandler}
            />
            <i
              className={`inside-icon pass-control ${
                this.state.isVisisble ? "far fa-eye-slash" : "far fa-eye"
              }`}
              id="passwordEye"
              onClick={this.clickHandler}
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
  }
}

export default Auth;
