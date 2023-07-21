import { Link, Outlet } from "react-router-dom";

export default function Layout() {
	return (
		<div className="page">
			<header>
				<Link to="/">
					<div className="img-container logo">
						<img
							src="https://upload.wikimedia.org/wikipedia/en/thumb/8/8c/Trello_logo.svg/1280px-Trello_logo.svg.png"
							alt=""
						/>
					</div>
				</Link>
				<nav>
					<li>
						<Link to="/features">features</Link>
					</li>
					<li>
						<Link to="/solutions">solutions</Link>
					</li>
					<li className="plans">
						Plans
						<i className="fa-solid fa-chevron-down"></i>
					</li>
					<li>
						<Link to="/pricing">pricing</Link>
					</li>
					<li>
						<Link to="/resources">resources</Link>
					</li>
				</nav>
				<div className="sign-in">
					<div className="login">Log in</div>
					<div className="sign-up">Get Trello for free</div>
				</div>
			</header>
			<Outlet />
		</div>
	);
}
