import React from "react";
import ReactDOM from "react-dom";
import "./css/styles.css";
import 'bootstrap/dist/css/bootstrap.css';
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
