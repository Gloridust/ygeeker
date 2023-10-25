import React from "react";

export default function Mission({ body, footer }) {
	return (
		<section className="mt-1 bg-white px-2 py-12 text-center sm:mt-4">
			<blockquote className="mb-4 text-2xl text-gray-600 sm:text-4xl">
				"Our mission is <br /> Letting everyone find a balance between
				tech and life."
			</blockquote>
			<div className="text-gray-500">{footer}</div>
		</section>
	);
}
