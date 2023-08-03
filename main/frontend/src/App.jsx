import { BrowserRouter, Routes, Route } from "react-router-dom";
import Layout from "./pages/Layout";
import Boards from "./pages/board/Boards";
import BoardView from "./pages/board/BoardView";

export default function App() {
	return (
		<>
			<BrowserRouter>
				<Routes>
					<Route path="/boards" element={<Layout />}>
						<Route index element={<Boards />} />
						{/* <Route path=":workspace">
                  <Route  />
                </Route> */}
						<Route
							path="/board-name"
							element={<BoardView />}
						></Route>
					</Route>
				</Routes>
			</BrowserRouter>
		</>
	);
}
