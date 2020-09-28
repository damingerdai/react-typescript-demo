import * as React from "react";
import "./App.scss";

export class App extends React.Component<unknown, unknown> {
	constructor(props: unknown) {
		super(props);
	}

	// eslint-disable-next-line @typescript-eslint/explicit-module-boundary-types
	render() {
		return (
			<div>
				<nav className="navbar navbar-expand-lg navbar-dark bg-primary">
					<a className="navbar-brand" href="#">
						大明二代
					</a>
					<span className="seprator"></span>
					<button className="btn btn-primary">Search</button>
				</nav>
			</div>
		);
	}
}
