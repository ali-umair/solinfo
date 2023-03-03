import React, { useState } from "react";
// import Search from "./Search";
import Stars from "./Stars";
// import Theme from "./Theme";
import Select from "./Select";

export default function Sidebar(props) {
  const [stars, setStars] = useState(""); // This state contains starsList after a type is selected from select component.
  function selectChange() {
    // This method is called when a star tyep is selected from the select component list.
    // It then fetch stars list and sets the stars state to the list, which is passed as prop to stars component.
    if (event.target.value) {
      const type = event.target.value;
      fetch(
        `https://api.le-systeme-solaire.net/rest/bodies?filter[]=bodyType,eq,${type}&data=englishName`
      )
        .then((response) => response.json())
        .then((data) => setStars(data))
        .catch((error) => {
          console.log(error);
        });
    } else setStars("");
  }
  function starSelect(star) {
    props.starSelectData(star);
  }
  return (
    <>
      <Select func={selectChange} />
      {/* <Search /> */} {/* For implementation at a later stage */}
      <Stars stars={stars} starSelect={starSelect} />
      {/* <Theme /> */} {/* For implementation at a later stage */}
    </>
  );
}
