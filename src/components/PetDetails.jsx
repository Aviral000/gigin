import React, { useContext, useEffect } from 'react'
import { AppContext } from '../context/AppContext'
import axios from 'axios';
import '../styles/PetDetails.scss'
import { useParams } from 'react-router-dom';

export default function PetDetails() {
const { selectedPet, setSelectedPet, setLoading, setError } = useContext(AppContext);
const { id } = useParams();

useEffect(() => {
    setLoading(true);
    axios.get(`http://pets-v2.dev-apis.com/pets?id=${id}`)
        .then((response) => {
            setSelectedPet(response.data.pets);
            setLoading(false);
        })
        .catch((error) => {
            setError(error.message);
            setLoading(false);
        })
}, [id, setSelectedPet, setLoading, setError]);

console.log(selectedPet);

  return (
    <div className='pet-details'>
      { selectedPet ? (
        <>
            <h1>{selectedPet[0].name}</h1>
            <p>{selectedPet[0].breed}</p>
            <p>{selectedPet[0].description}</p>
        </>
      ): (
        <p>Loading...</p>
      )}
    </div>
  )
}
