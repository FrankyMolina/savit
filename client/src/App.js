import React, { Component } from "react";
import "./App.scss";
import { Switch, Route, Redirect, Link } from "react-router-dom";

// import ProjectList from './components/projects/ProjectList';
import Navbar from "./components/navbar/Navbar";
// import ProjectDetails from './components/projects/ProjectDetails';
import Signup from "./components/auth/Signup";
import Login from "./components/auth/Login";
import AuthService from "./services/AuthService";
import Contents from "./components/contents/Contents";
import Landing from "./components/landing/landing";

//App es la aplicación base, que se sirve del servicio AuthService para conectar con la bbdd
class App extends Component {
  //en el tiempo de construcción de la aplicación, creamos una instancia del authservice
  constructor(props) {
    super(props);
    //arrancamos el estado con un valor de loggedInUser con nada (luego lo vamos a reemplazar con el valor real)
    this.state = { loggedInUser: null };
    this.service = new AuthService();

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

  //este método vuelca la información del usuario y lo guarda en el state de app que siempre puedes revisitar
  fetchUser() {
    return this.service
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
    //aqui hacemos rendering condicional dependiendo de si tenemos un usuario logeado o no
    if (this.state.loggedInUser) {
      //en este caso mostramos los contenidos ya que hay usuario
      return (
        <React.Fragment>
          <Redirect to="/home" />

          <div className="App">
            <header className="App-header">
              <Navbar userInSession={this.state.loggedInUser} logout={this.logout} />
              {/* aqui simplemente se muestra un lorem ipsum genérico para que veáis contenidos que solo se muestran a usuarios logeados */}
            </header>
            <Contents />
          </div>

          <Switch>
            {/* <Route exact path='/landing' component={Landing} /> */}
          </Switch>
        </React.Fragment>
      );
    } else {
      //si no estás logeado, mostrar opcionalmente o login o signup
      return (
        <React.Fragment>
          <Redirect to="/landing" />

          <div className="App">
            <header className="App-header">
              <Navbar userInSession={this.state.loggedInUser} logout={this.logout} /> 
            </header>
            
            <Switch>
                <Route exact path="/signup" render={() => <Signup getUser={this.getUser} />} />
                <Route exact path="/login" render={() => <Login getUser={this.getUser} />} />
                <Route exact path='/landing' component={Landing}/>

            </Switch>
          </div>
        </React.Fragment>
      );
    }
  }
}

export default App;
