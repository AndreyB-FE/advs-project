import React from "react";
import Button from "./Button";
import SearchField from "./SearchField";
import { Link } from "react-router-dom";
import Logo from "../components/Logo";
import "../styles/header.scss";

const Header = () => {
  return (
    <header>
      <Logo></Logo>
      <SearchField></SearchField>
      <div className="buttons">
        <button type="button" className="btn post-button">
          <i className="fas fa-plus plus"></i>
          Post an Ad
        </button>
        <Link to="/login">
          <Button text="Sign in" type="button"></Button>
        </Link>
      </div>
    </header>
  );
};

export default Header;
