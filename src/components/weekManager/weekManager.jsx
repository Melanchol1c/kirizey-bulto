import React, { Component } from "react";
import Navbar from "../navbar/navbar";
import "./weekManager.scss";
import { Icon, Modal, Input } from "react-materialize";
import AddTask from "./addTask/addTask";

class WeekManager extends Component {
  state = {
    taskNewName: "",
    dayNewTask: "",
    days: [
      {
        day: "Monday",
        tasks: []
      },
      {
        day: "Tuesday",
        tasks: []
      },
      {
        day: "Wednesday",
        tasks: [
          { id: 5, task: "Do something", complete: false, edit: false },
          { id: 6, task: "Do something 2", complete: false, edit: false }
        ]
      },
      {
        day: "Thursday",
        tasks: []
      },
      {
        day: "Friday",
        tasks: []
      },
      {
        day: "Saturday",
        tasks: [
          { id: 10, task: "Do something 2", complete: false, edit: false }
        ]
      },
      {
        day: "Sunday",
        tasks: []
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
                    {d.tasks.map(
                      t =>
                        t.edit ? (
                          <div className="task" key={t.id}>
                            <div
                              className={this.handleTaskClass(t)}
                              onClick={() => this.handleCompleteTask(d, t)}
                            />
                            <p className={this.handleDescriptionClass(t)}>
                              <input
                                className="edit-input"
                                onChange={this.handleTaskNameChange}
                                value={this.state.taskNewName}
                              />
                            </p>
                            <div className="task__actions">
                              <i
                                className="material-icons submit-i"
                                onClick={() => this.handleEdit(d, t)}
                              >
                                done_all
                              </i>
                            </div>
                          </div>
                        ) : (
                          <div className="task" key={t.id}>
                            <div
                              className={this.handleTaskClass(t)}
                              onClick={() => this.handleCompleteTask(d, t)}
                            />
                            <p className={this.handleDescriptionClass(t)}>
                              {t.task}
                            </p>
                            <div className="task__actions">
                              {t.complete ? (
                                <i
                                  className="material-icons right delete-i"
                                  onClick={() => this.handleDelete(d, t)}
                                >
                                  delete
                                </i>
                              ) : (
                                <React.Fragment>
                                  <i
                                    className="material-icons  edit-i"
                                    onClick={() => this.handleEdit(d, t)}
                                  >
                                    edit
                                  </i>
                                  <i
                                    className="material-icons right delete-i"
                                    onClick={() => this.handleDelete(d, t)}
                                  >
                                    delete
                                  </i>
                                </React.Fragment>
                              )}
                            </div>
                          </div>
                        )
                    )}
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

  handleEdit = (day, task) => {
    let days = [...this.state.days];
    let tasks = [...day.tasks];
    const doneTask = tasks.filter(t => t.id === task.id)[0];
    this.setState({ taskNewName: task.task });

    if (task.edit) {
      task.task = this.state.taskNewName;
      doneTask.edit = !doneTask.edit;
      this.setState({ taskNewName: "" });
    } else {
      doneTask.edit = !doneTask.edit;
    }
    this.setState({ days });
  };

  handleCompleteTask = (day, task) => {
    let days = [...this.state.days];
    let tasks = [...day.tasks];
    const doneTask = tasks.filter(t => t.id === task.id)[0];
    doneTask.complete = !doneTask.complete;
    this.setState({ days });
  };

  handleCreateTask = day => {
    let days = [...this.state.days];
    const i = days.indexOf(day);

    const newTask = {
      id: Date.now(),
      task: this.state.taskNewName,
      complete: false,
      edit: false
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

  handleDelete = (day, task) => {
    let days = [...this.state.days];
    let tasks = [...day.tasks];
    const newTasks = tasks.filter(t => t.id !== task.id);
    tasks = newTasks;
    days[days.indexOf(day)].tasks = tasks;
    this.setState({ days });
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
