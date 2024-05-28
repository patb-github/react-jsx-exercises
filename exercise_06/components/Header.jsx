export default function Header(props) {
    return (
      <header>
        <button onClick={props.onToggle}>ON/OFF</button>
        <span>{props.isOn ? `Current Temperature: ${props.temp}C` : ""}</span>
      </header>
    )
  };

