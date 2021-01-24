import React, { useState, useEffect } from "react";
import useSound from "use-sound";
import boopSfx from "../sounds/crash.mp3";
import { LinearProgress, Button, makeStyles } from "@material-ui/core";
import { Redirect } from "react-router-dom";

import TimerIcon from "@material-ui/icons/Timer";
import RotateLeftIcon from "@material-ui/icons/RotateLeft";

const Longbreak = () => {
	const [second, setSecond] = useState("00");
	const [minute, setMinute] = useState("15");
	const [counter, setCounter] = useState(900);
	const [active, setActive] = useState(false);
	const [play] = useSound(boopSfx);

	const useStyles = makeStyles({
		longbreak: {
			backgroundColor: "#A4E5E0",
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
	}, [counter, active, play]);

	const resetTimer = () => {
		setSecond("00");
		setMinute("15");
		setCounter(900);
		setActive(false);
	};

	return (
		<div className={classes.longbreak}>
			<LinearProgress variant="determinate" value={counter} />
			<h1>
				<span className={classes.time}>
					{counter === -1 ? <Redirect to="/" /> : minute}
				</span>
				<span className={classes.time}>:</span>
				<span className={classes.time}>
					{counter === -1 ? <Redirect to="/" /> : second}
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

export default Longbreak;
