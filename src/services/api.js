import axios from "axios";

export const fetchPets = () => axios.get('http://pets-v2.dev-apis.com/pets');
export const fetchPetById = (id) => axios.get(`http://pets-v2.dev-apis.com/pets?id=${id}`);
export const fetchBreedsByAnimal = (animal) => axios.get(`http://pets-v2.dev-apis.com/breeds?animal=${animal}`);
export const searchPets = (animal, location, breed) => axios.get(`http://pets-v2.dev-apis.com/pets?animal=${animal}&location=${location}&breed=${breed}`)