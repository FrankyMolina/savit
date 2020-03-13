import React from 'react';
import { Link } from 'react-router-dom';

import PetService from '../../services/PetService';

import './Pets.scss';

export default class Pets extends React.Component {
  petService = new PetService();

  state = {
    pets: []
  };

  componentDidMount() {
    this.petService
      .allPets()
      .then(data => this.setState({ pets: data }))
      .catch(err => console.log(err));
  }

  //   _id: "5e611c3a913ad938e10ee596"
  //   img: "https://source.unsplash.com/random?pug/800x450"
  //   name: "Pistacho"
  //   age: 4
  //   sex: "Macho"
  //   race: "Carlino"
  //   weight: 5
  //   ppp: false
  //   friendly: true
  //   vet: "Completo"
  //   location: "Sevilla"
  //   assocId: "5e5eb0b20909f01c6acceea5"
  //   created_at: "2020-03-05T15:35:22.359Z"
  //   updated_at: "2020-03-05T15:35:22.359Z"

  render() {
    return (
      <div className="Pets">
        <ul>
          {this.state.pets.map(pet => (
            <li key={pet._id}>
              <Link to={`/pet/${pet._id}`}>
                <img src={pet.img} alt={pet.name} />
                <h3>{pet.name}</h3>
              </Link>
            </li>
          ))}
        </ul>
      </div>
    );
  }
}
