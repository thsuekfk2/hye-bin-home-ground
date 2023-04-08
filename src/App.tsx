import { Global } from "@emotion/react";
import { globalStyle } from "../styles/globalStyle";
import { Intro } from "./components/intro/Intro";
import { Main } from "./components/main/Main";
import { Project } from "./components/project/Project";

function App() {
  return (
    <div className="App">
      <Global styles={globalStyle} />
      <Main />
      <Intro />
      <Project />
    </div>
  );
}

export default App;
