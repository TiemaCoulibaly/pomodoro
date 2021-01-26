import React from "react";
import { makeStyles, Box } from "@material-ui/core";

const Main = () => {
	const useStyles = makeStyles((root) => ({
		title: {
			textAlign: "center",
			fontSize: 50,
			fontFamily: "Patrick Hand",
			marginTop: "10px",
			[root.breakpoints.down("sm")]: {
				fontSize: 40,
				margin: "10px",
			},
		},

		description: {
			fontFamily: "Bree Serif",
			textAlign: "justify",
			fontSize: 25,

			[root.breakpoints.down("sm")]: {
				fontSize: 20,
			},
		},
		descriptionTechnique: {
			fontFamily: "Bree Serif",
			textAlign: "justify",
			fontSize: 25,
			[root.breakpoints.down("sm")]: {
				fontSize: 20,
			},
		},
	}));

	const classes = useStyles();
	return (
		<div id="main">
			<h1 className={classes.title}>
				La Technique Pomodoro C'est Quoi Au Juste ? <br />
				🙄
			</h1>

			<Box mx={{ xs: 5, sm: 10, md: 35 }}>
				<hr />
				<Box
					my={{ md: 7 }}
					mt={{ xs: 5 }}
					className={classes.description}>
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
				</Box>

				<h1 className={classes.title}>
					Comment Mettre En Place Cette Technique ?🤔
				</h1>
				<hr />
				<Box
					my={{ md: 7 }}
					mt={{ xs: 5 }}
					className={classes.descriptionTechnique}>
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
				</Box>
			</Box>
		</div>
	);
};

export default Main;
