import { Link, Outlet } from "react-router-dom";

export default function Layout() {
	return (
		<div className="page">
			<header>
				<section className="left">
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
						<li>
							<Link to="/plans">plans</Link>
						</li>
						<li>
							<Link to="/pricing">pricing</Link>
						</li>
						<li>
							<Link to="/resources">resources</Link>
						</li>
					</nav>
				</section>
				<div className="sign-in">
					<a className="login" href="/login">
						Log in
					</a>
					<a className="sign-up" href="/signup">
						Get Trello for free
					</a>
				</div>
			</header>

			<Outlet />
		</div>
	);
}
