import React from 'react'
import { BrowserRouter as Router, Routes, Route } from 'react-router-dom'
import ErrorBoundary from './components/ErrorBoundary'
import SearchForm from './components/SearchForm'
import PetList from './components/PetList'
import PetDetails from './components/PetDetails'

export default function App() {

  return (
    <Router>
      <ErrorBoundary>
        <div className='app'>
          <SearchForm />
          <Routes>
            <Route path='/' element={<PetList />} />
            <Route path='/pet/:id' element={<PetDetails />} />
            <Route path='/breed/:animal' element={<PetDetails />} />
          </Routes>
        </div>
      </ErrorBoundary>
    </Router>
  )
}
