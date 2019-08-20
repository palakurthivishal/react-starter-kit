import React from "react";
import ReactDOM from "react-dom";

import "bootstrap/dist/css/bootstrap.min.css";
import "./styles.css";

import { BrowserRouter as Router } from "react-router-dom";

import Header from "./components/Header";
import Footer from "./components/Footer";
import App from "./modules/App";

function Root() {
  return (
    <div className="">
      <Router>
        <Header />
        <App />
        <Footer />
      </Router>
    </div>
  );
}

const rootElement = document.getElementById("root");
ReactDOM.render(<Root />, rootElement);
