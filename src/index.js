import React from "react";
import ReactDOM from "react-dom";
import "./index.css";
import App from "./App";
import registerServiceWorker from "./registerServiceWorker";
import StartMenu from "./components/startMenu/startMenu";

ReactDOM.render(<StartMenu />, document.getElementById("root"));
registerServiceWorker();
