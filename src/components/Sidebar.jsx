import React, { useState } from "react";
import Search from "./Search";
import Stars from "./Stars";
import Theme from "./Theme";
import Select from "./Select";

export default function Sidebar() {
	const [type, setType] = useState('planet')
	function selectChange() {
		// setBody(event.target.value);
		// fetch(`https://api.le-systeme-solaire.net/rest/bodies/${event.target.value}?data=id,name,englishName,isPlanet,moons,desity,gravity,escape,bodyType`)
		// .then((response) => response.json())
		// .then((data) => setBody(data));
		setType(event.target.value);
	}
	return (
		<>
			<Select func={selectChange} />
			<Search />
			<Stars type={type} />
			<Theme />
		</>
	);
}
