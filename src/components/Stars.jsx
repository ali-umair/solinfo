import React from "react";

export default function Stars() {
	return (
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
	);
}
