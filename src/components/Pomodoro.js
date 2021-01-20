import React, { useState, useEffect } from "react";
import "../styles.css";

const Pomodoro = () => {
	const [second, setSecond] = useState("00");
	const [minute, setMinute] = useState("25");
	const [counter, setCounter] = useState(5);
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
		if (counter === 0) {
			let ride = new Audio("../sounds/crash.mp3");
			ride.play();
			console.log(ride);

			setSecond("00");
			setMinute("00");
			setCounter(0);
		}
		return () => clearInterval(intervalId);
	}, [active, counter]);
	// function handleSound(e) {
	// 	e.preventDefault();
	// 	let reek = new Audio("sounds/crash.mp3");
	// 	reek.play();
	// 	console.log("hey");
	// }

	return (
		<div id="pomodoro">
			<h1>
				<span>{minute}</span>
				<span>:</span>
				<span>{second}</span>
			</h1>
			<p>lorem ipsum dolor sit amet, consectetur</p>
			<button onClick={() => setActive(!active)}>Start</button>
			<button>sound</button>
		</div>
	);
};

export default Pomodoro;
