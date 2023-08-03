import { useState } from "react";
import { Link } from "react-router-dom";

export default function Sidebar() {
	const [showWorkspaceNav, setShowWorkspaceNav] = useState(true);

	return (
		<nav className="sidebar">
			<Link to="/boards" className="nav-link boards focus">
				<i className="fa-brands fa-trello"></i>
				Boards
			</Link>
			<div className="line"></div>
			<div className="add">
				<div className="">Workspaces</div>
				<i className="fa-solid fa-plus"></i>
			</div>
			<section className="workspace">
				<div
					className="title"
					onClick={() => setShowWorkspaceNav(old => !old)}
				>
					<h1>Trello Workspace</h1>
					<i
						className={`fa-solid fa-chevron-${
							showWorkspaceNav ? "up" : "down"
						}`}
					></i>
				</div>
				{showWorkspaceNav ? (
					<div className="links">
						<Link to="/boards" className="nav-link">
							<i className="fa-brands fa-trello"></i>
							Boards
						</Link>
						<Link to="/members" className="nav-link">
							<i className="fa-solid fa-user"></i>
							Members
						</Link>
						<Link to="/settings" className="nav-link">
							<i className="fa-solid fa-gear"></i>
							Settings
						</Link>
					</div>
				) : (
					""
				)}
			</section>
		</nav>
	);
}
