import { Outlet } from "react-router-dom";

export default function WorkspaceLayout({ current }) {
	return (
		<section>
			<header className="workspace">
				<div className="top">
					<div className="info">
						<span>
							<h1>{current ? current.name : ""}</h1>
							<i className="fa-solid fa-pen grey-hover"></i>
						</span>
					</div>
					<button>
						<i className="fa-solid fa-user-plus"></i> Invite
						Workspace Members
					</button>
				</div>
				<p>{current ? current.description : ""}</p>
			</header>
			<div className="header-line"></div>
			<Outlet />
		</section>
	);
}
