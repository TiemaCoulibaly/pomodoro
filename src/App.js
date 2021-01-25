import React from "react";
import Header from "./components/Header";
import Footer from "./components/Footer";
import Divider from "./components/Divider";
import Main from "./components/Main";

const App = () => {
	return (
		<div>
			<Header />
			<Divider />
			<Main />
			<Divider />
			<Footer />
		</div>
	);
};

export default App;
