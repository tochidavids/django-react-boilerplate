import { useEffect, useState } from "react";
import { Link } from "react-router-dom";
import { getDatabaseData } from "../main";
import AddNewWorkspace from "../pages/workspace/AddNew";

export default function Sidebar({ setCurrent }) {
	const [showWorkspaceNav, setShowWorkspaceNav] = useState({});
	const [workspaces, setWorkspaces] = useState([]);
	const [showAddWorkspace, setShowAddWorkspace] = useState(false);

	useEffect(() => {
		const getData = async () => {
			const workspaces = await getDatabaseData("workspaces");
			const currentUser = await getDatabaseData("current-user");
			if (workspaces)
				setWorkspaces(
					workspaces.filter(
						board => board.creator == currentUser[1].id,
					),
				);
		};
		getData();
	}, []);

	return (
		<nav className="sidebar">
			<Link to="/boards" className="nav-link boards-link focus">
				<i className="fa-brands fa-trello"></i>
				Boards
			</Link>
			<div className="line"></div>
			<div className="add">
				<div className="">Workspaces</div>
				<i
					className="fa-solid fa-plus"
					onClick={() => setShowAddWorkspace(true)}
				></i>
			</div>
			{showAddWorkspace ? (
				<AddNewWorkspace setShowAddWorkspace={setShowAddWorkspace} />
			) : (
				""
			)}
			{workspaces &&
				workspaces.map((workspace, index) => (
					<section className="workspace" key={index}>
						<div
							className="title"
							onClick={() => setShowWorkspaceNav(old => !old)}
						>
							<h1>{workspace.name}</h1>
							<i
								className={`fa-solid fa-chevron-${
									showWorkspaceNav ? "up" : "down"
								}`}
							></i>
						</div>
						{showWorkspaceNav ? (
							<div className="links">
								<Link
									to={`w/${workspace.id}/home  `}
									className="nav-link"
									onClick={() => setCurrent(workspace)}
								>
									<i className="fa-brands fa-trello"></i>
									Boards
								</Link>
								<Link
									to={`w/${workspace.id}/members`}
									className="nav-link"
									onClick={() => setCurrent(workspace)}
								>
									<i className="fa-solid fa-user"></i>
									Members
								</Link>
								<Link
									to={`w/${workspace.id}/settings`}
									className="nav-link"
									onClick={() => setCurrent(workspace)}
								>
									<i className="fa-solid fa-gear"></i>
									Settings
								</Link>
							</div>
						) : (
							""
						)}
					</section>
				))}
		</nav>
	);
}
