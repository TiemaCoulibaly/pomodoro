import React, { Suspense } from "react";
import ReactDOM from "react-dom";
import LinearProgress from "@material-ui/core/LinearProgress";

import App from "./App";
import "./styles.css";

ReactDOM.render(
	<Suspense fallback={<LinearProgress />}>
		<App />
	</Suspense>,
	document.getElementById("root")
);
