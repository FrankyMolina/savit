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

    console.log(this.state)
    return (
      <div className="Pets">
        <h1>Pets Profile.</h1>
      </div>
    );
  }
}
