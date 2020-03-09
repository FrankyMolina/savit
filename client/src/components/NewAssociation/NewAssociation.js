import React from 'react';

import AssociationService from '../../services/AssociationService';

export default class NewAssociation extends React.Component {
  associationService = new AssociationService();

  state = {
    association: {
      name: '',
      tel: 0,
      location: ''
    }
  };

  componentDidMount() {}

  handleChange = event => {
    const { name, value } = event.target;
    this.setState({ [name]: value });
  };

  handleFormSubmit = e => {
    e.preventDefault();
    this.associationService.postAssociation(this.state);
  };

  // "pets": [],
  // "_id": "5e611f2d1408de3914b943b4",
  // "name": "Asociación protectora de Sevilla",
  // "tel": 622642988,
  // "location": "Sevilla",

  render() {
    return (
      <div className="NewAssociation">
        <h1>NEW Associations page.</h1>

        <form onSubmit={this.handleFormSubmit}>
          <fieldset>
            <label>Nombre de la asociación:</label>
            <input
              type="text"
              name="name"
              value={this.state.name}
              onChange={e => this.handleChange(e)}
            />
          </fieldset>

          <fieldset>
            <label>Número de teléfono:</label>
            <input
              type="number"
              name="tel"
              value={this.state.tel}
              onChange={e => this.handleChange(e)}
            />
          </fieldset>

          <fieldset>
            <label>Localidad:</label>
            <input list="localidades" name="location" onChange={e => this.handleChange(e)}/>
            <datalist id="localidades">
              <option value="Madrid" />
              <option value="Sevilla" />
              <option value="Cádiz" />
            </datalist>
          </fieldset>

          <input type="submit" value="Crear nueva asociación" />
        </form>
      </div>
    );
  }
}
