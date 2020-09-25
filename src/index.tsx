import * as  React from "react";
import * as ReactDOM from "react-dom";
import { App } from "./app/App";
import './style.scss';

const ROOT = document.querySelector(".container");

const app = <App/>

ReactDOM.render(app, ROOT);