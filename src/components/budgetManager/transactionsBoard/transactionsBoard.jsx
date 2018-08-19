import React from "react";
import { Dropdown, NavItem, Button } from "react-materialize";
import "./transactionsBoard.scss";

const TransactionsBoard = ({ expancesAndProfits }) => {
  return (
    <React.Fragment>
      <ul className="statistic-board__list">
        {expancesAndProfits.map((tr, i) => (
          <React.Fragment key={i}>
            <div className="card blue-grey darken-1  z-depth-5">
              <Dropdown
                trigger={
                  <i className="material-icons right activator">more_vert</i>
                }
              >
                <NavItem>
                  <i className="material-icons edit-i">edit</i>
                </NavItem>
                <NavItem>
                  <i className="material-icons delete-i">delete</i>
                </NavItem>
              </Dropdown>
              <div className="card-content white-text">
                <span className="card-title">{tr.type}</span>
                <p>
                  {tr.type === "Profit"
                    ? `"${tr.name}" ${tr.date} on ${tr.value}$`
                    : `"${tr.name}" ${tr.date} on -${tr.value}$`}
                </p>
              </div>
            </div>
          </React.Fragment>
        ))}
      </ul>
    </React.Fragment>
  );
};

export default TransactionsBoard;
