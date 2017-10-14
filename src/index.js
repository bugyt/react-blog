import React from "react";
import ReactDOM from "react-dom";
import "./css/index.css";
import "./css/signin.css";
import "./css/styles.css";
import "./css/App.css";
import App from "./App";
import registerServiceWorker from "./registerServiceWorker";
import { BrowserRouter } from "react-router-dom";

ReactDOM.render(
	<BrowserRouter basename="/">
		<App />
	</BrowserRouter>,
	document.getElementById("root")
);

// ReactDOM.render(<App />, document.getElementById("root"));

registerServiceWorker();
