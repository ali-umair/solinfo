import React, { useEffect } from "react";
import "./stars.css";

export default function Stars(props) {
	useEffect(() => {
		fetch(
			`https://api.le-systeme-solaire.net/rest/bodies?filter[]=bodyType,eq,${props.type}&data=englishName`
		)
			.then((response) => response.json())
			.then((data) => updateStarsList(data))
			.catch((error) => {
				console.log(error);
			});
		const updateStarsList = (data) => {
			let stars = data.bodies;
			let starsList = document.querySelector("#stars_list");
			starsList.innerHTML = "";
			console.log(stars);
			stars.forEach((star) => {
				starsList.innerHTML += `
				<li>
				<a
					href="#"
					className="text-sm hover:bg-gray-100 text-gray-700 block px-4 py-2"
				>
					${star.englishName}
				</a>
			</li>`;
			});
		};
	});
	return (
		<div className="container_bodies mt-8">
			<ul className="py-1 overflow-auto w-full h-[30rem]" id="stars_list">
				<li></li>
			</ul>
		</div>
	);
}
