import React, { useState, useEffect } from "react";
import useSound from "use-sound";
import boop from "../sounds/bip.wav";
import bip from "../sounds/click.wav";
import { Redirect } from "react-router-dom";
import { LinearProgress, Button, makeStyles } from "@material-ui/core";

import TimerIcon from "@material-ui/icons/Timer";
import RotateLeftIcon from "@material-ui/icons/RotateLeft";
const Shortbreak = () => {
	const [counter, setCounter] = useState(300);
	const [active, setActive] = useState(false);
	const [play] = useSound(boop);
	const [click] = useSound(bip);
	const timeClock = counter / 60;

	const useStyles = makeStyles({
		shortbreak: {
			backgroundColor: "#B4EBCA",
			textAlign: "center",
			height: "300px",
		},
		timeContainer: {
			paddingTop: "10px",
		},
		time: {
			fontSize: "100px",
			textShadow: "3px 3px 3px #BDA0BC",
		},
		buttonStart: {
			margin: "10px",
			backgroundColor: "#575D90",
			color: "white",
			fontWeight: "bold",
			fontSize: 17,
			height: "45px",

			"&:hover": {
				backgroundColor: "#575D90",
				boxShadow: "4px 4px 4px  #575D90",
			},
		},
		buttonReset: {
			margin: "10px",
			backgroundColor: "#CB429F",
			color: "white",
			fontWeight: "bold",
			fontSize: 17,
			height: "45px",
			"&:hover": {
				backgroundColor: "#CB429F",
				boxShadow: "4px 4px 4px #CB429F",
			},
		},
		text: {
			fontFamily: "Patrick Hand",
			fontSize: 23,
			fontWeight: "bold",
			marginBottom: "15px",
			marginTop: "10px",
		},
	});

	const classes = useStyles();
	useEffect(() => {
		let intervalId;

		if (active) {
			intervalId = setInterval(() => {
				setCounter((counter) => counter - 1);
			}, 900);
		}
		setTimeout(() => {
			if (counter === 0) {
				play();
			}
		});
		return () => clearInterval(intervalId);
	}, [counter, active, play]);

	const resetTimer = () => {
		setCounter(300);
		setActive(false);
		play();
	};

	return (
		<div className={classes.shortbreak}>
			<LinearProgress variant="determinate" value={timeClock} />
			<h1 className={classes.timeContainer}>
				<span className={classes.time}>
					{counter === -1 ? (
						<Redirect to="/" />
					) : (
						`${Math.floor(counter / 60)}`
					)}
				</span>
				<span className={classes.time}>:</span>
				<span className={classes.time}>
					{counter === -1 ? (
						<Redirect to="/" />
					) : (
						`${("00" + (counter % 60)).slice(-2)}`
					)}
				</span>
			</h1>
			<p className={classes.text}>
				🧘‍♂️🥛Un petit break pour remettre ses idées en place☕🧘‍♀️
			</p>
			<Button
				className={classes.buttonStart}
				startIcon={<TimerIcon />}
				variant="outlined"
				color="primary"
				onMouseDown={click}
				onClick={() => setActive(!active)}>
				{active ? "Pause" : "Start"}
			</Button>

			<Button
				className={classes.buttonReset}
				startIcon={<RotateLeftIcon />}
				variant="contained"
				color="secondary"
				onClick={resetTimer}>
				Reset
			</Button>
		</div>
	);
};

export default Shortbreak;
