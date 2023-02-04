import React, { useEffect } from "react";
import "./stars.css";

export default function Stars(props) {
	// useEffect(() => {
	// 	fetch(
	// 		`https://api.le-systeme-solaire.net/rest/bodies?filter[]=bodyType,eq,${props.type}&data=englishName`
	// 	)
	// 		.then((response) => response.json())
	// 		.then((data) => updateStarsList(data))
	// 		.catch((error) => {
	// 			console.log(error);
	// 		});
	// 	// const updateStarsList = (data) => {
	// 	// 	let stars = data.bodies;
	// 	// 	let starsList = document.querySelector("#stars_list");
	// 	// 	const starClick = () => {
	// 	// 		console.log("ljlsdjfksdklfjsd");
	// 	// 	};
	// 	// 	starsList.innerHTML = "";
	// 	// 	console.log(stars);
	// 	// 	console.log('1');
	// 	// 	stars.forEach((star) => {
	// 	// 		starsList.innerHTML += `
	// 	// 		<li onClick={starClick}>
	// 	// 		<a
	// 	// 			href="#"
	// 	// 			className="text-sm hover:bg-gray-100 text-gray-700 block px-4 py-2"
	// 	// 		>
	// 	// 			${star.englishName}
	// 	// 		</a>
	// 	// 	</li>`;
	// 	// 	});
	// 	// };
	// });
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
