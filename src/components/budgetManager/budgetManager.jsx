import React, { Component } from "react";
import Navbar from "../navbar/navbar";
import "./budgetManager.scss";

class BudgetManager extends Component {
  state = {};
  render() {
    return (
      <React.Fragment>
        <Navbar />
        <section className="main-board">
          <h1>Budget</h1>
        </section>
      </React.Fragment>
    );
  }
}

export default BudgetManager;
