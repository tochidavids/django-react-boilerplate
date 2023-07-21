import { useEffect, useState, useRef } from "react";
import { Link, Outlet } from "react-router-dom";

export default function Layout() {
	const [showMenu, setShowMenu] = useState(false);
	const headerRef = useRef();

	useEffect(() => {
		if (showMenu) {
			document.body.style.overflow = "hidden";
			headerRef.current.className = "show-menu";
		} else {
			document.body.style.overflow = "unset";
			headerRef.current.className = "";
		}
	}, [showMenu]);

	return (
		<div className="page">
			<header ref={headerRef}>
				<section className="left">
					<Link to="/" className="home-link">
						<div className="img-container">
							<img
								src="https://upload.wikimedia.org/wikipedia/en/thumb/8/8c/Trello_logo.svg/1280px-Trello_logo.svg.png"
								alt=""
							/>
						</div>
					</Link>
					{window.innerWidth < 975 ? (
						!showMenu ? (
							<i
								className="fa-solid fa-bars"
								onClick={() => setShowMenu(true)}
							></i>
						) : (
							<i
								className="fa-solid fa-xmark"
								onClick={() => setShowMenu(false)}
							></i>
						)
					) : (
						""
					)}

					<nav className="menu">
						<li>
							<Link to="/features" className="first">
								features
							</Link>
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

				<div className="sign-in menu">
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
