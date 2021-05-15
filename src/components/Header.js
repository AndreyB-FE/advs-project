import React from "react";
import LogBtn from "./LogBtn";
import SearchField from "./SearchField";
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
        <LogBtn></LogBtn>
      </div>
    </header>
  );
};

export default Header;
