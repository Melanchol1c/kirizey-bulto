import React, { Component } from "react";
import "./App.css";
import StartMenu from "./components/startMenu/startMenu";
import { BrowserRouter, Route } from "react-router-dom";
import BudgetManager from "./components/budgetManager/budgetManager";
import TaskManager from "./components/taskManager/taskManager";

class App extends Component {
  render() {
    return (
      <BrowserRouter>
        <React.Fragment>
          <Route path="/" exact component={StartMenu} />
          <Route path="/budget_manager" exact component={BudgetManager} />
          <Route path="/task_manager" exact component={TaskManager} />
        </React.Fragment>
      </BrowserRouter>
    );
  }
}

export default App;
