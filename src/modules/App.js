import React from "react";
import { Route } from "react-router-dom";

import RouteGuard from "./RouteGuard";
import Page1 from "./Page1";
import Page2 from "./Page2";
import Dashboard from "./Dashboard";
import Auth from "./Auth";

export default () => {
  return (
    <RouteGuard>
      {/* default route */}
      <Route exact path={"/"} component={Page1} />
      <Route path={"/page2/"} component={Page2} />
      {/* Dashboard - contains dynamic inner routes */}
      <Route path={"/dashboard"} component={Dashboard} />
      <Route path={"/auth"} component={Auth} />
    </RouteGuard>
  );
};
