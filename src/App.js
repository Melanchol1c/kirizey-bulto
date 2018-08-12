import React, { Component } from "react";
import "./App.css";
import Navbar from "./components/navbar/navbar";
import MainBoard from "./components/mainBoard/mainBoard";

class App extends Component {
  render() {
    return (
      <React.Fragment>
        <Navbar />
        <MainBoard />
      </React.Fragment>
    );
  }
}

export default App;
