import styled from "@emotion/styled";
import { useAtomValue } from "jotai";
import { darkModeAtom } from "../states/darkModeAtom";

export const NotFound = () => {
  const isDarkMode = useAtomValue(darkModeAtom);

  return (
    <Wrap
      style={{
        backgroundImage: !isDarkMode ? `url("./paper-texture.jpg")` : "",
        backgroundColor: isDarkMode ? "rgb(40 53 30)" : "",
      }}
    >
      404
      <br /> NotFound
    </Wrap>
  );
};

const Wrap = styled.div`
  width: 100%;
  height: 100vh;
  background-color: red;
  display: flex;
  color: ${(props) => props.theme.color};
  justify-content: center;
  align-items: center;
  font-size: 30px;
  text-align: center;
`;
