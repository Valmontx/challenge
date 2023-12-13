
import { Routes, Route } from 'react-router-dom';
import { PersonDetails } from './components/PersonDetails'
import { FecthData } from './components/FetchData';
import './App.css'
import './index.css'


function App() {

  return (

    <Routes>
      <Route path="/" element={<FecthData/>} />
      <Route path='/person-details' element={<PersonDetails />} />
    </Routes>
  )
}

export default App
