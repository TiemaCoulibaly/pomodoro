import React, { useState, useEffect } from "react";
import "../styles.css";
const Longbreak = () => {
	const [second, setSecond] = useState("00");
	const [minute, setMinute] = useState("15");
	const [counter, setCounter] = useState(900);
	const [active, setActive] = useState(false);

	useEffect(() => {
		let intervalId;

		if (active) {
			intervalId = setInterval(() => {
				const secondCounter = counter % 60;
				const minuteCounter = Math.floor(counter / 60);

				setSecond(secondCounter);
				setMinute(minuteCounter);
				setCounter((counter) => counter - 1);
			}, 1000);
		}
		return () => clearInterval(intervalId);
	}, [counter, active]);
	return (
		<div id="longbreak">
			<h1>
				<span>{minute}</span>
				<span>:</span>
				<span>{second}</span>
			</h1>
			<p>lorem ipsum dolor sit amet, consectetur</p>
			<button onClick={() => setActive(!active)}>START</button>
		</div>
	);
};

export default Longbreak;
