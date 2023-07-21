import { useState } from "react";
import { Link, Outlet } from "react-router-dom";

export default function Layout() {
    const [showPlans, setShowPlans] = useState(false)

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
						<li className="plans" onClick={() => setShowPlans(old => !old)}>
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
            {showPlans ? <section className="plans-menu">
                <div className="left">
                    <div className="card">
                        <Link to='/standard' className="card-link"></Link>
                        <Link to='/premium' className="card-link"></Link>
                        <Link to='/enterprise' className="card-link"></Link>
                    </div>
                </div>
            </section> : ''}
			<Outlet />
		</div>
	);
}
