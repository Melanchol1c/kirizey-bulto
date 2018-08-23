import React, { Component } from "react";
import Navbar from "../navbar/navbar";
import "./weekManager.scss";
import { Icon, Modal } from "react-materialize";
import AddTask from "./addTask/addTask";

class WeekManager extends Component {
  state = {
    taskNewName: "",
    dayNewTask: "",
    days: [
      {
        day: "Monday",
        tasks: [
          { id: 1, task: "Do something", complete: false },
          { id: 2, task: "Do something 2", complete: false }
        ]
      },
      {
        day: "Tuesday",
        tasks: [
          { id: 3, task: "Do something", complete: false },
          { id: 4, task: "Do something 2", complete: false }
        ]
      },
      {
        day: "Wednesday",
        tasks: [
          { id: 5, task: "Do something", complete: false },
          { id: 6, task: "Do something 2", complete: false }
        ]
      },
      {
        day: "Thursday",
        tasks: [
          { id: 7, task: "Do something", complete: false },
          { id: 8, task: "Do something 2", complete: false }
        ]
      },
      {
        day: "Friday",
        tasks: [{ id: 9, task: "Do something 2", complete: false }]
      },
      {
        day: "Saturday",
        tasks: [{ id: 10, task: "Do something 2", complete: false }]
      },
      {
        day: "Sunday",
        tasks: [
          { id: 11, task: "Do something", complete: false },
          { id: 12, task: "Do something 2", complete: false }
        ]
      }
    ]
  };
  render() {
    return (
      <React.Fragment>
        <div className="wrapper">
          <Navbar />
          <section className="week-manager-board">
            <h1 className="week-manager-board__title">Week Manager</h1>
            <div className="week-manager-board__days-section">
              {this.state.days.map(d => (
                <div
                  key={d.day}
                  className="card blue-grey darken-1 z-depth-5 days-section__day "
                >
                  <div className="card-content white-text">
                    <span className="card-title">{d.day}</span>
                    {d.tasks.map(t => (
                      <div
                        className="task"
                        key={t.id}
                        onClick={() => this.handleCompleteTask(d, t)}
                      >
                        <div className={this.handleTaskClass(t)} />
                        <p className={this.handleDescriptionClass(t)}>
                          {t.task}
                        </p>
                      </div>
                    ))}
                  </div>
                  <div className="card-action">
                    <Modal
                      header={`Add Profit on ${d.day}`}
                      fixedFooter
                      trigger={
                        <a href="#">
                          <Icon>add_circle_outline</Icon>
                          Add a new task
                        </a>
                      }
                    >
                      <AddTask
                        handleTaskNameChange={this.handleTaskNameChange}
                        createTask={() => this.handleCreateTask(d)}
                        taskNewName={this.state.taskNewName}
                        dayNewTask={d.day}
                      />
                    </Modal>
                  </div>
                </div>
              ))}
            </div>
          </section>
        </div>
      </React.Fragment>
    );
  }

  handleCreateTask = day => {
    let days = [...this.state.days];
    const i = days.indexOf(day);

    const newTask = {
      id: Date.now(),
      task: this.state.taskNewName,
      complete: false
    };
    let tasks = [...day.tasks, newTask];
    days[i] = { ...days[i], tasks };

    if (this.state.taskNewName == "") {
      this.errorToastBlow();
    } else {
      this.setState({ days, taskNewName: "" });
      this.successToastBlow(day.day);
    }
  };

  successToastBlow(day) {
    window.Materialize.toast(
      `Task "${this.state.taskNewName}" on ${day} succesfully added!`,
      3000
    );
  }

  errorToastBlow() {
    window.Materialize.toast(
      "Error! Please, verify the validity of the data :3",
      3000
    );
  }

  handleTaskNameChange = e => {
    this.setState({ taskNewName: e.target.value });
  };
  handleNewTaskDay = () => {};

  handleCompleteTask = (day, task) => {
    let days = [...this.state.days];
    let tasks = [...day.tasks];
    const doneTask = tasks.filter(t => t.id === task.id)[0];
    doneTask.complete = !doneTask.complete;
    this.setState({ days });
  };

  handleDescriptionClass = task => {
    let className = "task__description ";
    return (className =
      task.complete === true ? (className += "done-descr") : className);
  };

  handleTaskClass = task => {
    let className = "input ";
    return (className =
      task.complete === true ? (className += "done") : className);
  };
}

export default WeekManager;
