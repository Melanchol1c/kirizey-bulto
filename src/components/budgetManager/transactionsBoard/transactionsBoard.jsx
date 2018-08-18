import React from "react";

const TransactionsBoard = ({ expancesAndProfits }) => {
  return (
    <React.Fragment>
      <ul className="statistic-board__list">
        {expancesAndProfits.map((tr, i) => (
          <li key={i}>
            {tr.type === "Profit"
              ? `${tr.type}: "${tr.name}" ${tr.date} on ${tr.value}$`
              : `${tr.type}: "${tr.name}" ${tr.date} on -${tr.value}$`}
          </li>
        ))}
      </ul>
    </React.Fragment>
  );
};

export default TransactionsBoard;
