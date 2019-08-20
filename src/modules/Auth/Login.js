import React, { useEffect } from "react";
import HttpService from "../../services/HttpService";

export default () => {
  // on login button click
  const onLoginButtonClick = () => {
    HttpService.login({ username: "test", password: "passowrd" })
      .then(
        () => {
          // success handler
        },
        () => {
          // error handler
        }
      )
      .finally(() => {
        // will be called after above success/error
      });
  };

  return <h2>Login</h2>;
};
