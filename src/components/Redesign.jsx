import React from "react";

// https://api.le-systeme-solaire.net/rest/bodies?filter[]=isPlanet,eq,true&data=id,name,englishName,isPlanet,moons,desity,gravity,escape,bodyType
// https://api.le-systeme-solaire.net/rest/bodies/Uranus?data=moons,moon,rel

export default function Redesign() {
	const click = () => {
		const dropdown = document.querySelector("#dropdown-menu");
		if (dropdown.classList.contains("hidden"))
			dropdown.classList.remove("hidden");
		else dropdown.classList.add("hidden");
	};

	return (
		<div className="bg-black h-screen flex font-mono">
			<div className="bg-white h-full w-1/4 pt-5 text-center">
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
				<div className="search_bodies mt-12 flex justify-center">
					<img
						src="https://drive.google.com/uc?id=1h3fkjEjsupkVlj_O7hcQPbsZSd3DF46c"
						alt="search"
						className="h-10 w-10 shadow-md"
					/>
					<input type="text" className="p-2 shadow-md" />
				</div>
				<div className="container_bodies mt-14">
					<ul className="py-1" aria-labelledby="dropdown">
						<li>
							<a
								href="#"
								className="text-sm hover:bg-gray-100 text-gray-700 block px-4 py-2"
							>
								Mercury
							</a>
						</li>
						<li>
							<a
								href="#"
								className="text-sm hover:bg-gray-100 text-gray-700 block px-4 py-2"
							>
								Venus
							</a>
						</li>
						<li>
							<a
								href="#"
								className="text-sm hover:bg-gray-100 text-gray-700 block px-4 py-2"
							>
								Earth
							</a>
						</li>
						<li>
							<a
								href="#"
								className="text-sm hover:bg-gray-100 text-gray-700 block px-4 py-2"
							>
								Mars
							</a>
						</li>
						<li>
							<a
								href="#"
								className="text-sm hover:bg-gray-100 text-gray-700 block px-4 py-2"
							>
								Jupiter
							</a>
						</li>
					</ul>
				</div>
				<div className="theme_selector w-1/4 flex justify-center gap-1 px-2 py-3 absolute bottom-0">
					<div className="bg-black h-6 w-6 rounded-full hover:scale-110"></div>
					<div className="bg-red-700 h-6 w-6 rounded-full hover:scale-110"></div>
					<div className="bg-orange-700 h-6 w-6 rounded-full hover:scale-110"></div>
				</div>
			</div>
			<div className="text-white h-full w-3/4 p-5">
				<h1 className="text-xl underline underline-offset-4 decoration-red-500">Mercury</h1>
				<div className="container_details pt-10 flex flex-wrap justify-start">
					<div className="detail mb-5 flex">
						<div className="text-red-500 text-center border-r-2 w-44">Name</div>
						<div className="text-center w-44">Mercury</div>
					</div>
					<div className="detail mb-5 flex">
						<div className="text-red-500 text-center border-r-2 w-44">Moons</div>
						<div className="text-center w-44">4 km</div>
					</div>
					<div className="detail mb-5 flex">
						<div className="text-red-500 text-center border-r-2 w-44">Discovered By</div>
						<div className="text-center w-44">45687913</div>
					</div>
					<div className="detail mb-5 flex">
						<div className="text-red-500 text-center border-r-2 w-44">Name</div>
						<div className="text-center w-44">Mercury</div>
					</div>
					<div className="detail mb-5 flex">
						<div className="text-red-500 text-center border-r-2 w-44">Moons</div>
						<div className="text-center w-44">4</div>
					</div>
					<div className="detail mb-5 flex">
						<div className="text-red-500 text-center border-r-2 w-44">Discovered By</div>
						<div className="text-center w-44">45687913</div>
					</div>
					<div className="detail mb-5 flex">
						<div className="text-red-500 text-center border-r-2 w-44">Name</div>
						<div className="text-center w-44">Mercury</div>
					</div>
					<div className="detail mb-5 flex">
						<div className="text-red-500 text-center border-r-2 w-44">Moons</div>
						<div className="text-center w-44">4</div>
					</div>
				</div>
			</div>
		</div>
	);
}
