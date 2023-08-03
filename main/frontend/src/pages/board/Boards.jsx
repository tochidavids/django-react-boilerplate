import { useEffect, useState } from "react";
import { Link } from "react-router-dom";
import { getDatabaseData } from "../../main";

export default function Boards() {
	const [boards, setBoards] = useState([]);

	useEffect(() => {
		const getData = async () => {
			const boards = await getDatabaseData("boards");
			const currentUser = await getDatabaseData("current-user");
			if (boards)
				setBoards(
					boards.filter(board => board.creator == currentUser[1].id),
				);
		};
		getData();
	}, []);

	return (
		<main className="boards">
			<h1>Your Boards</h1>
			<section className="all-boards">
				{boards &&
					boards.map((board, index) => (
						<Link to="/board-name" key={index}>
							<img src={board.background} alt="" />
							<h1>{board.name}</h1>
						</Link>
					))}
			</section>
		</main>
	);
}
