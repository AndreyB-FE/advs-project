import React from "react";
import "../styles/searchField.scss";

const SearchField = () => {
  return (
    <div className="input-cont search">
      <input
        type="text"
        className="the-search-input input"
        placeholder="search"
      />
      <i className="inside-icon fas fa-search"></i>
    </div>
  );
};

export default SearchField;
