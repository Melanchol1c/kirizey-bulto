import React from "react";
import AddProfit from "./addProfit/addProfit";
import AddExpanse from "./addExpanse/addExpanse";

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
      <AddProfit
        nameChange={nameChange}
        valueChange={valueChange}
        dateChange={dateChange}
        getProfit={getProfit}
        state={state}
      />
      <AddExpanse
        nameChange={nameChange}
        valueChange={valueChange}
        dateChange={dateChange}
        getExpanse={getExpanse}
        state={state}
      />
    </React.Fragment>
  );
};

export default ManipulatingBoard;
