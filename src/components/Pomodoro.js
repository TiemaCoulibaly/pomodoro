import React, { useState, useEffect } from "react";
import useSound from "use-sound";
import boopSfx from "../sounds/crash.mp3";
import { Redirect } from "react-router-dom";
import { LinearProgress, Button, makeStyles } from "@material-ui/core";
import TimerIcon from "@material-ui/icons/Timer";
import RotateLeftIcon from "@material-ui/icons/RotateLeft";

import "../styles.css";

const Pomodoro = () => {
	const [second, setSecond] = useState("00");
	const [minute, setMinute] = useState("25");
	const [counter, setCounter] = useState(1500);
	const [active, setActive] = useState(false);
	const [play] = useSound(boopSfx);

	const useStyles = makeStyles({
		pomodoro: {
			backgroundColor: "#D3FAC7",
			textAlign: "center",
			height: "250px",
		},
		time: {
			fontSize: "80px",
		},
		button: {
			margin: "10px",
		},
	});
	const classes = useStyles();
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
			if (counter === -1) {
				play();
				clearTimeout(intervalId);
			}
		});

		return () => clearInterval(intervalId);
	}, [active, counter, play]);

	const resetTimer = () => {
		setSecond("00");
		setMinute("25");
		setCounter(1500);
		setActive(false);
	};

	return (
		<div className={classes.pomodoro}>
			<LinearProgress variant="determinate" value={counter} />
			<h1>
				<span className={classes.time}>
					{counter === -1 ? <Redirect to="/Shortbreak" /> : minute}
				</span>
				<span className={classes.time}>:</span>
				<span className={classes.time}>
					{counter === -1 ? <Redirect to="/Shortbreak" /> : second}
				</span>
			</h1>
			<p>Etre concentré pour plus de productivité</p>
			<Button
				className={classes.button}
				startIcon={<TimerIcon />}
				variant="outlined"
				color="primary"
				onClick={() => setActive(!active)}>
				{active ? "Pause" : "Start"}
			</Button>

			<Button
				className={classes.button}
				startIcon={<RotateLeftIcon />}
				variant="contained"
				color="secondary"
				onClick={resetTimer}>
				Reset
			</Button>
		</div>
	);
};

export default Pomodoro;
