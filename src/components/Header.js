import React from "react";
import LogBtn from "./LogBtn";
import SearchField from "./SearchField";
import { Link } from "react-router-dom";
import Logo from "../components/Logo";

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
          <LogBtn text="Sign in" type="button"></LogBtn>
        </Link>
      </div>
    </header>
  );
};

export default Header;
