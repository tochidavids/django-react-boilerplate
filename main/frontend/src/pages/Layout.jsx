import { useState } from "react";
import { Outlet, Link } from "react-router-dom";
import Sidebar from "../components/Sidebar";
import { logout } from "../main";

export default function Layout({setCurrent}) {
	const [activeDropDown, setActiveDropDown] = useState("");

	// const hideAll = () => {
	// 	for (const key in showDropDown) {
	// 		if ()
	// 		showDropDown[key] = false;
	// 	}
	// };

	// used neutral color for most

	return (
		<div className="body-container">
			<header>
				<nav className="left">
					<Link to="/" className="nav-item grey-hover">
						<div className="logo"></div>
					</Link>
					<div
						className={`nav-item drop-down grey-hover ${
							activeDropDown === "workspaces" ? "focus" : ""
						}`}
						onClick={() => {
							if (activeDropDown === "workspaces")
								setActiveDropDown("");
							else setActiveDropDown("workspaces");
						}}
					>
						Workspaces
						<i className="fa-solid fa-chevron-down"></i>
						{activeDropDown === "workspaces" ? (
							<article>drop down item here</article>
						) : (
							""
						)}
					</div>
					<div
						className={`nav-item drop-down grey-hover ${
							activeDropDown === "starred" ? "focus" : ""
						}`}
						onClick={() => {
							if (activeDropDown === "starred")
								setActiveDropDown("");
							else setActiveDropDown("starred");
						}}
					>
						Starred
						<i className="fa-solid fa-chevron-down"></i>
						{activeDropDown === "starred" ? (
							<article>drop down item here</article>
						) : (
							""
						)}
					</div>
					<div
						className={`plus ${
							activeDropDown === "plus" ? "focus" : ""
						}`}
						onClick={() => {
							if (activeDropDown === "plus")
								setActiveDropDown("");
							else setActiveDropDown("plus");
						}}
					>
						<i className="fa-solid fa-plus"></i>
						{activeDropDown === "plus" ? (
							<article>drop down item here</article>
						) : (
							""
						)}
					</div>
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
				<Sidebar setCurrent={setCurrent} />
				<Outlet />
			</div>
		</div>
	);
}
