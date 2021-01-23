import React from "react";
import { Link } from "react-router-dom";
import { Box, Button, makeStyles } from "@material-ui/core";

import "../styles.css";

const Navbar = () => {
	const useStyles = makeStyles({
		longbreak: {
			fontSize: 13,
			backgroundColor: "#BC8DA7",
			height: "30px",
			width: "100px",
			fontWeight: "bold",
			color: "white",
		},
	});
	const classes = useStyles();
	return (
		<div>
			<Box display="flex" justifyContent="center">
				<div>
					<Link className="linkNavbar" to="/">
						Pomodoro
					</Link>
				</div>
				<div>
					<Link className="linkNavbar" to="/shortbreak">
						Shortbreak
					</Link>
				</div>
				<Button className={classes.longbreak} variant="contained">
					<Link className="linkNavbar" to="/longbreak">
						Longbreak
					</Link>
				</Button>
			</Box>
		</div>
	);
};

export default Navbar;
