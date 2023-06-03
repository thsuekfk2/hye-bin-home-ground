import { Global } from "@emotion/react";
import { globalStyle } from "../styles/globalStyle";
import { RouterProvider } from "react-router-dom";
import { CustomCursor } from "./components/CustomCursor";
import { router } from "./router";

function App() {
  return (
    <>
      <Global styles={globalStyle} />
      <CustomCursor />
      <RouterProvider router={router}></RouterProvider>
    </>
  );
}

export default App;
