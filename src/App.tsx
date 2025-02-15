import "./App.css";
import Container from "./components/Container";
import Heading from "./components/Heading";
import SayHello from "./components/SayHello";

import Status from "./components/Status";

function App() {
  return (
    <>
      <Status status="success" />
      <SayHello>
        <Heading>This is a heading</Heading>
      </SayHello>
      <Container styles={{ border: "1px solid black", padding: "1rem" }} />
    </>
  );
}

export default App;
