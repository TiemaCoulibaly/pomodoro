import React from "react";
import { Link } from "react-router-dom";
import { Box, Button, makeStyles } from "@material-ui/core";

import "../styles.css";

const Navbar = () => {
	const useStyles = makeStyles({
		root: {
			paddingBottom: "5px",
		},

		pomodoro: {
			backgroundColor: "#F2545B",
			height: "35px",
			width: "110px",
			fontWeight: "bold",
			color: "white",
			boxShadow: "4px 4px 4px 1px black",
			margin: "10px",
			textDecoration: "none",
			fontSize: 13,
			"&:hover": {
				boxShadow: "7px 7px 7px  #FD151B",
			},
		},
		shortbreak: {
			backgroundColor: "#F2545B",
			height: "35px",
			width: "110px",
			fontWeight: "bold",
			color: "white",
			boxShadow: "4px 4px 4px 1px black",
			margin: "10px",
			textDecoration: "none",
			fontSize: 13,
			"&:hover": {
				boxShadow: "7px 7px 7px  #FD151B",
			},
		},
		longbreak: {
			backgroundColor: "#F2545B",
			height: "35px",
			width: "110px",
			fontWeight: "bold",
			color: "white",
			boxShadow: "4px 4px 4px 1px black",
			margin: "10px",
			textDecoration: "none",
			fontSize: 13,
			"&:hover": {
				boxShadow: "7px 7px 7px  #FD151B",
			},
		},
	});
	const classes = useStyles();
	return (
		<div className={classes.root}>
			<Box display="flex" justifyContent="center">
				<Button className={classes.pomodoro}>
					<Link className="linkNavbar" to="/">
						Pomodoro
					</Link>
				</Button>

				<Button className={classes.shortbreak}>
					<Link className="linkNavbar" to="/shortbreak">
						Shortbreak
					</Link>
				</Button>

				<Button className={classes.longbreak}>
					<Link className="linkNavbar" to="/longbreak">
						Longbreak
					</Link>
				</Button>
			</Box>
		</div>
	);
};

export default Navbar;
