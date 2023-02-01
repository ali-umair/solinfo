import React from "react";

export default function Detail() {
	return (
		<>
			<h1 className="text-xl underline underline-offset-4 decoration-red-500">
				Mercury
			</h1>
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
					<div className="text-red-500 text-center border-r-2 w-44">
						Discovered By
					</div>
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
					<div className="text-red-500 text-center border-r-2 w-44">
						Discovered By
					</div>
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
		</>
	);
}
