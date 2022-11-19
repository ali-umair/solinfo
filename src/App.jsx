import reactLogo from './assets/react.svg'
import Card from './components/Card'
// import './App.css'

function App() {

  const planets = {
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

  return (
    <div className='flex flex-col items-center'>
      <Card data={planets} />
    </div>
  )
}

export default App
