import React from "react";
import { makeStyles } from "@material-ui/core";

const Footer = () => {
	const useStyles = makeStyles({
		footer: {
			textAlign: "center",
			backgroundColor: "#37beb0",
		},
	});

	const classes = useStyles();
	return (
		<footer className={classes.footer}>
			&copy;{" "}
			<span>
				<a
					target="_blank"
					rel="noreferrer"
					href="https://tiema-resume.web.app/">
					Tiema Coulibaly{" "}
				</a>
			</span>
			. All rights reserved
		</footer>
	);
};

export default Footer;
