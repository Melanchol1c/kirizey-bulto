import React, { Component } from "react";
import { Icon, Input, Button } from "react-materialize";
import "./add.Task.scss";

class AddTask extends Component {
  state = {};
  render() {
    return (
      <div className="modal__contento">
        <Input
          s={6}
          label="Task description"
          required
          validate
          onChange={this.props.handleTaskNameChange}
          value={this.props.taskNewName}
        />

        <Button
          className="manipulating-board__add-btn btn btn-medium orange darken-4 waves-effect"
          onClick={this.props.createTask}
        >
          Add Task
        </Button>
      </div>
    );
  }
}

export default AddTask;
