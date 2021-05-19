import React from "react";
import { Link } from "react-router-dom";
import "../styles/logo.scss";

const Logo = () => {
  return (
    <div className="logo">
      <Link to="/">Retrival</Link>
    </div>
  );
};

export default Logo;
