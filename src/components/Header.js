import React from "react";
import { BrowserRouter as Router, Route } from "react-router-dom";
import { Card, Box } from "@material-ui/core";
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
				<Box display="flex" justifyContent="center">
					<Card boxShadow={3} style={{ width: "300px" }}>
						<Route path="/" exact>
							<Pomodoro />
						</Route>
						<Route path="/Shortbreak">
							<Shortbreak />
						</Route>
						<Route path="/Longbreak">
							<Longbreak />
						</Route>
					</Card>
				</Box>
			</Router>
		</div>
	);
};

export default Header;
