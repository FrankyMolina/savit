import React from 'react';
import { Link } from 'react-router-dom';

import AssociationService from '../../services/AssociationService';
import AuthService from '../../services/AuthService';

export default class AssociationProfile extends React.Component {
  associationService = new AssociationService();
  authService = new AuthService();

  state = {
    association: {},
    user: {}
  };

  componentDidMount() {
    const id = this.props.match.params.id;

    this.associationService
      .associationById(id)
      .then(association => {
        this.setState({ association });
      })
      .catch(err => console.log(err));

    this.authService
      .loggedin()
      .then(user => {
        this.setState({ user });
      })
      .catch(err => console.log(err));
  }

  // "pets": [],
  // "_id": "5e611f2d1408de3914b943b4",
  // "name": "Asociación protectora de Sevilla",
  // "tel": 622642988,
  // "location": "Sevilla",

  render() {
    console.log(this.state.association.owner, this.state.user._id);
    return (
      <div className="AssociationProfile">
        {this.state.association.owner === this.state.user._id ? (
          <>
            <h1>Perfil de {this.state.association.name}</h1>
            <p>Teléfono de contacto: {this.state.association.tel}</p>
            <p>Localidad: {this.state.association.location}</p>

            <Link to={`/associations/${this.state.association._id}/new-pet`}>
              Crear nuevo anuncio
            </Link>

            <ul>
              <li> Perretes aquí</li>
            </ul>
          </>
        ) : (
          <>
            <h1>Perfil de {this.state.association.name}</h1>
            <p>Teléfono de contacto: {this.state.association.tel}</p>
            <p>Localidad: {this.state.association.location}</p>

            <ul>
              <li> Perretes aquí</li>
            </ul>
          </>
        )}
      </div>
    );
  }
}
