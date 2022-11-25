import React from 'react';
import Card from './Card';
import { useState } from 'react';
import Select from './Select';

export default function Home(props) {

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
      <Select type={props.select}/>
        {/* {(() => {
        if (props.select == "earth") {
          return (
            <h1>Earth</h1>
          )
        } else if (props.select == "mercury") {
          return (
            <h1>Mercury</h1>
          )
        } else if (props.select == "venus") {
          return (
            <h1>Venus</h1>
          )
        }
      })()} */}
      {/* {(() => {
        switch (props.select) {
          case "earth":
            return <h1>Earth</h1>
            break;
          case "mercury":
            return <h1>Mercury</h1>
            break;
          case "venus":
            return <h1>Venus</h1>
            break;
        
          default:
            return <h1>Earth</h1>
            break;
        }
      })()} */}
        <Card data={props.body}/>
    </div>
  )
}
