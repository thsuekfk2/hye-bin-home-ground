import { Global } from "@emotion/react";
import { globalStyle } from "../styles/globalStyle";
import { Main } from "./components/main/Main";

function App() {
  return (
    <div className="App">
      <Global styles={globalStyle} />
      <Main />
    </div>
  );
}

export default App;
