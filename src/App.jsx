import Home from './components/Home';
import Navbar from './components/navbar/Navbar';
import { HashRouter as Router, Routes, Route } from 'react-router-dom';
import Redesign from './components/Redesign';

export default function App() {
  const Earth = {
    id: 'terre',
    name: 'La Terre',
    englishName: 'Earth',
    isPlanet: true,
    moons: [{}],
    gravity: 9.8,
    escape: 11190,
    bodyType: 'Planet',
  };
  const Mercury = {
    id: 'mercure',
    name: 'Mercure',
    englishName: 'Mercury',
    isPlanet: true,
    moons: null,
    gravity: 3.7,
    escape: 4250,
    bodyType: 'Planet',
  };
  const Venus = {
    id: 'venus',
    name: 'Vénus',
    englishName: 'Venus',
    isPlanet: true,
    moons: null,
    gravity: 8.87,
    escape: 10360,
    bodyType: 'Planet',
  };

  return (
    <Redesign />
    // <div className="bg-[#222327] h-screen flex flex-col justify-between">
    //   <Router>
    //     <Routes>
    //       <Route
    //         exact
    //         path="/"
    //         element={<Home body={Earth} select="planets" />}
    //       />
    //       <Route
    //         exact
    //         path="/dwarfs"
    //         element={<Home body={Mercury} select="dwarfs" />}
    //       />
    //       <Route
    //         exact
    //         path="/moons"
    //         element={<Home body={Venus} select="moons" />}
    //       />
    //       <Route
    //         exact
    //         path="/asteroids"
    //         element={<Home body={Earth} select="asteroids" />}
    //       />
    //       <Route
    //         exact
    //         path="/comets"
    //         element={<Home body={Venus} select="comets" />}
    //       />
    //     </Routes>
    //     <Navbar />
    //   </Router>
    // </div>
  );
}
