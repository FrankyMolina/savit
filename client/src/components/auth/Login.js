// auth/Signup.js
import React, { Component } from 'react';
import { Link } from 'react-router-dom';
import AuthService from '../../services/AuthService';

import './Login.scss';

class Login extends Component {
  constructor(props) {
    super(props);
    this.state = { username: '', password: '' };
    this.service = new AuthService();
  }

  handleFormSubmit = event => {
    event.preventDefault();
    const username = this.state.username;
    const password = this.state.password;

    this.service
      .login(username, password)
      .then(response => {
        this.setState({
          username: username,
          password: password,
          error: false
        });

        this.props.getUser(response);
      })
      .catch(error => {
        this.setState({
          username: username,
          password: password,
          error: true
        });
      });
  };

  handleChange = event => {
    const { name, value } = event.target;
    this.setState({ [name]: value });
  };

  render() {
    return (
      <div className="Login">
        <h3>Por favor, inicie sesión para entrar en Savit :)</h3>

        <form onSubmit={this.handleFormSubmit} className="Login__form">
          <fieldset className="username">
            <label>Username</label>
            <input
              type="text"
              name="username"
              value={this.state.username}
              onChange={e => this.handleChange(e)}
            />
          </fieldset>

          <fieldset className="pw">
            <label>Password</label>
            <input
              type="password"
              name="password"
              value={this.state.password}
              onChange={e => this.handleChange(e)}
            />
          </fieldset>

          <input type="submit" value="Login" className="btn"/>
        </form>

        <h1>{this.state.error ? 'Error' : ''}</h1>
      </div>
    );
  }
}

export default Login;
