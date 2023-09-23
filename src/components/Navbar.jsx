import { Link } from "nextra-theme-docs";

export default function Navbar({ children }) {
	return (
		<div className="fixed left-0 right-0 top-0 h-[60px] flex justify-center py-1">
			<div className="min-w-[900px] rounded-lg flex bg-white px-8 py-1 items-center shadow-lg justify-between">
				<div>
					<Link href="/">
						<img width={36} src="./logo.svg"></img>
					</Link>
				</div>
				<div className="">
					<Link className="mr-2" href="/support">Support</Link>
					<Link href="/support">Join</Link>
				</div>
			</div>
		</div>
	);
}
