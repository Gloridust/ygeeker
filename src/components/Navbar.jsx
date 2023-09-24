import { Link } from "nextra-theme-docs";

export default function Navbar({ children }) {
	return (
		<div className="fixed left-0 right-0 top-0 h-[80px] flex justify-center py-4 z-10">
			<div className="min-w-[996px] rounded-lg flex bg-white px-8 py-1 items-center shadow-lg justify-between">
				<div>
					<Link href="/">
						<img width={36} src="./logo.svg"></img>
					</Link>
				</div>
				<div className="">
					<Link className="mr-2" href="/support">asdfasfd</Link>
					<Link href="/support">Join</Link>
				</div>
			</div>
		</div>
	);
}
