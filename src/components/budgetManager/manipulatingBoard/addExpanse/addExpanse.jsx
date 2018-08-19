import React, { Component } from "react";
import { Button, Input, Icon, Row } from "react-materialize";

class AddExpanse extends Component {
  state = {};
  render() {
    return (
      <React.Fragment>
        {/* <h3 className="manipulating-board__title">Add Expense</h3> */}
        <Row>
          <Input
            s={6}
            label="Expense name"
            required
            validate
            onChange={this.props.nameChange}
            value={this.props.state.name}
          >
            <Icon>control_point</Icon>
          </Input>
          <Input
            s={6}
            label="Value"
            required
            validate
            onChange={this.props.valueChange}
            value={this.props.state.value}
          >
            <Icon>attach_money</Icon>
          </Input>
          <Input
            s={6}
            name="on"
            type="date"
            required
            placeholder="Select date"
            onChange={this.props.dateChange}
            value={this.props.state.date}
          >
            <Icon>calendar_today</Icon>
          </Input>
          <Button
            className="manipulating-board__add-btn waves-effect waves-light"
            onClick={this.props.getExpanse}
          >
            Add Expense
          </Button>
        </Row>
      </React.Fragment>
    );
  }
}

export default AddExpanse;
