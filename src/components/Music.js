import React from "react";
import { Fab, makeStyles } from "@material-ui/core";

import PlayArrowIcon from "@material-ui/icons/PlayArrow";
import PauseIcon from "@material-ui/icons/Pause";

import useSound from "use-sound";
import river from "../sounds/audioRiver.mp3";

const Music = () => {
	const [noise, { stop, isPlaying }] = useSound(river, {
		sprite: {
			bip: [30000, 1500000000000],
			n7: [1, 1500000000000],
		},
	});

	const playMe = () => {
		if (isPlaying) {
			stop();
		} else {
			noise({ id: "bip" });
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
				🔊 Un Fond D'Ambiance Naturel Sa Te Dit ? 🎧
			</h4>
			<Fab pt={4} onClick={playMe}>
				play
			</Fab>
		</div>
	);
};

export default Music;
// {
// 	play ? <PlayArrowIcon /> : <PauseIcon />;
// }
