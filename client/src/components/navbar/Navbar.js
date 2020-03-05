// navbar/Navbar.js

import React, { Component } from "react";
import { Switch, Route, Redirect, Link } from "react-router-dom";
import AuthService from "../../services/AuthService";
import logo from "../navbar/logo_transparent.png";
import Landing from '../landing/landing'
import "./Navbar.scss"

class Navbar extends Component {
  constructor(props) {
    super(props);
    this.state = { loggedInUser: null };
    this.service = new AuthService();
  }

  componentWillReceiveProps(nextProps) {
    this.setState({ ...this.state, loggedInUser: nextProps["userInSession"] });
  }

  handleLogout = e => {
    this.props.logout();
  };

  render() {
    if (this.state.loggedInUser) {
      return (
        <nav className="nav-style">
          <div className="header">
            <Link to='/landing'><img src={logo} alt="" height="100"/></Link>
            {/* <h2>Welcome {this.state.loggedInUser.username}</h2> */}

            <ul>
              <li>
                <a onClick={this.handleLogout}>Logout</a>
              </li>
            </ul>

          </div>
        </nav>


      );
    } else {
      return (
        <div>
          <nav className="nav-style">
            <ul>
              <li>
                <Link to='/landing'><img src={logo} alt="" height='60px' /></Link>
              </li>
              <li>
                <Link to="/signup">Signup</Link>
              </li>
              <li>
                <Link to="/login">Login</Link>
              </li>
            </ul>
          </nav>
        </div>
      );
    }
  }
}

export default Navbar;