import React from "react";
import { Button, Input, Icon, Row } from "react-materialize";

const ManipulatingBoard = ({
  nameChange,
  valueChange,
  dateChange,
  getProfit,
  getExpanse
}) => {
  return (
    <React.Fragment>
      <h3 className="manipulating-board__title">Add Profit</h3>
      <Row>
        <Input
          type="text"
          s={6}
          label="Profit name"
          validate
          required
          onChange={nameChange}
        >
          <Icon>control_point</Icon>
        </Input>
        <Input s={6} label="Value" validate required onChange={valueChange}>
          <Icon>attach_money</Icon>
        </Input>
        <Input
          s={6}
          name="on"
          type="date"
          required
          placeholder="Select date"
          onChange={dateChange}
        >
          <Icon>calendar_today</Icon>
        </Input>
        <Button
          className="manipulating-board__add-btn waves-effect waves-light"
          onClick={getProfit}
        >
          Add Profit
        </Button>
      </Row>
      <h3 className="manipulating-board__title">Add Expense</h3>
      <Row>
        <Input
          s={6}
          label="Expense name"
          required
          validate
          onChange={nameChange}
        >
          <Icon>control_point</Icon>
        </Input>
        <Input s={6} label="Value" required validate onChange={valueChange}>
          <Icon>attach_money</Icon>
        </Input>
        <Input
          s={6}
          name="on"
          type="date"
          required
          placeholder="Select date"
          onChange={dateChange}
        >
          <Icon>calendar_today</Icon>
        </Input>
        <Button
          className="manipulating-board__add-btn waves-effect waves-light"
          onClick={getExpanse}
        >
          Add Expense
        </Button>
      </Row>
    </React.Fragment>
  );
};

export default ManipulatingBoard;
