import React, { Component } from "react";
import "./transactionsBoard.scss";

class TransactionsBoard extends Component {
  render() {
    return (
      <React.Fragment>
        <ul className="statistic-board__list">
          {this.props.expancesAndProfits.map((tr, i) => (
            <div key={i} className="card blue-grey darken-1 z-depth-5">
              <i
                className="material-icons right delete-i"
                onClick={this.props.delEvent}
              >
                delete
              </i>
              <div className="card-content white-text">
                <span className="card-title">{tr.type}</span>
                <p>
                  {tr.type === "Profit"
                    ? `"${tr.name}" ${tr.date} on ${tr.value}$`
                    : `"${tr.name}" ${tr.date} on -${tr.value}$`}
                </p>
              </div>
            </div>
          ))}
        </ul>
      </React.Fragment>
    );
  }
}

export default TransactionsBoard;
