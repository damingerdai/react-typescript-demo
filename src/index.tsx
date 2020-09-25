import * as  React from "react";
import * as ReactDOM from "react-dom";
import { App } from "./components/App";
import './style.scss';

const ROOT = document.querySelector(".container");

const app = <App name="明国宾"/>

ReactDOM.render(app, ROOT);