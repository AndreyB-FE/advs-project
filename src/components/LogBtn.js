import React from "react";
import { Link } from "react-router-dom";

const LogBtn = () => {
  return (
    <Link to="/login">
      <button type="button" className="btn reg">
        Log in
      </button>
    </Link>
  );
};

export default LogBtn;
