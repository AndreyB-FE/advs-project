import React from "react";
import { Link } from "react-router-dom";
import Logo from "../components/Logo";
import "../styles/error.scss";

const ErrorPage = () => {
  return (
    <div className="center-container">
      <Logo></Logo>
      <h1 className="mt-2">404</h1>
      <h2 className="mh-2">Oups, seems like it's wrong path</h2>
      <Link to="/">
        <button className="big-btn">Back to Home page</button>
      </Link>
    </div>
  );
};

export default ErrorPage;
