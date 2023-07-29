import React from "react";
import ReactDOM from "react-dom/client";
import App from "./App.jsx";
import "./styles/output.css";
import "./styles/input.css";

const root = document.getElementById("root");

document.documentElement.classList.add('dark')

// export const toggleDarkMode = () => {
//   root.classList.toggle('dark')
// }

ReactDOM.createRoot(root).render(
	<React.StrictMode>
		<App />
	</React.StrictMode>,
);
