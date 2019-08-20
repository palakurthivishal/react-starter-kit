// Component to monitor and safe guard route changes

import React, { useState, useEffect } from "react";

import { withRouter } from "react-router-dom";

const Guard = props => {
  const [prevRoute, setPrevRoute] = useState();

  // listen to route change events on component load
  useEffect(() => {
    props.history.listen(route => {
      console.log(route);
      // place to write validations on the route change
      // can redirect the user from here
      // props.history.push('/someError');
      setPrevRoute(route);
    });
  }, []);

  return props.children;
};

export default withRouter(Guard);
