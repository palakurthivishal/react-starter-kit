import React from "react";
import { Route } from "react-router-dom";
import Analytics from "./Analytics";

export default () => {
  return (
    <>
      <h1>Dashboard</h1>
      {/* Dynamic inner route */}
      <Route path="/" component={Analytics} />
    </>
  );
};
