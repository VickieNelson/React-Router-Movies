import React from "react";
import ReactDOM from "react-dom";

// Add browser router and change it to router for ease
import { BrowserRouter as Router } from "react-router-dom";

import "./index.css";
import App from "./App";

// ReactDOM.render(<App />, document.getElementById("root"));

// wrap App in Router
ReactDOM.render(
  <Router>
    <App />
  </Router>,
  document.getElementById("root")
);
