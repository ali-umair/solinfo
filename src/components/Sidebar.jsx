import React, { useState } from "react";
// import Search from "./Search";
import Stars from "./Stars";
// import Theme from "./Theme";
import Select from "./Select";

export default function Sidebar(props) {
	const [stars, setStars] = useState("");
	function selectChange() {
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
			{/* <Search /> */}		{/* For implementation at a later stage */}
			<Stars stars={stars} starSelect={starSelect} />
			{/* <Theme /> */}		{/* For implementation at a later stage */}
		</>
	);
}
