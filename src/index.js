import React from "react";
import ReactDOM from "react-dom";
import "./styles/styles.css";
import Home from "./page components/Home";
import Auth from "./page components/Auth";
import Registration from "./page components/Registration";
import ResetPassword from "./page components/ResetPassword";
import Confirmation from "./page components/Confirmation";
import ErrorPage from "./page components/ErrorPage";
import { BrowserRouter as Router, Route, Switch } from "react-router-dom";

const ReactRouter = () => {
  return (
    <Router>
      <Switch>
        <Route exact path="/" component={Home} />
        <Route path="/login" component={Auth} />
        <Route path="/registration" component={Registration} />
        <Route path="/:path/confirmation" component={Confirmation} />
        <Route path="/resetpass" component={ResetPassword} />
        <Route path="*" component={ErrorPage} />
      </Switch>
    </Router>
  );
};

ReactDOM.render(<ReactRouter></ReactRouter>, document.getElementById("root"));

/* <Home></Home>; */
//   <Auth></Auth>
