import React from "react";
import AddProfit from "./addProfit/addProfit";
import AddExpanse from "./addExpanse/addExpanse";
import { Modal, Button } from "react-materialize";

const ManipulatingBoard = ({
  nameChange,
  valueChange,
  dateChange,
  getProfit,
  getExpanse,
  state
}) => {
  return (
    <React.Fragment>
      <div className="modal-triggers">
        <Modal
          header="Add Profit"
          fixedFooter
          trigger={
            <Button className="btn btn-large orange darken-4 waves-effect pulse">
              ADD PROFIT
            </Button>
          }
        >
          <AddProfit
            nameChange={nameChange}
            valueChange={valueChange}
            dateChange={dateChange}
            getProfit={getProfit}
            state={state}
          />
        </Modal>
        <Modal
          header="Add Expanse"
          fixedFooter
          trigger={
            <Button className="btn btn-large orange darken-4 waves-effect pulse">
              ADD EXPANSE
            </Button>
          }
        >
          <AddExpanse
            nameChange={nameChange}
            valueChange={valueChange}
            dateChange={dateChange}
            getProfit={getExpanse}
            state={state}
          />
        </Modal>
      </div>
      {/* <AddProfit
        nameChange={nameChange}
        valueChange={valueChange}
        dateChange={dateChange}
        getProfit={getProfit}
        state={state}
      /> */}
      {/* <AddExpanse
        nameChange={nameChange}
        valueChange={valueChange}
        dateChange={dateChange}
        getExpanse={getExpanse}
        state={state}
      /> */}
    </React.Fragment>
  );
};

export default ManipulatingBoard;
