import { useEffect, useState } from "react";
import { Link } from "react-router-dom";
import { getDatabaseData } from "../../main";

export default function Boards() {
	const [boards, setBoards] = useState();

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
				{ boards && boards.map(value => (
					<Link to="/board-name" key={value}>
						<img src="https://picsum.photos/225/125" alt="" />
						<h1>Board Name {value} </h1>
					</Link>
				))}
			</section>
		</main>
	);
}
