import axios from 'axios';

class PetService {
  constructor() {
    this.service = axios.create({
      baseURL: `${process.env.REACT_APP_API_URL}/pets`,
      withCredentials: true,
      headers: { 'Access-Control-Allow-Origin': '*' }
    });
  }

  allPets = () => {
    return this.service.get('/').then(response => response.data);
  };

  petById = (id) => {
    return this.service.get(`/${id}`).then(response => response.data);
  }
}

export default PetService;
