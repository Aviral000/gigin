import React, { useContext, useState } from 'react'
import { AppContext } from '../context/AppContext'
import axios from 'axios';
import '../styles/SearchForm.scss'

export default function SearchForm() {
const { setPets, setLoading, setError } = useContext(AppContext);
const [animal, setAnimal] = useState('');
const [location, setLocation] = useState('');
const [breed, setBreed] = useState('');

const handleSubmit = (e) => {
    e.preventDefault();
    setLoading(true);
    axios.get(`http://pets-v2.dev-apis.com/pets?animal=${animal}&location=${location}&breed=${breed}`)
        .then((response) => {
            setPets(response.data.pets);
            setLoading(false);
        })
        .catch((error) => {
            setError(error.message);
            setLoading(false);
        })
}

  return (
    <form onSubmit={handleSubmit} className='search-form'>
      <input type="text" placeholder='Animal' value={animal} onChange={(e) => setAnimal(e.target.value)} />
      <input type="text" placeholder='Location' value={location} onChange={(e) => setLocation(e.target.value)} />
      <input type="text" placeholder='Breed' value={breed} onChange={(e) => setBreed(e.target.value)} />
      <button type='submit'>Search</button>
    </form>
  )
}
