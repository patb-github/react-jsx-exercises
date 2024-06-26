import React, { useState } from "react";

function Header(props) {
  return (
    <header>
      <button onClick={props.onToggle}>ON/OFF</button>
      <span>{props.isOn ? `Current Temperature: ${props.temp}C` : ""}</span>
    </header>
  )
}

function Content(props) {
  return (
    <main>
      <Temperature temp={props.temp}/>
    </main>
  )
}

function Temperature(props) {
  return <span>{props.temp}C</span>;
}

function Footer(props) {
  return (
    <footer>
      <button onClick={props.onDecrease}>Down</button>
      <button onClick={props.onIncrease}>Up</button>
    </footer>
  )
}

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
