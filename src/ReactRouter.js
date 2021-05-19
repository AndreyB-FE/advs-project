import React from "react";
import Home from "./pages/Home";
import Auth from "./pages/Auth";
import Registration from "./pages/Registration";
import ResetPassword from "./pages/ResetPassword";
import Confirmation from "./pages/Confirmation";
import ErrorPage from "./pages/ErrorPage";
import { BrowserRouter as Router, Route, Switch } from "react-router-dom";

const ReactRouter = () => {
  return (
    <Router>
      <Switch>
        <Route exact path="/" component={Home} />
        <Route path="/login" component={Auth} />
        <Route path="/resetpass/confirmation" component={Confirmation} />
        <Route path="/registration/confirmation" component={Confirmation} />
        <Route path="/registration" component={Registration} />
        <Route path="/resetpass" component={ResetPassword} />
        <Route path="*" component={ErrorPage} />
      </Switch>
    </Router>
  );
};

export default ReactRouter;
