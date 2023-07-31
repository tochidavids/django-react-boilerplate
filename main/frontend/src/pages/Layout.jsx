// import { useState } from "react";
import { Outlet, Link } from "react-router-dom";

export default function Layout() {
	// const [showDropDown, setShowDropDown] = useState({
	// 	workspaces: false,
	// 	recent: false,
	// 	starred: false,
	// });

	// used neutral color for most

	return (
		<div className="body-container">
			<header>
				<nav className="left">
					<Link to="/" className="nav-item grey-hover">
						<div className="logo"></div>
					</Link>
					{/* workspaces */}
					<div className="">
						<div
							className="nav-item grey-hover"
							// onClick={() =>
							// 	setShowDropDown(old => ({
							// 		...old,
							// 		workspaces: !old.workspaces,
							// 	}))
							// }
						>
							Workspaces
							<i className="fa-solid fa-chevron-down"></i>
						</div>
						{/* <article
							className={`absolute -bottom-16 left-1/2 -translate-x-1/2 bg-surface-overlay-light dark:bg-surface-overlay-dark border border-neutral-light dark:border-neutral-dark border-solid rounded-lg ${
								showDropDown.workspaces ? "" : "hidden"
							}`}
						>
							drop down item here
						</article> */}
					</div>
					{/* recent */}
					<div className="  ">
						<div
							className="nav-item grey-hover"
							// onClick={() =>
							// 	setShowDropDown(old => ({
							// 		...old,
							// 		recent: !old.recent,
							// 	}))
							// }
						>
							Recent
							<i className="fa-solid fa-chevron-down"></i>
						</div>
						{/* <div
							className={`absolute -bottom-8 left-1/2 -translate-x-1/2 border border-neutral-light dark:border-neutral-dark border-solid rounded-lg ${
								showDropDown.recent ? "" : "hidden"
							}`}
						>
							{" "}
							drop down info here
						</div> */}
					</div>
					{/* starred */}
					<div className="">
						<div
							className="nav-item grey-hover"
							// onClick={() =>
							// 	setShowDropDown(old => ({
							// 		...old,
							// 		starred: !old.starred,
							// 	}))
							// }
						>
							Starred
							<i className="fa-solid fa-chevron-down"></i>
						</div>
						{/* <div
							className={`absolute -bottom-16 left-1/2 -translate-x-1/2 ${
								showDropDown.starred ? "" : "hidden"
							}`}
						>
							drop down info here
						</div> */}
					</div>
				</nav>
				<nav className="right">
					<div className="">
						<i className="fa-solid fa-magnifying-glass"></i>
						<input type="text" />
					</div>
					<i className="fa-regular fa-bell"></i>
					<i className="fa-solid fa-circle-question"></i>
					<i className="fa-solid fa-circle-half-stroke"></i>
				</nav>
			</header>
			<Outlet />
		</div>
	);
}
