import { useEffect, useState } from "react";
import { Link } from "react-router-dom";
import { getDatabaseData } from "../../main";

export default function Boards({ current }) {
	const [boards, setBoards] = useState([]);
	const [workspaceView, setWorkspaceView] = useState();

	useEffect(() => {
		if (current) setWorkspaceView(true);
		else setWorkspaceView(false);

		const getData = async () => {
			if (typeof workspaceView !== "undefined") {
				let boards = await getDatabaseData("boards");
				const currentUser = await getDatabaseData("current-user");
				if (boards)
					boards = boards.filter(
						board => board.creator == currentUser[1].id,
					);

				if (workspaceView) {
					if (boards)
						boards = boards.filter(
							board => board.workspace == current.id,
						);
				}
				setBoards(boards);
			}
		};
		getData();
		// eslint-disable-next-line
	}, [workspaceView]);

	return (
		<main className="boards">
			<h1>{workspaceView ? "" : "Your"} Boards</h1>
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
