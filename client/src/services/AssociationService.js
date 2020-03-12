import axios from 'axios';

class AssociationService {
  constructor() {
    this.service = axios.create({
      baseURL: `${process.env.REACT_APP_API_URL}/associations`,
      withCredentials: true,
      headers: { 'Access-Control-Allow-Origin': '*' }
    });
  }

  allAssociations = () => {
    return this.service.get('/').then(response => response.data);
  };

  associationById = id => {
    return this.service.get(`/${id}`).then(response => response.data);
  };

  postAssociation = (assoc, userId) => {
    this.service.post(`/new/${userId}`, assoc).then(response => response.data);
  };

  newPet = data => {
    console.log(data);
    this.service
      .post(`/${data.assocId}/new-pet`, data.newPet)
      .then(response => response.data);
  };
}

export default AssociationService;
