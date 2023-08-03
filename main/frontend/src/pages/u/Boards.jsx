import { Link } from "react-router-dom";

const list = [1, 2, 3, 4, 5, 6, 7, 8, 9, 10, 11, 12, 13, 14, 15];

export default function Boards() {
	return (
		<main className="boards">
			<h1>Your Boards</h1>
			<section className="all-boards">
				{list.map(value => (
					<Link to="/" key={value}>
						<img src="https://picsum.photos/300/150" alt="" />
						<h1>Board Name {value} </h1>
					</Link>
				))}
			</section>
		</main>
	);
}
