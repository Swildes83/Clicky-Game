//sets up the reusable Jumbotron component
import React from "react";
import "./Jumbotron.css";

const Jumbotron = () => (
	<header className = "header">
		<h1>Clicky Game</h1>
		<h2>Click on any image to earn a point. DO NOT click on an image twice or you lose. Click all 12 and you win.</h2>
	</header>
);
export default Jumbotron;