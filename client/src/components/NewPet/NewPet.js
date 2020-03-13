import React from 'react';

import AssociationService from '../../services/AssociationService';

import './NewPet.scss';

export default class NewAssociation extends React.Component {
  associationService = new AssociationService();

  state = {
    img: '',
    name: '',
    age: 0,
    sex: '',
    race: '',
    weight: 0,
    ppp: false,
    friendly: false,
    vet: '',
    location: '',
    assocId: ''
  };

  componentDidMount() {}

  handleChange = e => {
    const { name, value } = e.target;

    this.setState({ [name]: value });
  };

  handleChangeCheck = e => {
    const { name, checked } = e.target;
    this.setState({ [name]: checked });
  };

  handleFormSubmit = e => {
    e.preventDefault();
    this.associationService.newPet({
      newPet: this.state,
      assocId: this.props.match.params.id
    });
  };

  render() {
    console.log(this.state);
    return (
      <div className="NewPet">
        <h1>Crea el anuncio para tu mascota</h1>

        <form onSubmit={this.handleFormSubmit}>
          <fieldset>
            <label>Imagen</label>{' '}
            {/* we'll try to make this a type='file' input*/}
            <input
              type="text"
              name="img"
              value={this.state.img}
              onChange={e => this.handleChange(e)}
              placeholder="URL"
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
            <input list="sex" name="sex" onChange={e => this.handleChange(e)} />
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
              name="weight"
              value={this.state.weight}
              onChange={e => this.handleChange(e)}
            />
          </fieldset>

          <fieldset>
            <label>
              ¿Está considerado como un perro potencialmente peligroso?:
            </label>
            <input
              type="checkbox"
              name="ppp"
              checked={this.state.ppp}
              onChange={this.handleChangeCheck}
              className="checkbox"
            />
          </fieldset>

          <fieldset>
            <label>¿Es sociable con otros animales y con personas?:</label>
            <input
              type="checkbox"
              name="friendly"
              checked={this.state.friendly}
              onChange={this.handleChangeCheck}
              className="checkbox"
            />
          </fieldset>

          <fieldset>
            <label>Situación veterinaria:</label>
            <input
              type="text"
              name="vet"
              value={this.state.vet}
              onChange={e => this.handleChange(e)}
            />
          </fieldset>

          <fieldset>
            <label>Localización donde se encuentra la mascota:</label>
            <input
              type="text"
              name="location"
              value={this.state.location}
              onChange={e => this.handleChange(e)}
            />
          </fieldset>

          <div className="NewPet__btn">
            <input type="submit" value="Nueva publicación" />
          </div>
        </form>
      </div>
    );
  }
}
