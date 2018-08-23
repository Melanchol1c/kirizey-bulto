import React, { Component } from "react";
import "./App.css";
import StartMenu from "./components/startMenu/startMenu";
import { BrowserRouter, Route } from "react-router-dom";
import BudgetManager from "./components/budgetManager/budgetManager";
import WeekManager from "./components/weekManager/weekManager";

class App extends Component {
  render() {
    return (
      <BrowserRouter>
        <React.Fragment>
          <Route path="/" exact component={StartMenu} />
          <Route path="/budget_manager" exact component={BudgetManager} />
          <Route path="/week_manager" exact component={WeekManager} />
        </React.Fragment>
      </BrowserRouter>
    );
  }
}

export default App;
