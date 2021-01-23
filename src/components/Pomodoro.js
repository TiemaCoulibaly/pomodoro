import React, { useState, useEffect } from "react";
import useSound from "use-sound";
import boopSfx from "../sounds/crash.mp3";
import { Redirect } from "react-router-dom";
import LinearProgress from "@material-ui/core/LinearProgress";
import Button from "@material-ui/core/Button";
import "../styles.css";

const Pomodoro = () => {
	const [second, setSecond] = useState("00");
	const [minute, setMinute] = useState("25");
	const [counter, setCounter] = useState(1500);
	const [active, setActive] = useState(false);
	const [play] = useSound(boopSfx);

	useEffect(() => {
		let intervalId;
		if (active) {
			intervalId = setInterval(() => {
				const secondCounter = counter % 60;
				const minuteCounter = Math.floor(counter / 60);

				const updatedSecond =
					String(secondCounter).length === 1
						? `0${secondCounter}`
						: secondCounter;
				const updatedMinute =
					String(minuteCounter).length === 1
						? `0${minuteCounter}`
						: minuteCounter;

				setSecond(updatedSecond);
				setMinute(updatedMinute);
				setCounter((counter) => counter - 1);
			}, 1000);
		}
		setTimeout(() => {
			if (counter === 0) {
				play();
				clearTimeout(intervalId);
			}
		});

		return () => clearInterval(intervalId);
	}, [active, counter, play]);
	function handleClick() {
		play();
	}
	const resetTimer = () => {
		setSecond("00");
		setMinute("25");
		setCounter(1500);
		setActive(false);
	};

	return (
		<>
			<div id="pomodoro">
				<LinearProgress variant="determinate" value={counter} />
				<h1>
					<span>
						{counter === 0 ? <Redirect to="/Shortbreak" /> : minute}
					</span>
					<span>:</span>
					<span>
						{counter === 0 ? <Redirect to="/Shortbreak" /> : second}
					</span>
				</h1>
				<p>lorem ipsum dolor sit amet, consectetur</p>
				<Button
					variant="contained"
					color="primary"
					onClick={() => setActive(!active)}>
					{active ? "Pause" : "Start"}
				</Button>
				<Button variant="contained" onClick={handleClick}>
					sound
				</Button>
				<Button
					variant="contained"
					color="secondary"
					onClick={resetTimer}>
					Reset
				</Button>
			</div>
		</>
	);
};

export default Pomodoro;
