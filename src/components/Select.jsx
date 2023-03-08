import React from "react";

export default function Select(props) {
  return (
    <div className="w-44 my-0 mx-auto shadow-md shadow-red-500 hover:shadow-lg hover:shadow-red-500">
      <select
        id="select"
        defaultValue="Choose a planet"
        onChange={props.selectChange}
        className="block py-2.5 px-0 mt-3 mb-3 w-full text-sm bg-transparent text-center appearance-none focus:outline-none"
      >
        <option value="" selected>
          Select Type
        </option>
        <option value="planet">Planets</option>
        <option value="dwarf planet">Dwarf Planets</option>
        <option value="moon">Moons</option>
        <option value="asteroid">Asteroids</option>
        <option value="comet">Comets</option>
      </select>
    </div>
  );
}
