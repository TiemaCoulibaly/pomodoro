import React from "react";
import { BrowserRouter as Router, Route } from "react-router-dom";
import "../styles.css";

import Navbar from "./Navbar";
import Pomodoro from "./Pomodoro";
import Shortbreak from "./Shortbreak";
import Longbreak from "./Longbreak";

const Header = () => {
	return (
		<div id="header">
			<Router>
				<Navbar />
				<Route path="/" exact>
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
