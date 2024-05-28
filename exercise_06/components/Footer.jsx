export default function Footer(props) {
    return (
      <footer>
        <button onClick={props.onDecrease}>Down</button>
        <button onClick={props.onIncrease}>Up</button>
      </footer>
    )
  };