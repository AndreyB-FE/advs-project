import React from "react";
import Logo from "../components/Logo";
import { Link } from "react-router-dom";
import LogBtn from "../components/LogBtn";

class Registration extends React.Component {
  constructor() {
    super();
    this.state = {
      email: "",
      name: "",
      surname: "",
      password: " ",
      repPassword: "",
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
    console.log(this.state);
  }
  render() {
    return (
      <div className="inputs-container pw-1">
        <Logo></Logo>
        <form action="#" method="" id="regForm" onSubmit={this.submitHandler}>
          <div className="input-cont">
            <input
              type="email"
              name="email"
              placeholder="Email"
              className="input"
              onChange={this.changeHandler}
            />
          </div>
          <div className="input-cont">
            <input
              type="text"
              name="name"
              placeholder="Name"
              className="input"
              onChange={this.changeHandler}
            />
          </div>
          <div className="input-cont">
            <input
              type="text"
              name="surname"
              placeholder="Second name"
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
          <div className="input-cont">
            <input
              type={this.state.isVisisble ? "text" : "password"}
              placeholder="Repeat password"
              name="repPassword"
              className="input"
              id="repPasswordInput"
              onChange={this.changeHandler}
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
  }
}

export default Registration;
