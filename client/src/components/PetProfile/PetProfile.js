import React from 'react';
import { Link } from 'react-router-dom';

import PetService from '../../services/PetService';

export default class PetProfile extends React.Component {
  petService = new PetService();

  state = {
    pet: {}
  };

  componentDidMount() {
    const id = this.props.match.params.id;

    this.petService
      .petById(id)
      .then(pet => {
        this.setState({ pet });
      })
      .catch(err => console.log(err));
  }

  render() {
    console.log(this.state);
    return (
      <div className="PetProfile">
        <h1>Profile of {this.state.pet.name}</h1>
        <div>
          <img src={this.state.pet.img} alt={this.state.pet.name} />
          <div>
            <h2>{this.state.pet.name}</h2>

            <ul>
              <li>Edad: {this.state.pet.age} years</li>
              <li>Sexo: {this.state.pet.sex}</li>
              <li>Raza: {this.state.pet.race}</li>
              <li>Peso: {this.state.pet.weight} Kg.</li>
              <li>
                ¿Perro Potencialmente Peligroso?:{' '}
                {this.state.pet.ppp === true
                  ? 'Sí, está considerado como peligroso'
                  : 'No está considerado como peligroso.'}
              </li>
              <li>
                Sociable:{' '}
                {this.state.pet.friendly === true
                  ? 'totalmente amigable con otros animales, y personas.'
                  : 'Tiene dificultades para relacionarse con otros animales...'}
              </li>
              <li>Estado veterinario: {this.state.pet.vet}</li>
              <li>Localización: {this.state.pet.location}</li>
            </ul>
          </div>
        </div>
        <Link to={`/associations/${this.state.pet.assocId}`}> Adoptar / Acoger </Link>
      </div>
    );
  }
}
