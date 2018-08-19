import React, { Component } from "react";
import { Button, Input, Icon, Row } from "react-materialize";

class AddProfit extends Component {
  state = {};
  render() {
    return (
      <React.Fragment>
        {/* <h3 className="manipulating-board__title">Add Profit</h3> */}
        <Input
          type="text"
          s={6}
          label="Profit name"
          validate
          required
          onChange={this.props.nameChange}
          value={this.props.state.name}
        >
          <Icon>control_point</Icon>
        </Input>
        <Input
          s={6}
          label="Value"
          validate
          required
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
          className="manipulating-board__add-btn btn btn-medium orange darken-4 waves-effect"
          onClick={this.props.getProfit}
        >
          Add Profit
        </Button>
      </React.Fragment>
    );
  }
}

export default AddProfit;
