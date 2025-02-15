import "./App.css";
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
    </>
  );
}

export default App;
