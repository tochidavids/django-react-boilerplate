import { Outlet, Link } from "react-router-dom";

export default function Layout() {
	return (
		<div className="text-subtle-light dark:text-subtle-dark bg-surface-light dark:bg-surface-dark">
			<header className="flex justify-between items-center h-12 w-screen px-8 border-b-[0.5px] border-solid border-grey-dark text-[14px]">
				<nav className="flex justify-center items-center gap-8">
					<Link to="/" className="p-2 hover:bg-subtlest-light dark:hover:bg-subtlest-dark rounded">
						<div className="h-4 w-20 bg-no-repeat bg-contain grayscale m-0 p-0 dark:bg-[url(https://trello.com/assets/87e1af770a49ce8e84e3.gif)]"></div>
					</Link>
					<div className="relative cursor-pointer">
						Workspaces{" "}
						<i className="fa-solid fa-chevron-down ml-2"></i>
						<div className="">
							{/* <Link to='/'>
                            </Link> */}
						</div>
					</div>
					<div className="relative cursor-pointer">
						Recent <i className="fa-solid fa-chevron-down ml-2"></i>
						<div className="">
							{/* <Link to='/'>
                            </Link> */}
						</div>
					</div>
					<div className="relative cursor-pointer">
						Starred{" "}
						<i className="fa-solid fa-chevron-down ml-2"></i>
						<div className="">
							{/* <Link to='/'>
                            </Link> */}
						</div>
					</div>
				</nav>
				<nav className="flex justify-center items-center gap-4">
					<div className="flex items-center justify-start gap-4 px-4 border border-solid border-grey-dark">
						<i className="fa-solid fa-magnifying-glass"></i>
						<input type="text" className="border-0 outline-0 bg-surface-light dark:bg-surface-dark dark:text-subtle-dark" />
					</div>
					{/* <div className=""></div> */}
					<i className="fa-regular fa-bell text-inverse-dark w-8 h-8 bg-brand-dark hover:bg-brand-hover rounded-full flex justify-center items-center"></i>
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
