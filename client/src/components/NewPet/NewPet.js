import React from 'react';

import AssociationService from '../../services/AssociationService';

export default class NewAssociation extends React.Component {
  associationService = new AssociationService();

  state = {
    newPet: {
      img: '',
      name: '',
      age: 0,
      sex: '',
      race: '',
      weight: 0,
      // ppp: null, //*boolean
      // friendly: null, //*boolean
      // vet: '',
      // location: '',
      // assocId: req.params.id
    },
  };

  componentDidMount() {}

  handleChange = event => {
    const { name, value } = event.target;
    this.setState({ [name]: value });
  };

  handleFormSubmit = e => {
    e.preventDefault();
    this.associationService.newPet(this.state);
  };

  render() {
    return (
      <div className="NewPet">
        <h1>NEW pet page.</h1>

        <form onSubmit={this.handleFormSubmit}>
          <fieldset>
            <label>Imagen</label>{' '}
            {/* we'll try to make this a type='file' input*/}
            <input
              type="text"
              name="img"
              value={this.state.img}
              onChange={e => this.handleChange(e)}
            />
          </fieldset>

          <fieldset>
            <label>Nombre:</label>
            <input
              type="text"
              name="name"
              value={this.state.name}
              onChange={e => this.handleChange(e)}
            />
          </fieldset>

          <fieldset>
            <label>Edad:</label>
            <input
              type="number"
              name="age"
              value={this.state.age}
              onChange={e => this.handleChange(e)}
            />
          </fieldset>

          <fieldset>
            <label>Sexo:</label>
            <input
              list="sex"
              name="sex"
              onChange={e => this.handleChange(e)}
            />
            <datalist id="sex">
              <option value="Macho" />
              <option value="Hembra" />
            </datalist>
          </fieldset>

          <fieldset>
            <label>Raza:</label>
            <input
              type="text"
              name="race"
              value={this.state.race}
              onChange={e => this.handleChange(e)}
            />
          </fieldset>

          <fieldset>
            <label>Peso:</label>
            <input
              type="number"
              name="age"
              value={this.state.weight}
              onChange={e => this.handleChange(e)}
            />
          </fieldset>

          {/* <fieldset>
            <label>¿Está considerado como un perro potencialmente peligroso?:</label>
            <input
              type="checkbox"
              name="ppp"
              value={this.state.ppp}
              onChange={e => this.handleChange(e)}
            />
          </fieldset> */}

          <input type="submit" value="Nueva publicación" />
        </form>
      </div>
    );
  }
}
