import React, { Component } from "react";
import "./navbar.scss";
import { Link } from "react-router-dom";

class Navbar extends Component {
  state = {};
  render() {
    return (
      <header>
        <nav className="navbar">
          <Link to="/">
            <h2 className="navbar__logo">Balto</h2>
          </Link>
        </nav>
      </header>
    );
  }
}

export default Navbar;
