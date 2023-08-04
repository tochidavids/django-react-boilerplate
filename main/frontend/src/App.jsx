import { BrowserRouter, Routes, Route } from "react-router-dom";
import Layout from "./pages/Layout";
import Boards from "./pages/board/Boards";
import WorkspaceMembers from "./pages/workspace/Members";
import WorkspaceSettings from "./pages/workspace/Settings";
import { useState } from "react";
import WorkspaceLayout from "./pages/workspace/Layout";
// import BoardView from "./pages/board/BoardView";

export default function App() {
  const [current, setCurrent] = useState()

	return (
		<>
			<BrowserRouter>
				<Routes>
					<Route path="/" element={<Layout setCurrent={setCurrent} />}>
						<Route path="boards" element={<Boards />} />
						<Route path="w/:workspaceId" element={<WorkspaceLayout current={current} />}>
							<Route path="home" element={<Boards current={current} />} />
							<Route
								path="members"
								element={<WorkspaceMembers current={current} />}
							/>
							<Route
								path="settings"
								element={<WorkspaceSettings current={current} />}
							/>
						</Route>
						{/* <Route
							path="/board-name"
							element={<BoardView />}
						></Route> */}
					</Route>
				</Routes>
			</BrowserRouter>
		</>
	);
}
