import React, { useState, useEffect } from "react";
import useSound from "use-sound";

import "../styles.css";

const Pomodoro = () => {
	const [second, setSecond] = useState("00");
	const [minute, setMinute] = useState("25");
	const [counter, setCounter] = useState(5);
	const [active, setActive] = useState(false);
	const [play] = useSound("../sounds/crash.mp3");

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
		setTimeout(() => {
			if (counter === 0) {
				setSecond("00");
				setMinute("00");
				setCounter(0);
				setActive(false);
				play();
			}
		});

		return () => clearInterval(intervalId);
	}, [active, counter, play]);

	return (
		<div id="pomodoro">
			<h1>
				<span>{minute}</span>
				<span>:</span>
				<span>{second}</span>
			</h1>
			<p>lorem ipsum dolor sit amet, consectetur</p>
			<button onClick={() => setActive(!active)}>Start</button>
			<button onClick={play}>sound</button>
		</div>
	);
};

export default Pomodoro;
