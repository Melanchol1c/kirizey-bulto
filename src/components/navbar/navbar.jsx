import React from "react";
import "./navbar.scss";
import { Link } from "react-router-dom";

const Navbar = () => {
  return (
    <header>
      <nav className="navbar">
        <Link to="/">
          {/* <a href="/"> */}
          <h2 className="navbar__logo">Balto</h2>
          {/* </a> */}
        </Link>
      </nav>
    </header>
  );
};

export default Navbar;
