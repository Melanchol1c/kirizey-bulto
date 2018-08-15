import React, { Component } from "react";
import Navbar from "../navbar/navbar";

class TaskManager extends Component {
  state = {};
  render() {
    return (
      <React.Fragment>
        <Navbar />
        <div className="main-board">
          <h1>Task</h1>
        </div>
      </React.Fragment>
    );
  }
}

export default TaskManager;
