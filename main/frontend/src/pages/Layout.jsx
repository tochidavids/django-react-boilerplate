import { useState } from "react";
import { Outlet, Link } from "react-router-dom";

export default function Layout() {
	const [showDropDown, setShowDropDown] = useState({
		workspaces: false,
		recent: false,
		starred: false,
	});

	return (
		<div className="text-subtle-light dark:text-subtle-dark bg-surface-light dark:bg-surface-dark">
			<header className="flex justify-between items-center h-12 w-screen px-4 border-b-[0.25px] border-solid border-neutral-light dark:border-neutral-dark text-[14px]">
				<nav className="flex justify-center items-center gap-2">
					<Link
						to="/"
						className="h-8 px-2 hover:bg-neutral-light dark:hover:bg-neutral-dark rounded flex items-center"
					>
						<div className="h-4 w-20 bg-no-repeat bg-contain m-0 p-0 bg-[url(../assets/logo-gif.gif)]"></div>
					</Link>
					<div className="relative cursor-pointer  ">
						<div
							className="h-8 px-3 rounded hover:bg-neutral-light dark:hover:bg-neutral-dark flex items-center"
							onClick={() =>
								setShowDropDown(old => ({
									...old,
									workspaces: !old.workspaces,
								}))
							}
						>
							Workspaces
							<i className="fa-solid fa-chevron-down ml-2"></i>
						</div>
						<div
							className={`absolute -bottom-16 left-1/2 -translate-x-1/2 bg-surface-overlay-light dark:bg-surface-overlay-dark border border-neutral-light dark:border-neutral-dark border-solid rounded-lg ${
								showDropDown.workspaces ? "" : "hidden"
							}`}
						>
							<Link to="/">Trello Workspace</Link>
						</div>
					</div>

					<div className="relative cursor-pointer  ">
						<div
							className="h-8 px-3 rounded hover:bg-neutral-light dark:hover:bg-neutral-dark flex items-center"
							onClick={() =>
								setShowDropDown(old => ({
									...old,
									recent: !old.recent,
								}))
							}
						>
							Recent
							<i className="fa-solid fa-chevron-down ml-2"></i>
						</div>
						<div
							className={`absolute -bottom-8 left-1/2 -translate-x-1/2 border border-neutral-light dark:border-neutral-dark border-solid rounded-lg ${
								showDropDown.recent ? "" : "hidden"
							}`}
						>
							<h1 className="">Current Workspace</h1>
							<div className="flex justify-start items-center gap-8">
								<div className="p-12 bg-green-light rounded">T</div>
								<h2>Trello Workspace</h2>
							</div>
							<div className="w-full h-1 bg-neutral-light dark:bg-neutral-dark"></div>
							<Link to='/' className="flex justify-start items-center gap-8 rounded hover:bg-neutral-light dark:hover:bg-neutral-dark">
								<div className="p-12 bg-green-light rounded">T</div>
								<h2>Trello Workspace</h2>
							</Link>
						</div>
					</div>
					<div className="relative cursor-pointer">
						<div
							className="h-8 px-3 rounded hover:bg-neutral-light dark:hover:bg-neutral-dark flex items-center"
							onClick={() =>
								setShowDropDown(old => ({
									...old,
									starred: !old.starred,
								}))
							}
						>
							Starred
							<i className="fa-solid fa-chevron-down ml-2"></i>
						</div>
						<div
							className={`absolute -bottom-16 left-1/2 -translate-x-1/2 ${
								showDropDown.starred ? "" : "hidden"
							}`}
						>
							<Link to="/">Trello Workspace</Link>
						</div>
					</div>
				</nav>
				<nav className="flex justify-center items-center gap-4">
					<div className="flex items-center justify-start gap-4 px-4 border border-solid border-grey-dark">
						<i className="fa-solid fa-magnifying-glass"></i>
						<input
							type="text"
							className="border-0 outline-0 bg-surface-light dark:bg-surface-dark dark:text-subtle-dark"
						/>
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
