import { Outlet, Link } from "react-router-dom";

function Layout() {
	return (
		<div className="dark text-text-light dark:text-text-light bg-">
			<header className="flex justify-between items-center h-12 w-screen px-8">
				<nav className="flex justify-center items-center gap-8">
					<Link to="/">
						<img
							className="h-4 w-full border"
							src="https://trello.com/assets/d947df93bc055849898e.gif"
							alt=""
						/>
					</Link>
					<div className="relative">
						Workspaces{" "}
						<i className="fa-solid fa-chevron-down ml-4"></i>
						<div className="">
							{/* <Link to='/'>
                            </Link> */}
						</div>
					</div>
					<div className="relative">
						Recent <i className="fa-solid fa-chevron-down ml-4"></i>
						<div className="">
							{/* <Link to='/'>
                            </Link> */}
						</div>
					</div>
					<div className="relative">
						Starred{" "}
						<i className="fa-solid fa-chevron-down ml-4"></i>
						<div className="">
							{/* <Link to='/'>
                            </Link> */}
						</div>
					</div>
				</nav>
				<nav className="flex justify-center items-center gap-4">
					<div className="flex items-center justify-start gap-4 px-4">
						<i className="fa-solid fa-magnifying-glass"></i>
						<input type="text" className="border-0 outline-0" />
					</div>
					<i className="fa-regular fa-bell "></i>
					<i className="fa-solid fa-circle-question"></i>
					<i className="fa-solid fa-circle-half-stroke"></i>
				</nav>
			</header>
			<Outlet />
		</div>
	);
}

export default Layout;
