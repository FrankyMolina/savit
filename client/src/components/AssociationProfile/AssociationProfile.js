import React from 'react';
import { Link } from 'react-router-dom';

import AssociationService from '../../services/AssociationService';

export default class AssociationProfile extends React.Component {
  associationService = new AssociationService();

  state = {
    association: {}
  };

  componentDidMount() {
    const id = this.props.match.params.id;

    this.associationService
      .associationById(id)
      .then(association => {
        this.setState({ association });
      })
      .catch(err => console.log(err));
  }

  // "pets": [],
  // "_id": "5e611f2d1408de3914b943b4",
  // "name": "Asociación protectora de Sevilla",
  // "tel": 622642988,
  // "location": "Sevilla",

  render() {
    console.log(this.state);
    return (
      <div className="AssociationProfile">
        <h1>Perfil de {this.state.association.name}</h1>
        <p>Teléfono de contacto: {this.state.association.tel}</p>
        <p>Localidad: {this.state.association.location}</p>

        <Link to="/new-pet">Crear nuevo anuncio</Link>

        <ul>
          <li> Perretes aquí</li>
        </ul>
      </div>
    );
  }
}
