import React, { Component } from "react";
import { Link } from "react-router-dom";

export class Nav extends Component {
  render() {
    return (
      
      <nav className="navbar navbar-expand-sm bg-light navbar-light">
        <ul className="navbar-nav">
          <li className="nav-item">
            <Link className="nav-link" to="/">Dog Matcher</Link>
          </li>
          <li className="nav-item">
            <Link className="nav-link" to="/liked">Liked List</Link>
          </li>
        </ul>
      </nav>
    );
  }
}

export default Nav;


