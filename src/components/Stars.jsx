import React from "react";
import "./stars.css";

export default function Stars(props) {
	const generate = () => {
		let starsList = [];
		if (props.stars != "") {
			const items = props.stars.bodies;
			items.forEach((item) => {
				starsList.push(
					<li key={item.englishName} onClick={click}>
						{item.englishName}
					</li>
				);
			});
			return starsList;
		} else return <li>Select type of objects</li>;
	};
	const click = () => {
		props.starSelect(event.target.textContent)
	};
	return (
		<div className="container_bodies mt-8">
			<ul className="py-1 overflow-auto w-full h-[30rem]" id="stars_list">
				{generate()}
			</ul>
		</div>
	);
}
