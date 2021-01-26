import React from "react";
import { BrowserRouter as Router, Route } from "react-router-dom";
import { Card, Box, makeStyles } from "@material-ui/core";

import Navbar from "./Navbar";
import Pomodoro from "./Pomodoro";
import Shortbreak from "./Shortbreak";
import Longbreak from "./Longbreak";
import "../styles.css";
const Header = () => {
	const useStyles = makeStyles((root) => ({
		header: {
			height: "600px",
			paddingTop: "100px",
			[root.breakpoints.down("sm")]: {
				height: "450px",
				paddingTop: "30px",
			},
		},

		card: {
			[root.breakpoints.down("sm")]: {
				width: "325px",
			},
			boxShadow: "15px 15px 15px #0C6170",
			borderRadius: "20px",
			width: "550px",
		},
	}));
	const classes = useStyles();
	return (
		<div id="header" className={classes.header}>
			<Router>
				<Navbar className={classes.navbar} />
				<Box display="flex" justifyContent="center">
					<Card className={classes.card}>
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
