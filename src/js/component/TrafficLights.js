import React from "react";
import { useState } from "react";
import "../../styles/index.scss";
const TrafficLights = () => {
	const [red, setRed] = useState("red");
	const [orange, setOrange] = useState("orange");
	const [green, setGreen] = useState("green");
	return (
		<div className="container-fluid">
			<h1>TRAFFIC LIGHTS BY ATL</h1>
			<div className="top"></div>
			<div className="container_traffic">
				<div
					className={red === true ? "redShadow" : "red"}
					onClick={() => {
						setRed(!red);
						setOrange(false);
						setGreen(false);
					}}></div>
				<div
					className={orange === true ? "orangeShadow" : "orange"}
					onClick={() => {
						setRed(false);
						setOrange(!orange);
						setGreen(false);
					}}></div>
				<div
					className={green === true ? "greenShadow" : "green"}
					onClick={() => {
						setRed(false);
						setOrange(false);
						setGreen(!green);
					}}></div>
			</div>
		</div>
	);
};

export default TrafficLights;
