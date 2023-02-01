import React from "react";

export default function Theme() {
	return (
		<div className="theme_selector w-1/4 flex justify-center gap-1 px-2 py-3 absolute bottom-0">
			<div className="bg-black h-6 w-6 rounded-full hover:scale-110"></div>
			<div className="bg-red-700 h-6 w-6 rounded-full hover:scale-110"></div>
			<div className="bg-orange-700 h-6 w-6 rounded-full hover:scale-110"></div>
		</div>
	);
}
