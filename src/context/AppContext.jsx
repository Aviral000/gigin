import React, { createContext, useState } from 'react'

export const AppContext = createContext();

export function AppProvider({ children }) {
const [pets, setPets] = useState([])
const [selectedPet, setSelectedPet] = useState(null);
const [error, setError] = useState(null);
const [loading, setLoading] = useState(false);

  return (
    <AppContext.Provider value={{ pets, setPets, selectedPet, setSelectedPet, error, setError, loading, setLoading }}>
      {children}
    </AppContext.Provider>
  )
}
