import React from "react";
import { makeStyles } from "@material-ui/core";

import "../styles.css";

const Main = () => {
	const useStyles = makeStyles({
		titleContainer: {
			textAlign: "center",
			paddingTop: "15px",
		},
	});

	const classes = useStyles();
	return (
		<div className={classes.titleContainer}>
			<h1>La Technique Pomodoro C'est Quoi Au Juste ? 🙄</h1>

			<p>
				La technique Pomodoro est une technique de gestion du temps
				développée par Francesco Cirillo à la fin des années 19801.
				Cette méthode se base sur l'usage d'un minuteur permettant de
				respecter des périodes de 25 minutes appelées pomodori (qui
				signifie en italien « tomates »). Ces différentes périodes de
				travail sont séparées par de courtes pauses. Proches des
				concepts de cycles itératifs et des méthodes de développement
				agiles, utilisées dans le développement de logiciel, la méthode
				est utilisée pour la programmation en binôme2. La méthode a pour
				principale prétention que des pauses régulières favorisent
				l'agilité intellectuelle3. Certains bénéfices des temps de repos
				sur la consolidation de la mémoire peuvent être observés
				expérimentalement4.
			</p>
		</div>
	);
};

export default Main;
