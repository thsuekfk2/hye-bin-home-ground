import { ThemeProvider } from "@emotion/react";
import { DarkModeToggle } from "./DarkModeToggle";
import { darkTheme, lightTheme } from "../../styles/theme";
import { useAtom } from "jotai";
import { darkModeAtom } from "../states/darkModeAtom";

export const Layout = ({ children }: any) => {
  const [isDarkMode, setDarkMode] = useAtom(darkModeAtom);

  return (
    <>
      <ThemeProvider theme={isDarkMode ? darkTheme : lightTheme}>
        <DarkModeToggle setDarkMode={setDarkMode} isDarkMode={isDarkMode} />
        {children}
      </ThemeProvider>
    </>
  );
};
