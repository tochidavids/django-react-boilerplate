import "./styles/styles.css";
import { BrowserRouter, Routes, Route } from "react-router-dom";
import Layout from "./pages/Layout";
import Home from "./pages/Home";
import Features from "./pages/Features";
import Pricing from "./pages/Pricing";
import Resources from "./pages/Resources";
import Solutions from "./pages/Solutions";
import Plans from "./pages/Plans";

function App() {
	return (
		<BrowserRouter>
			<Routes>
				<Route path="/" element={<Layout />}>
					<Route index element={<Home />} />
					<Route path="/features" element={<Features />} />
					<Route path="/pricing" element={<Pricing />} />
					<Route path="/resources" element={<Resources />} />
					<Route path="/solutions" element={<Solutions />} />
					<Route path="/plans" element={<Plans />} />
				</Route>
			</Routes>
		</BrowserRouter>
	);
}

export default App;
