import React from "react";
import { Link } from "react-router-dom";

const Navbar = () => {
	return (
		<div>
			<h3>
				<Link to="/">Pomodoro</Link>
			</h3>
			<h3>
				<Link to="/shortbreak">Shortbreak</Link>
			</h3>
			<h3>
				<Link to="/longbreak">Longbreak</Link>
			</h3>
		</div>
	);
};

export default Navbar;
