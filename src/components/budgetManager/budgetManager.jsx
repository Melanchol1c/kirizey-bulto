import React, { Component } from "react";

import "./budgetManager.scss";
import Navbar from "../navbar/navbar";
import ManipulatingBoard from "./manipulatingBoard/manipulatingBoard";
import TransactionsBoard from "./transactionsBoard/transactionsBoard";

class BudgetManager extends Component {
  constructor(props) {
    super(props);

    this.state = {
      id: "",
      type: "",
      name: "",
      value: "",
      date: "",
      expancesAndProfits: []
    };
  }

  render() {
    return (
      <section className="budget-manager-board">
        <Navbar />

        <h1 className="budget-manager-board__title">Budget Manager</h1>
        <div className="budget-manager-board__manager-wrap">
          <div className="budget-manager-board__statistic-board today-statistic">
            <h3 className="statistic-board__title">
              Expenses and profits for today
            </h3>

            {this.renderTodayTransactions()}
          </div>
          <div className="budget-manager-board__manipulating-board">
            <ManipulatingBoard
              nameChange={this.handleNameChange.bind(this)}
              valueChange={this.handleValueChange.bind(this)}
              dateChange={this.handleDateChange.bind(this)}
              getProfit={this.handleGetProfit.bind(this)}
              getExpanse={this.handleGetExpance.bind(this)}
              state={this.state}
            />
          </div>
          <div className="budget-manager-board__statistic-board all-statistic">
            <h3 className="statistic-board__title">
              Expenses and profits for month
            </h3>
            {this.renderMonthTransactions()}
          </div>
        </div>
      </section>
    );
  }

  handleNameChange(e) {
    this.setState({ name: e.target.value });
  }

  handleValueChange(e) {
    this.setState({ value: e.target.value });
  }

  handleDateChange(e) {
    this.setState({ date: e.target.value });
  }

  handleGetProfit() {
    const { name, value, date, expancesAndProfits } = this.state;
    if (!name == "" && !value == "" && !date == "" && value.match(/^\d+$/)) {
      this.setState({
        expancesAndProfits: [
          ...expancesAndProfits,
          {
            id: Date.now(),
            type: "Profit",
            name: name,
            value: value,
            date: date
          }
        ]
      });
      this.successToastBlow();
      this.setState({
        id: "",
        type: "",
        name: "",
        value: "",
        date: ""
      });
    } else {
      this.errorToastBlow();
    }
  }

  handleGetExpance(e) {
    const { name, value, date, expancesAndProfits } = this.state;
    if (!name == "" && !value == "" && !date == "" && value.match(/^\d+$/)) {
      this.setState({
        expancesAndProfits: [
          ...expancesAndProfits,
          {
            id: Date.now(),
            type: "Expanse",
            name: name,
            value: value,
            date: date
          }
        ]
      });
      this.successToastBlow();
      e.preventDefault();
      this.setState({
        id: "",
        type: "",
        name: "",
        value: "",
        date: ""
      });
    } else {
      this.errorToastBlow();
    }
  }

  successToastBlow() {
    window.Materialize.toast(
      `"${this.state.name}" on ${this.state.value}$ succesfully added!`,
      3000
    );
  }

  errorToastBlow() {
    window.Materialize.toast(
      "Error! Please, verify the validity of the data :3",
      3000
    );
  }

  renderTodayTransactions() {
    let todayTransactions = this.state.expancesAndProfits.filter(
      tr =>
        tr.date.substr(0, 2) == new Date().getDate() ||
        tr.date.substr(0, 1) == new Date().getDate()
    );
    if (todayTransactions.length === 0) {
      return (
        <div className="statistic-board__empty-message">
          <p>There no transactions for today</p>
        </div>
      );
    } else {
      return <TransactionsBoard expancesAndProfits={todayTransactions} />;
    }
  }

  renderMonthTransactions() {
    let monthTrans = this.state.expancesAndProfits;
    if (monthTrans.length === 0) {
      return (
        <div className="statistic-board__empty-message">
          <p>There no transactions for this month</p>
        </div>
      );
    } else {
      return <TransactionsBoard expancesAndProfits={monthTrans} />;
    }
  }
}

export default BudgetManager;
