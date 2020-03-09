import React from 'react';
import { Link } from 'react-router-dom';

import AssociationService from '../../services/AssociationService';

export default class Associations extends React.Component {
  associationService = new AssociationService();

  state = {
    association: []
  };

  componentDidMount() {
    this.associationService.allAssociations()
      .then(data => this.setState({ association: data }))
      .catch(err => console.log(err));
  }

  // "pets": [],
  // "_id": "5e611f2d1408de3914b943b4",
  // "name": "Asociación protectora de Sevilla",
  // "tel": 622642988,
  // "location": "Sevilla",

  render() {
    return (
      <div className="Associations">
        <h1>Associations page.</h1>
        <ul>
          {this.state.association.map(assoc => (
            <li key={assoc._id}>
              <Link to={`/associations/${assoc._id}`}>
                <h3>Nombre: {assoc.name}</h3>
                <p>Teléfono de contacto: {assoc.tel}</p>
                <p>Localidad: {assoc.location}</p>
              </Link>
            </li>
          ))}
        </ul>
      </div>
    );
  }
}
