import React from "react";
import { Route } from "react-router-dom";
import Login from "./Login";

export default () => {
  return (
    <>
      <h1>Login</h1>
      {/* Dynamic inner route */}
      <Route path="/" component={Login} />
      {/* <Route path="/register" component={Registration} /> */}
      {/* <Route path="/forgotPassword" component={ForgotPassword} /> */}
    </>
  );
};
