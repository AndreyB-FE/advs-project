import React from "react";
import ReactDOM from "react-dom";
import "./styles/styles.css";
import Home from "./page components/Home";
import Auth from "./page components/Auth";
import Registration from "./page components/Registration";
import ResetPassword from "./page components/ResetPassword";
// import ErrorPage from "./page components/ErrorPage" Switcher ;
import { BrowserRouter as Router, Route } from "react-router-dom";

const ReactRouter = () => {
  return (
    <Router>
      <Route exact path="/" component={Home} />
      <Route path="/login" component={Auth} />
      <Route path="/registration" component={Registration} />
      <Route path="/resetpass" component={ResetPassword} />
      {/* <Route path="/*" component={ErrorPage} /> */}
    </Router>
  );
};

ReactDOM.render(<ReactRouter></ReactRouter>, document.getElementById("root"));

/* <Home></Home>; */
//   <Auth></Auth>
