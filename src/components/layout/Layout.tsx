import { useState } from "react";
import { Emoji } from "../Emoji";
import { Menu } from "../Menu";
import { ThemeProvider } from "@emotion/react";
import { DarkModeToggle } from "../DarkModeToggle";
import { darkTheme, lightTheme } from "../../../styles/theme";

export const Layout = ({ children }: any) => {
  const [darkMode, setDarkMode] = useState(false);

  const handleTheme = () => {
    setDarkMode((prev) => !prev);
  };

  return (
    <>
      <ThemeProvider theme={darkMode ? darkTheme : lightTheme}>
        <DarkModeToggle handleTheme={handleTheme} darkMode={darkMode} />
        <Emoji />
        <Menu />
        {children}
      </ThemeProvider>
    </>
  );
};
