import React, { useState } from "react";

const EmojiContainer = () => {
	const [emoji, setEmoji] = useState("🎉");

	return (
		<div className="relative flex justify-center space-x-4">
			<div className="z-10 flex h-48 w-48 justify-center rounded-full bg-gray-200 sm:h-96 sm:w-96">
				<div className="flex h-full flex-col justify-center text-4xl">
					{emoji}
				</div>
			</div>
			<span
				className="float-label absolute left-1 z-20 cursor-pointer rounded-full bg-white px-4 py-1 text-slate-700 sm:z-0"
				onMouseEnter={() => setEmoji("😄")}
				onMouseLeave={() => setEmoji("🎉")}
			>
				Joyful
			</span>
			<span
				className="float-label absolute bottom-2 right-3 z-20 cursor-pointer rounded-full bg-white px-4 py-1 text-slate-700"
				onMouseEnter={() => setEmoji("🎈")}
				onMouseLeave={() => setEmoji("🎉")}
			>
				Fun
			</span>
			<span
				className="float-label absolute bottom-4 left-3 z-20 cursor-pointer rounded-full bg-white px-4 py-1 text-slate-700"
				onMouseEnter={() => setEmoji("⚡")}
				onMouseLeave={() => setEmoji("🎉")}
			>
				Energy
			</span>
			<span
				className="float-label absolute right-4 top-4 z-20 cursor-pointer rounded-full bg-white px-4 py-1 text-slate-700"
				onMouseEnter={() => setEmoji("🎨")}
				onMouseLeave={() => setEmoji("🎉")}
			>
				Creative
			</span>
		</div>
	);
};

export default EmojiContainer;
