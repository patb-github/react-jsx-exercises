import React from "react";

function Header() {
  return (
    <header>
      <button>ON/OFF</button>
      <span>Current Temperature: 25C</span>
    </header>
  )
}

function Content(props) {
  return (
    <main>
      <Temperature/>
    </main>
  )
}

function Temperature(props) {
  return <span>25C</span>;
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
      <Header />
      <Content />
      <Footer/>
    </>
  );
};

export default App;
