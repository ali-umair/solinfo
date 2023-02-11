import React, { useState } from "react";
import Detail from "./Detail";
import Sidebar from "./Sidebar";

// https://api.le-systeme-solaire.net/rest/bodies?filter[]=isPlanet,eq,true&data=id,name,englishName,isPlanet,moons,desity,gravity,escape,bodyType
// https://api.le-systeme-solaire.net/rest/bodies/Uranus?data=moons,moon,rel

export default function Redesign() {
	const [starData, setStarData] = useState("");
	function starSelectData(star) {
		fetch(
			`https://api.le-systeme-solaire.net/rest/bodies?filter[]=englishName,eq,${star}&exclude=mass,vol,moons,rel,dimension,aroundPlanet,discoveredBy,discoveryDate,alternativeName,isPlanet,bodyType`
		)
			.then((response) => response.json())
			.then((data) => setStarData(data.bodies[0]))
			.catch((error) => {
				console.log(error);
			});
	}
	return (
		<div className="bg-black h-screen flex font-mono">
			<div className="bg-white text-slate-700 h-full w-1/4 pt-5 text-center">
				<Sidebar starSelectData={starSelectData} />
			</div>
			<div className="text-white h-full w-3/4 p-5">
				<Detail starData={starData} />
			</div>
		</div>
	);
}
