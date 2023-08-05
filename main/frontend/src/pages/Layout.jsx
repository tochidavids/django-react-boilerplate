import { useState } from "react";
import { Outlet, Link } from "react-router-dom";
import Sidebar from "../components/Sidebar";
import { logout } from "../main";
import AddNewWorkspace from "./workspace/AddNew";

export default function Layout({ setCurrent }) {
	const [activeDropDown, setActiveDropDown] = useState("");
	const [showAddWorkspace, setShowAddWorkspace] = useState(false);

	// const hideAll = () => {
	// 	for (const key in showDropDown) {
	// 		if ()
	// 		showDropDown[key] = false;
	// 	}
	// };

	// used neutral color for most

	return (
		<div className="body-container">
			<header className="page">
				<nav className="left">
					<Link to="/" className="nav-item grey-hover">
						<div className="logo"></div>
					</Link>
					<div
						className="plus"
						onClick={() => {
							if (activeDropDown === "plus")
								setActiveDropDown("");
							else setActiveDropDown("plus");
						}}
					>
						<i className="fa-solid fa-plus"></i>
					</div>
					{activeDropDown === "plus" ? (
						<article>
							<div className="option grey-hover">
								<i className="fa-brands fa-trello"></i>
								Create Board
							</div>
							<div
								className="option grey-hover"
								onClick={() => {
									setShowAddWorkspace(true);
									setActiveDropDown("");
								}}
							>
								<i className="fa-solid fa-users"></i>
								Create Workspace
							</div>
						</article>
					) : (
						""
					)}
				</nav>
				<nav className="right">
					<i className="fa-regular fa-bell">
						<div className="nav-info">Notifications</div>
					</i>
					<i className="fa-solid fa-circle-question end-icons grey-hover">
						<div className="nav-info">Information</div>
					</i>
					<i className="fa-solid fa-circle-half-stroke end-icons grey-hover">
						<div className="nav-info">Theme</div>
					</i>
					<i
						className="fa-solid fa-user end-icons grey-hover"
						onClick={() => {
							if (activeDropDown === "account")
								setActiveDropDown("");
							else setActiveDropDown("account");
						}}
					>
						<div className="nav-info">Account</div>
					</i>
					{activeDropDown === "account" ? (
						<article className="account">
							<h1>account</h1>
							<h2>Tochi Davids</h2>
							<p>tochidavids18@gmail.com</p>
							<Link to="/" className="account-link grey-hover">
								Profile
							</Link>
							<form action="" onSubmit={logout}>
								<input
									type="submit"
									className="account-link grey-hover"
									value="Logout"
								/>
							</form>
						</article>
					) : (
						""
					)}
				</nav>
			</header>
			<div className="main-container">
				<Sidebar
					setCurrent={setCurrent}
					setShowAddWorkspace={setShowAddWorkspace}
				/>
				<Outlet />
			</div>
			{showAddWorkspace ? (
				<AddNewWorkspace setShowAddWorkspace={setShowAddWorkspace} />
			) : (
				""
			)}
		</div>
	);
}
