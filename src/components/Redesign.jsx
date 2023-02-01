import React from "react";
import Dropdown from "./Dropdown";
import Search from "./Search";
import Stars from "./Stars";
import Theme from "./Theme";
import Detail from "./Detail";

// https://api.le-systeme-solaire.net/rest/bodies?filter[]=isPlanet,eq,true&data=id,name,englishName,isPlanet,moons,desity,gravity,escape,bodyType
// https://api.le-systeme-solaire.net/rest/bodies/Uranus?data=moons,moon,rel

export default function Redesign() {
	return (
		<div className="bg-black h-screen flex font-mono">
			<div className="bg-white h-full w-1/4 pt-5 text-center">
				<Dropdown />
				<Search />
				<Stars />
				<Theme />
			</div>
			<div className="text-white h-full w-3/4 p-5">
				<Detail />	
			</div>
		</div>
	);
}
