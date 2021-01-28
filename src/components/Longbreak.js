import React, { useState, useEffect } from "react";
import useSound from "use-sound";
import boop from "../sounds/bip.wav";
import bip from "../sounds/click.wav";
import { LinearProgress, Button, makeStyles } from "@material-ui/core";
import { Redirect } from "react-router-dom";

import TimerIcon from "@material-ui/icons/Timer";
import RotateLeftIcon from "@material-ui/icons/RotateLeft";

const Longbreak = () => {
	const [second, setSecond] = useState("00");
	const [minute, setMinute] = useState("15");
	const [counter, setCounter] = useState(900);
	const [active, setActive] = useState(false);
	const [play] = useSound(boop);
	const [click] = useSound(bip);
	const timeClock = counter / 60;

	const useStyles = makeStyles({
		longbreak: {
			backgroundColor: "#A4E5E0",
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
		play();
	};

	return (
		<div className={classes.longbreak}>
			<LinearProgress variant="determinate" value={timeClock} />
			<h1 className={classes.timeContainer}>
				<span className={classes.time}>
					{counter === -1 ? <Redirect to="/" /> : minute}
				</span>
				<span className={classes.time}>:</span>
				<span className={classes.time}>
					{counter === -1 ? <Redirect to="/" /> : second}
				</span>
			</h1>
			<p className={classes.text}>
				⌛🛌Une{" "}
				<a
					href="https://www.topsante.com/forme-bien-etre/relaxation/micro-sieste-mode-d-emploi-608963#:~:text=Il%20vaut%20mieux%20ne%20pas,endormissement%20et%20le%20sommeil%20profond."
					target="_blank"
					rel="noreferrer">
					{" "}
					micro-sieste
				</a>{" "}
				pour optimiser sont rendement🪑⏰
			</p>
			<Button
				className={classes.buttonStart}
				startIcon={<TimerIcon />}
				variant="contained"
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

export default Longbreak;
