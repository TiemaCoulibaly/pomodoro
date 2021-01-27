import React from "react";
import { Fab, makeStyles } from "@material-ui/core";

import PlayArrowIcon from "@material-ui/icons/PlayArrow";
import PauseIcon from "@material-ui/icons/Pause";

import useSound from "use-sound";
import river from "../sounds/n5.mp3";

const Music = () => {
	const [noise, { stop, isPlaying }] = useSound(river, {
		sprite: {
			playStart: [10, 144600],
			playTimeLength: [10, 144600],
		},
	});

	const playMe = () => {
		if (isPlaying) {
			stop();
		} else {
			noise({ id: "playTimeLength" });
		}
	};

	const useStyles = makeStyles({
		root: {
			margin: "5px",
		},
		title: {
			fontSize: 20,
			fontFamily: "Patrick Hand",
			paddingBottom: "5px",
		},
	});
	const classes = useStyles();

	return (
		<div className={classes.root}>
			<h4 className={classes.title}>
				🔊Un petit son d'ambiance de 2min🎧
			</h4>
			<Fab pt={4} onClick={playMe}>
				{!isPlaying ? <PlayArrowIcon /> : <PauseIcon />}
			</Fab>
		</div>
	);
};

export default Music;
// {
// 	play ? <PlayArrowIcon /> : <PauseIcon />;
// }
