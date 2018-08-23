import React, { Component } from "react";
import "./transactionsBoard.scss";

class TransactionsBoard extends Component {
  state = {};
  render() {
    return (
      <React.Fragment>
        <ul className="statistic-board__list">
          {this.props.expancesAndProfits.map((tr, i) => (
            <div key={i} className="card blue-grey darken-1 z-depth-5">
              {tr.edit ? (
                <React.Fragment>
                  <i
                    className="material-icons right submit-i"
                    onClick={() => this.props.onEdit(tr)}
                  >
                    done_all
                  </i>

                  <div className="card-content white-text">
                    <span className={this.typeClassHandler(tr.type)}>
                      {tr.type}
                    </span>
                    <p>
                      {tr.type === "Profit"
                        ? `"${tr.name}" ${tr.date} on ${tr.value}$`
                        : `"${tr.name}" ${tr.date} on -${tr.value}$`}
                    </p>
                  </div>
                </React.Fragment>
              ) : (
                <React.Fragment>
                  <i
                    className="material-icons right delete-i"
                    onClick={() => this.props.onDelete(tr.id)}
                  >
                    delete
                  </i>
                  <i
                    className="material-icons right edit-i"
                    onClick={() => this.props.onEdit(tr)}
                  >
                    edit
                  </i>
                  <div className="card-content white-text">
                    <span className={this.typeClassHandler(tr.type)}>
                      {tr.type}
                    </span>
                    <p>
                      {tr.type === "Profit"
                        ? `"${tr.name}" ${tr.date} on ${tr.value}$`
                        : `"${tr.name}" ${tr.date} on -${tr.value}$`}
                    </p>
                  </div>
                </React.Fragment>
              )}
            </div>
          ))}
        </ul>
      </React.Fragment>
    );
  }

  typeClassHandler = type => {
    let className = "card-title ";
    return (className += type === "Profit" ? "profit" : "expanse");
  };

  handleSubmit = () => {
    console.log("qq");
  };
}

export default TransactionsBoard;
