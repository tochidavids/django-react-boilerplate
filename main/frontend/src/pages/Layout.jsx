import { Outlet, Link } from "react-router-dom";

function Layout() {
	return (
		<>
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
						Workspaces
						<div className="drop-down">
                            {/* <Link to='/'>
                            </Link> */}
                        </div>
					</div>
					<div className="relative">
						Recent
						<div className="drop-down">
                            {/* <Link to='/'>
                            </Link> */}
                        </div>
					</div>
					<div className="relative">
                        Starred
						<div className="drop-down">
                            {/* <Link to='/'>
                            </Link> */}
                        </div>
					</div>
				</nav>
			</header>
			<Outlet />
		</>
	);
}

export default Layout