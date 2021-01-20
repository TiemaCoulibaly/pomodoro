import React from "react";
import { BrowserRouter as Router, Route, Link, Switch } from "react-router-dom";
import "../styles.css";

import Pomodoro from "./Pomodoro";
import Shortbreak from "./Shortbreak";
import Longbreak from "./Longbreak";

const Header = () => {
	return (
		<div id="header">
			<Router>
				<Switch>
					<Link to="/pomodoro">Pomodoro</Link>
				</Switch>
				<Switch>
					<Link to="/longbreak">Longbreak</Link>
				</Switch>
				<Switch>
					<Link to="/shortbreak">Shortbreak</Link>
				</Switch>
				<Route path="/Pomodoro">
					<Pomodoro />
				</Route>
				<Route path="/Shortbreak">
					<Shortbreak />
				</Route>
				<Route path="/Longbreak">
					<Longbreak />
				</Route>
			</Router>
		</div>
	);
};

export default Header;
