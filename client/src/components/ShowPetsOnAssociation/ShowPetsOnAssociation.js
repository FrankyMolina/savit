import React from 'react';
import { Link, withRouter } from 'react-router-dom';

import PetService from '../../services/PetService';

import './ShowPetsOnAssociation.scss';

class ShowPetsOnAssociation extends React.Component {
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


  render() {
      console.log(this.props.match.params.id, this.state.pets.assocId, this.state.pets)
    return (
      <div className="ShowPetsOnAssociation">
        <ul>
          {this.state.pets.map(pet => {
            return this.props.match.params.id === pet.assocId ? (
              <li key={pet._id}>
                <Link to={`/pet/${pet._id}`}>
                  <img src={pet.img} alt={pet.name} width="350" />
                  <h3>Nombre: {pet.name}</h3>
                </Link>
              </li>
            ) : null;
          })}
        </ul>
      </div>
    );
  }
}

export default withRouter(ShowPetsOnAssociation);