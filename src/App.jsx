import { useState } from 'react';
import Home from './components/Home';
import Navbar from './components/Navbar';
import {
  HashRouter as Router,
  Routes,
  Route
} from "react-router-dom";

export default function App() {


  const Earth = {
    "id": "terre",
    "name": "La Terre",
    "englishName": "Earth",
    "isPlanet": true,
    "moons": [
    {}
    ],
    "gravity": 9.8,
    "escape": 11190,
    "bodyType": "Planet"
}
  const Mercury = {
    "id": "mercure",
    "name": "Mercure",
    "englishName": "Mercury",
    "isPlanet": true,
    "moons": null,
    "gravity": 3.7,
    "escape": 4250,
    "bodyType": "Planet"
  }
  const Venus = {
    "id": "venus",
    "name": "Vénus",
    "englishName": "Venus",
    "isPlanet": true,
    "moons": null,
    "gravity": 8.87,
    "escape": 10360,
    "bodyType": "Planet"
  }

  return (
    <div className='bg-[#222327] min-h-screen flex flex-col justify-between'>
      <Router>
      <Routes>
        <Route exact path="/" element={<Home body={Earth}/>} />
        <Route exact path="/about" element={<Home body={Mercury}/>} />
        <Route exact path="/users" element={<Home body={Venus}/>} />
      </Routes>
      <Navbar />
    </Router>
    </div>
  )
}