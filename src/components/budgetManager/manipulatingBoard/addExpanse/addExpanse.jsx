import React from "react";
import { Button, Input, Icon } from "react-materialize";

const AddExpanse = props => {
  return (
    <React.Fragment>
      <Input
        s={6}
        label="Expense name"
        required
        validate
        onChange={props.nameChange}
        value={props.state.name}
      >
        <Icon>control_point</Icon>
      </Input>
      <Input
        s={6}
        label="Value"
        required
        validate
        onChange={props.valueChange}
        value={props.state.value}
      >
        <Icon>attach_money</Icon>
      </Input>
      <Input
        s={6}
        name="on"
        type="date"
        required
        placeholder="Select date"
        onChange={props.dateChange}
        value={props.state.date}
      >
        <Icon>calendar_today</Icon>
      </Input>
      <Button
        className="manipulating-board__add-btn btn btn-medium orange darken-4 waves-effect"
        onClick={props.getExpanse}
      >
        Add Expense
      </Button>
    </React.Fragment>
  );
};

export default AddExpanse;
