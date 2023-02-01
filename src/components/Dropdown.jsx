import React from "react";

export default function Dropdown() {
	const click = () => {
		const dropdown = document.querySelector("#dropdown-menu");
		if (dropdown.classList.contains("hidden"))
			dropdown.classList.remove("hidden");
		else dropdown.classList.add("hidden");
	};

	return (
		<>
			<button
				onClick={click}
				className="text-slate-700 bg-white shadow hover:shadow-md focus:ring-1 focus:ring-black font-medium text-sm px-4 py-2.5 text-center inline-flex items-center"
				type="button"
			>
				Type of Bodies
				<svg
					className="w-4 h-4 ml-2"
					fill="none"
					stroke="currentColor"
					viewBox="0 0 24 24"
					xmlns="http://www.w3.org/2000/svg"
				>
					<path
						stroke-linecap="round"
						stroke-linejoin="round"
						stroke-width="2"
						d="M19 9l-7 7-7-7"
					></path>
				</svg>
			</button>
			{/* Dropdown menu */}
			<div
				className="hidden bg-white text-base z-50 list-none divide-y divide-gray-100 shadow my-4"
				id="dropdown-menu"
			>
				<ul className="py-1" aria-labelledby="dropdown">
					<li>
						<a
							href="#"
							className="text-sm hover:bg-gray-100 text-gray-700 block px-4 py-2"
						>
							Planets
						</a>
					</li>
					<li>
						<a
							href="#"
							className="text-sm hover:bg-gray-100 text-gray-700 block px-4 py-2"
						>
							Dwarf Planets
						</a>
					</li>
					<li>
						<a
							href="#"
							className="text-sm hover:bg-gray-100 text-gray-700 block px-4 py-2"
						>
							Moons
						</a>
					</li>
					<li>
						<a
							href="#"
							className="text-sm hover:bg-gray-100 text-gray-700 block px-4 py-2"
						>
							Asteroids
						</a>
					</li>
					<li>
						<a
							href="#"
							className="text-sm hover:bg-gray-100 text-gray-700 block px-4 py-2"
						>
							Comets
						</a>
					</li>
				</ul>
			</div>
		</>
	);
}
