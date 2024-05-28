import React, { useState } from "react";

function Header(props) {
  return (
    <header>
      <button>ON/OFF</button>
      <span>Current Temperature: {props.temp}</span>
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

	const decreaseTemperature = () => setTemperature((prevTemp) => prevTemp - 1);
	const increaseTemperature = () => setTemperature((prevTemp) => prevTemp + 1);

	return (
    <>
      <Header temp={temperature}/>
      <Content temp={temperature}/>
      <Footer onIncrease={increaseTemperature} onDecrease={decreaseTemperature}/>
    </>
  );
};

export default App;