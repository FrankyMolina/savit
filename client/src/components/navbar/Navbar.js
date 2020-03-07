import React, { Component } from "react";
import { Link } from "react-router-dom";

import logo from "../navbar/logo_transparent.png";

import "./Navbar.scss"

export default class Navbar extends Component {
  render() {
    return (
      <nav className="Navbar">
        <Link to='/'><img src={logo} alt="savit-logo" height="80" /></Link>

        <ul className="Navbar__list">
          {this.props.userInSession
            ? (
              <li>
                <a onClick={this.props.logout}>Logout</a>
              </li>
            )
            : (
              <>
                <li>
                  <Link to="/signup">Signup</Link>
                </li>
                <li>
                  <Link to="/login">Login</Link>
                </li>
              </>
            )}
        </ul>
      </nav>
    )
  }
}
