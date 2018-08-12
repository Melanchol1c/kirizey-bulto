import React, { Component } from "react";
import "./navbar.scss";

class Navbar extends Component {
  state = {};
  render() {
    return (
      <header>
        <nav className="navbar">
          <h2 className="navbar__logo">Balto</h2>
        </nav>
      </header>
    );
  }
}

export default Navbar;
