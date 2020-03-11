import React, { Component } from "react";
import { Switch, Route, Redirect, Link } from "react-router-dom";

import Signup from "./components/auth/Signup";
import Login from "./components/auth/Login";
import Navbar from "./components/navbar/Navbar";
import Landing from "./components/landing/landing";
import Pets from "./components/Pets/Pets"
import PetProfile from "./components/PetProfile/PetProfile"
import Associations from "./components/association/Associations"
import AssociationProfile from "./components/AssociationProfile/AssociationProfile"
import NewAssociation from "./components/NewAssociation/NewAssociation"
import NewPet from "./components/NewPet/NewPet"


import AuthService from "./services/AuthService";

import "./App.scss";

class App extends Component {
  state = { loggedInUser: null };
  service = new AuthService();

  componentDidMount() {
    this.fetchUser()
  }

  getUser = userObj => {
    this.setState({
      loggedInUser: userObj,
    });
  };

  logout = () => {
    this.service.logout().then(() => {
      this.setState({ loggedInUser: null });
    });
  };

  fetchUser() {
    this.service
      .loggedin()
      .then(response => {
        this.setState({
          loggedInUser: response,
        });
      })
      .catch(err => {
        this.setState({
          loggedInUser: false,
        });
      });
  }

  render() {
    return (
      <div className="App">
        <header className="App-header">
          <Navbar userInSession={this.state.loggedInUser} logout={this.logout} />
        </header>
        {this.state.loggedInUser ? (
          <Switch>
            {/* Logged in application routes */}

            <Route exact path="/pets" component={Pets} />
            <Route exact path="/pet/:id" component={PetProfile} />
            <Route exact path="/associations" component={Associations}/>
            <Route path="/associations/:id/new-pet" component={NewPet}/>
            <Route path="/associations/:id" component={AssociationProfile}/>
            <Route exact path="/new-association" component={NewAssociation}/>
            <Route render={() => <Redirect to="/pets" />} />
          </Switch>
        ) : (
            <Switch>
              <Route exact path="/signup" render={() => <Signup getUser={this.getUser} />} />
              <Route exact path="/login" render={() => <Login getUser={this.getUser} />} />

              <Route exact path="/" component={Landing} />
              <Route render={() => <Redirect to="/" />} />
            </Switch>
          )}
      </div>
    )
  }
}

export default App;
