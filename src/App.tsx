import { Global, ThemeProvider } from "@emotion/react";
import { globalStyle } from "../styles/globalStyle";
import { Emoji } from "./components/Emoji";
import { Menu } from "./components/Menu";
import { Home } from "./pages/Home";
import { createBrowserRouter, RouterProvider } from "react-router-dom";
import { DarkModeToggle } from "./components/DarkModeToggle";
import { useState } from "react";
import { darkTheme, lightTheme } from "../styles/theme";

function App() {
  const [darkMode, setDarkMode] = useState(false);

  const handleTheme = () => {
    setDarkMode((prev) => !prev);
  };

  const router = createBrowserRouter([
    {
      path: "/",
      element: <Home />,
    },
  ]);

  return (
    <>
      <ThemeProvider theme={darkMode ? darkTheme : lightTheme}>
        <Global styles={globalStyle} />
        <DarkModeToggle handleTheme={handleTheme} darkMode={darkMode} />
        <Emoji />
        <Menu />
        <RouterProvider router={router} />
      </ThemeProvider>
    </>
  );
}

export default App;
