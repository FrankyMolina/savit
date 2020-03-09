import React from 'react';
import { Link } from 'react-router-dom';

import AssociationService from '../../services/AssociationService';

export default class Associations extends React.Component {
  associationService = new AssociationService();

  state = {
    association: []
  };

  componentDidMount() {
    this.associationService
      .allAssociations()
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

        <div className="Associations__create">
          <h2>¿Quieres crear tu asociación?</h2>
          <Link to="/new-association">Crear asociación</Link>
        </div>

        <ul>
          {this.state.association.map(assoc => (
            <li key={assoc._id}>
              <Link to={`/associations/${assoc._id}`}>
                <h3>
                  {assoc.name} ({assoc.location})
                </h3>
              </Link>
            </li>
          ))}
        </ul>
      </div>
    );
  }
}
