import * as React from "react";
import * as ReactDOM from "react-dom";
import { BrowserRouter } from "react-router-dom";

import { App } from "./app/App";
import "./style.scss";

const ROOT = document.querySelector("#root");

const app = (
	<BrowserRouter>
		<App/>
	</BrowserRouter>
)

ReactDOM.render(app, ROOT);
