import Temperature from "./Temperature";

export default function Content(props) {
    return (
      <main>
        <Temperature temp={props.temp}/>
      </main>
    )
  };