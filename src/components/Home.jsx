import React from 'react';
import Card from './Card';
import { useState } from 'react';

export default function Home() {

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
      // const Mercury = {
      //   "id": "mercure",
      //   "name": "Mercure",
      //   "englishName": "Mercury",
      //   "isPlanet": true,
      //   "moons": null,
      //   "gravity": 3.7,
      //   "escape": 4250,
      //   "bodyType": "Planet"
      // }
      // const Venus = {
      //   "id": "venus",
      //   "name": "Vénus",
      //   "englishName": "Venus",
      //   "isPlanet": true,
      //   "moons": null,
      //   "gravity": 8.87,
      //   "escape": 10360,
      //   "bodyType": "Planet"
      // }
    
    const [body, setBody] = useState(Earth);
    // const [planets, setPlanets] = useState();
    
    function selectChange() {
      // setBody(event.target.value);
      fetch(`https://api.le-systeme-solaire.net/rest/bodies/${event.target.value}?data=id,name,englishName,isPlanet,moons,desity,gravity,escape,bodyType`)
      .then((response) => response.json())
      .then((data) => setBody(data));
    }

  return (
    <div className='flex flex-col items-center'>
      <div className='w-[300px]'>
            <select id="underline_select" defaultValue="Choose a planet" onChange={selectChange} className="block py-2.5 px-0 mt-3 mb-3 w-full text-sm text-slate-400 bg-transparent border-b-2 border-green-400 appearance-none focus:outline-none focus:ring-0 focus:border-green-400 peer">
                <option value="Earth">Earth</option>
                <option value="Mercury">Mercury</option>
                <option value="Venus">Venus</option>
                <option value="Mars">Mars</option>
                <option value="Jupiter">Jupiter</option>
                <option value="Saturn">Saturn</option>
                <option value="Uranus">Uranus</option>
                <option value="Neptune">Neptune</option>
            </select>
        </div>
        <Card data={body}/>
    </div>
  )
}
