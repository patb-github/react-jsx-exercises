import React from "react";

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

function Footer() {
  return (
    <footer>
      <button>Down</button>
      <button>Up</button>
    </footer>
  )
}

const App = () => {
  const temperature = 25;

	return (
    <>
      <Header temp={temperature}/>
      <Content temp={temperature}/>
      <Footer/>
    </>
  );
};

export default App;
