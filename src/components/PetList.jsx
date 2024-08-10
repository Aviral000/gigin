import React, { useContext, useEffect } from 'react'
import { AppContext } from '../context/AppContext'
import axios from 'axios';
import '../styles/PetList.scss'

export default function PetList() {
const { pets, setPets, setLoading, setError } = useContext(AppContext);

useEffect(() => {
    setLoading(true);
    axios.get('http://pets-v2.dev-apis.com/pets')
        .then((response) => {
            setPets(response.data.pets);
            setLoading(false);
        })
        .catch((error) => {
            setError(error.message);
            setLoading(false);
        })
}, [setPets, setLoading, setError])

  return (
    <div className='pet-list'>
      { pets.map((pet) => (
        <div className='pet-item' key={pet.id}>
            <h3>{pet.name}</h3>
            <p>{pet.breed}</p>
        </div>
      ))}
    </div>
  )
}
