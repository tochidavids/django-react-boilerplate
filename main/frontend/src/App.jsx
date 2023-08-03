import { BrowserRouter, Routes, Route } from "react-router-dom";
import Layout from "./pages/Layout";
import Boards from "./pages/board/Boards";
import WorkspaceHome from "./pages/workspace/Home";
import WorkspaceMembers from "./pages/workspace/Members";
import WorkspaceSettings from "./pages/workspace/Settings";
// import BoardView from "./pages/board/BoardView";

export default function App() {
	return (
		<>
			<BrowserRouter>
				<Routes>
					<Route path="/" element={<Layout />}>
						<Route path="boards" element={<Boards />} />
						<Route path="w/:workspaceId">
							<Route path="home" element={<WorkspaceHome />} />
							<Route
								path="members"
								element={<WorkspaceMembers />}
							/>
							<Route
								path="settings"
								element={<WorkspaceSettings />}
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
