import React from "react";
import { makeStyles } from "@material-ui/core";

import "../styles.css";

const Main = () => {
	const useStyles = makeStyles({
		titleContainer: {
			margin: "30px",
		},
		title: {
			textAlign: "center",
			fontSize: 50,
			fontFamily: "Patrick Hand",
		},
		containerDescription: {
			textAlign: "center",
			marginLeft: "200px",
		},
		description: {
			fontFamily: "Bree Serif",
			textAlign: "justify",
			fontSize: 25,
			marginTop: "50px",
			paddingLeft: "30px",
			height: "500px",
			width: "65vw",
		},
		descriptionTechnique: {
			fontFamily: "Bree Serif",
			textAlign: "justify",
			fontSize: 25,
			marginTop: "50px",
			paddingLeft: "30px",
			height: "300px",
			width: "65vw",
		},
	});

	const classes = useStyles();
	return (
		<div id="main">
			{/* <div className={classes.titleContainer}> */}
			<h1 className={classes.title}>
				La Technique Pomodoro C'est Quoi Au Juste ? 🙄
			</h1>
			{/* </div> */}
			<hr />
			<div className={classes.containerDescription}>
				<article className={classes.description}>
					<p>
						La{" "}
						<span>
							<a
								target="_blank"
								rel="noreferrer"
								href="https://fr.wikipedia.org/wiki/Technique_Pomodoro">
								technique Pomodoro{" "}
							</a>
						</span>
						est une technique de gestion du temps développée par
						Francesco Cirillo à la fin des années 1980.
					</p>
					<br />
					<p>
						{" "}
						Cette méthode se base sur l'usage d'un minuteur
						permettant de respecter des périodes de 25 minutes
						appelées pomodori (qui signifie en italien « tomates »).
					</p>{" "}
					<br />
					<p>
						Ces différentes périodes de travail sont séparées par de
						courtes pauses.
					</p>
					<p>
						Proches des concepts de cycles itératifs et des méthodes
						de développement agiles, utilisées dans le développement
						de logiciel, la méthode est utilisée pour la
						programmation en binôme2.{" "}
					</p>
					<br />
					<p>
						La méthode a pour principale prétention que des pauses
						régulières favorisent l'agilité intellectuelle. <br />
						Certains bénéfices des temps de repos sur la
						consolidation de la mémoire peuvent être observés
						expérimentalement.
					</p>
				</article>
				<h1 className={classes.title}>
					Comment Mettre En Place Cette Technique ?🤔
				</h1>
				<hr />
				<article className={classes.descriptionTechnique}>
					<ul>
						<li>Décider de la tâche à effectuer</li>
						<li>Régler le pomodoro (minuteur) sur 25 minutes</li>
						<li>
							Travailler sur la tâche jusqu'à ce que le minuteur
							sonne et la noter comme faite
						</li>
						<li>Prendre une courte pause (5 minutes) </li>
						<li>
							Tous les quatre pomodori prendre une pause un peu
							plus longue (15-20 minutes)
						</li>
						<li>
							Mettre ce site en favoris et gagnez en
							productivité😁😎
						</li>
					</ul>
				</article>
			</div>
		</div>
	);
};

export default Main;
