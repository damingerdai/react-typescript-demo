import * as React from "react";
import { NavLink, Route } from "react-router-dom";
// @ts-ignore
import githubLogo from "../assets/github-circle-white-transparent.svg";
console.log(githubLogo);

import "./App.scss";

const PrimaryLayout = () => (
	<div className="primary-layout">
		<header>Our React Router 4 App</header>
		<main>
			<Route path="/" exact component={HomePage} />
			<Route path="/users" component={UsersPage} />
		</main>
	</div>
);
const HomePage = () => <div>Home Page</div>;
const UsersPage = () => <div>Users Page</div>;

export class App extends React.Component<unknown, unknown> {
	constructor(props: unknown) {
		super(props);
	}

	render(): JSX.Element {
		return (
			<div>
				<nav className="navbar navbar-expand-lg navbar-dark bg-primary">
					<a className="navbar-brand" href="#">
						大明二代
					</a>
					<NavLink
						activeClassName="active"
						className=" navbar-nav mr-aut"
						to="/"
					>
						<a className="nav-link">Home</a>
					</NavLink>

					<a className="navbar-nav mr-aut">
						<NavLink
							activeClassName="active"
							className="nav-item nav-link"
							to="/users"
						>
							Users
						</NavLink>
					</a>
					<span className="seprator"></span>
					<img
						src="assets/578a4d85ebf21ff409783136510fdb07.svg"
						className="img-responsive circle"
						alt="Cinque Terre"
					/>
					<button className="btn btn-primary">Search</button>
				</nav>
				<PrimaryLayout />
			</div>
		);
	}
}
