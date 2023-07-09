import { Global } from "@emotion/react";
import { globalStyle } from "../styles/globalStyle";
import { RouterProvider } from "react-router-dom";
import { CustomCursor } from "./components/CustomCursor";
import { router } from "./router";

function App() {
  console.log(
    `
  %c██╗  ██╗██╗   ██╗███████╗    ██████╗ ██╗███╗   ██╗
  %c██║  ██║╚██╗ ██╔╝██╔════╝    ██╔══██╗██║████╗  ██║
  %c███████║ ╚████╔╝ █████╗      ██████╔╝██║██╔██╗ ██║
  %c██╔══██║  ╚██╔╝  ██╔══╝      ██╔══██╗██║██║╚██╗██║
  %c██║  ██║   ██║   ███████╗    ██████╔╝██║██║ ╚████║
  %c╚═╝  ╚═╝   ╚═╝   ╚══════╝    ╚═════╝ ╚═╝╚═╝  ╚═══╝
  `,
    "color:#22577A",
    "color:#38A3A5",
    "color:#57CC99",
    "color:#80ED99",
    "color:#99FFED",
    "color:#FFFFFF"
  );

  return (
    <>
      <Global styles={globalStyle} />
      <CustomCursor />
      <RouterProvider router={router}></RouterProvider>
    </>
  );
}

export default App;
