import React, { useState } from "react";
import Header from "./components/Header";
import Content from "./components/Content";
import Footer from "./components/Footer"

const App = () => {
	const [temperature, setTemperature] = useState(25); // Initial temperature value
	const [isOn, setIsOn] = useState(true); // Initial visibility state

	const decreaseTemperature = () => setTemperature((prevTemp) => prevTemp - 1);
	const increaseTemperature = () => setTemperature((prevTemp) => prevTemp + 1);
	const toggleIsOn = () => setIsOn(!isOn);

	return (
		<>
			<Header temp={temperature} onToggle={toggleIsOn} isOn={isOn}/>
			<Content temp={temperature}/>
			<Footer onIncrease={increaseTemperature} onDecrease={decreaseTemperature}/>
		</>
  	);
};

export default App;
