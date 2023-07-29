import { Outlet, Link } from "react-router-dom";

export default function Layout() {
	return (
		<div className="text-text-light dark:text-text-light bg-surface-light dark:bg-surface-dark">
			<header className="flex justify-between items-center h-12 w-screen px-8">
				<nav className="flex justify-center items-center gap-8">
					<Link to="/" className="">
						<div className="h-4 dark:bg-[url(https://trello.com/assets/87e1af770a49ce8e84e3.gif)]"></div>
					</Link>
					<div className="relative cursor-pointer">
						Workspaces{" "}
						<i className="fa-solid fa-chevron-down ml-4"></i>
						<div className="">
							{/* <Link to='/'>
                            </Link> */}
						</div>
					</div>
					<div className="relative cursor-pointer">
						Recent <i className="fa-solid fa-chevron-down ml-4"></i>
						<div className="">
							{/* <Link to='/'>
                            </Link> */}
						</div>
					</div>
					<div className="relative cursor-pointer">
						Starred{" "}
						<i className="fa-solid fa-chevron-down ml-4"></i>
						<div className="">
							{/* <Link to='/'>
                            </Link> */}
						</div>
					</div>
				</nav>
				<nav className="flex justify-center items-center gap-4">
					<div className="flex items-center justify-start gap-4 px-4 border-1 border-solid border-red-dark">
						<i className="fa-solid fa-magnifying-glass"></i>
						<input type="text" className="border-0 outline-0" />
					</div>
					<i className="fa-regular fa-bell w-8 h-8"></i>
					<i className="fa-solid fa-circle-question"></i>
					<i
						className="fa-solid fa-circle-half-stroke"
						onClick={() => console.log("change mode")}
					></i>
				</nav>
			</header>
			<Outlet />
		</div>
	);
}
