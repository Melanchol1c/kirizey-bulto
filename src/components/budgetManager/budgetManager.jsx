import React, { Component } from "react";
import Navbar from "../navbar/navbar";
import "./budgetManager.scss";
import { Button, Input, Icon, Row } from "react-materialize";

class BudgetManager extends Component {
  constructor(props) {
    super(props);

    this.state = {
      id: Date.now(),
      name: "",
      value: "",
      date: "",
      monthEnP: [
        {
          id: 1,
          type: "profit",
          name: "qdasd",
          value: 1000,
          date: "12/12/12"
        },
        {
          id: 2,
          type: "expanse",
          name: "qdasd",
          value: 1000,
          date: "12/34/44"
        },
        {
          id: 3,
          type: "profit",
          name: "qdasd",
          value: 1000,
          date: "22/22/22"
        }
      ]
    };
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
    this.setState({
      monthEnP: [
        ...this.state.monthEnP,
        {
          type: "profit",
          name: this.state.name,
          value: this.state.value,
          date: this.state.date
        }
      ]
    });
    this.setState({ name: "", value: "", date: "" });
  }

  handleGetExpance() {
    this.setState({
      monthEnP: [
        ...this.state.monthEnP,
        {
          type: "expance",
          name: this.state.name,
          value: this.state.value,
          date: this.state.date
        }
      ]
    });
    this.setState({ name: "", value: "", date: "" });
  }

  render() {
    return (
      <React.Fragment>
        <section className="budget-manager-board">
          <Navbar />

          <h1 className="budget-manager-board__title">Budget Manager</h1>
          <div className="budget-manager-board__manager-wrap">
            <div className="budget-manager-board__statistic-board today-statistic">
              <h3 className="statistic-board__title">
                Expenses and profits for today
              </h3>

              <ul className="statistic-board__list">
                {this.state.monthEnP.map((exp, i) => (
                  <li key={i}>
                    {exp.date.substr(0, 2) == new Date().getDate()
                      ? exp.type === "profit"
                        ? exp.type +
                          ": " +
                          exp.date +
                          " " +
                          exp.name +
                          " " +
                          exp.value +
                          "$"
                        : exp.type +
                          ": " +
                          exp.date +
                          " " +
                          exp.name +
                          " " +
                          "-" +
                          exp.value +
                          "$"
                      : ""}
                  </li>
                ))}
              </ul>
            </div>
            <div className="budget-manager-board__manipulating-board">
              <h3 className="manipulating-board__title">Add Profit</h3>
              <form action="">
                <Row>
                  <Input
                    type="text"
                    s={6}
                    label="Profit name"
                    validate
                    required
                    value={this.state.name}
                    onChange={this.handleNameChange.bind(this)}
                  >
                    <Icon>control_point</Icon>
                  </Input>
                  <Input
                    s={6}
                    label="Value"
                    validate
                    required
                    value={this.state.value}
                    onChange={this.handleValueChange.bind(this)}
                  >
                    <Icon>attach_money</Icon>
                  </Input>
                  <Input
                    s={6}
                    name="on"
                    type="date"
                    required
                    placeholder="Select date"
                    onChange={this.handleDateChange.bind(this)}
                  >
                    <Icon>calendar_today</Icon>
                  </Input>
                  <Button
                    className="manipulating-board__add-btn waves-effect waves-light"
                    onClick={this.handleGetProfit.bind(this)}
                  >
                    Add Profit
                  </Button>
                </Row>
              </form>
              <h3 className="manipulating-board__title">Add Expense</h3>
              <Row>
                <Input
                  s={6}
                  label="Expense name"
                  required
                  validate
                  onChange={this.handleNameChange.bind(this)}
                >
                  <Icon>control_point</Icon>
                </Input>
                <Input
                  s={6}
                  label="Value"
                  required
                  validate
                  onChange={this.handleValueChange.bind(this)}
                >
                  <Icon>attach_money</Icon>
                </Input>
                <Input
                  s={6}
                  name="on"
                  type="date"
                  required
                  placeholder="Select date"
                  onChange={this.handleDateChange.bind(this)}
                >
                  <Icon>calendar_today</Icon>
                </Input>
                <Button
                  className="manipulating-board__add-btn waves-effect waves-light"
                  onClick={this.handleGetExpance.bind(this)}
                >
                  Add Expense
                </Button>
              </Row>

              <Button
                floating
                fab="horizontal"
                icon="mode_edit"
                className="red manipulating-board__add-btn"
                large
              >
                <Button floating icon="add" className="green" />
                <Button floating icon="delete" className="red" />
              </Button>
            </div>
            <div className="budget-manager-board__statistic-board all-statistic">
              <h3 className="statistic-board__title">
                Expenses and profits for month
              </h3>
              <ul className="statistic-board__list">
                {this.state.monthEnP.map((exp, i) => (
                  <li key={i}>
                    {exp.type === "profit"
                      ? exp.type +
                        ": " +
                        exp.date +
                        " " +
                        exp.name +
                        " " +
                        exp.value +
                        "$"
                      : exp.type +
                        ": " +
                        exp.date +
                        " " +
                        exp.name +
                        " " +
                        "-" +
                        exp.value +
                        "$"}
                  </li>
                ))}
              </ul>
            </div>
          </div>
        </section>
      </React.Fragment>
    );
  }
}

export default BudgetManager;
