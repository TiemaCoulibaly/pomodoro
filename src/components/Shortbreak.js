import React, { useState } from "react";
import "../styles.css";

const Shortbreak = () => {
	const [second, setSecond] = useState("00");
	const [minute, setMinute] = useState("15");
	const [counter, setCounter] = useState(0);
	return (
		<div id="shortbreak">
			<h1>
				<span>{minute}</span>
				<span>:</span>
				<span>{second}</span>
			</h1>
			<p>lorem ipsum dolor sit amet, consectetur</p>
		</div>
	);
};

export default Shortbreak;
