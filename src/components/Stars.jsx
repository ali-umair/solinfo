import React from "react";
import "./stars.css";

export default function Stars(props) {
  const generateStarsList = () => {
    // This method uses starList from Sidebar and generates and HTML list
    let starsList = [];
    if (props.stars != "") {
      const items = props.stars.bodies;
      items.forEach((item) => {
        starsList.push(
          <li key={item.englishName} onClick={starNameClick}>
            {item.englishName}
          </li>
        );
      });
      return starsList;
    } else return <li>Select type of objects</li>;
  };
  const starNameClick = () => {
    // When star is selected, name is passed to sidebar and then Home.
    // Home fetches star data and passes it as prop to Detail.
    props.starSelect(event.target.textContent);
  };
  return (
    <div className="container_bodies mt-8">
      <ul className="py-1 overflow-auto w-full h-[30rem]" id="stars_list">
        {generateStarsList()}
      </ul>
    </div>
  );
}
