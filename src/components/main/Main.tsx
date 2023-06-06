import { keyframes, useTheme } from "@emotion/react";
import styled from "@emotion/styled";
import { useEffect, useState } from "react";
import { useAtom } from "jotai";
import { cursorAtom } from "../../states/cursorAtom";
import { darkModeAtom } from "../../states/darkModeAtom";

interface LogoProps {
  fontSize: number;
}
export const Main = () => {
  let prevScrollPosition = window.pageYOffset;
  const [fontSize, setFontSize] = useState(60);
  const [, setCursorColor] = useAtom(cursorAtom);
  const [isDarkMode] = useAtom(darkModeAtom);

  const theme = useTheme();

  const handleScroll = () => {
    const currentScrollPosition = window.pageYOffset;

    if (currentScrollPosition === 0) {
      setFontSize(60);
      return;
    }
    if (currentScrollPosition > 40) {
      setFontSize(50);
    }

    if (currentScrollPosition < 40) {
      const scrollDirection =
        currentScrollPosition > prevScrollPosition ? "down" : "up";

      setFontSize((prev) => (scrollDirection === "down" ? prev - 1 : prev + 1));
      prevScrollPosition = currentScrollPosition;
    }
  };

  useEffect(() => {
    setCursorColor(() => ({
      color: "#0c180258",
    }));
    window.addEventListener("scroll", handleScroll);
    return () => {
      window.removeEventListener("scroll", handleScroll);
    };
  }, []);

  return (
    <>
      <Wrap
        style={{
          backgroundImage: !isDarkMode ? `url("./paper-texture.jpg")` : "",
          backgroundColor: isDarkMode && "#3f5130",
        }}
      ></Wrap>
      <LogoWrap>
        <Logo fontSize={fontSize}>
          <div
            onMouseMove={() =>
              setCursorColor((prev) => ({
                ...prev,
                size: 100,
              }))
            }
            onMouseLeave={() =>
              setCursorColor((prev) => ({
                ...prev,
                size: 16,
              }))
            }
          >
            안녕하세요
            <HandImg src="./hand.gif" />
            <br />
            FRONTEND 개발자
            <br />
            <div>
              <span>이혜빈</span>입니다
            </div>
          </div>
        </Logo>
        <MyImage src="./my.jpeg" />
      </LogoWrap>
    </>
  );
};

const LogoWrap = styled.div`
  display: flex;
  justify-content: center;
  align-items: center;
  position: absolute;
  flex-direction: row;
  width: 100%;
  height: 100%;
  top: 0;
`;

const textFade = keyframes`
  0% {
    opacity: 0;
    font-size: 100px;
  }
  50% {
    opacity: 0;
  }
  100% {
    opacity: 1;
    font-size: 60px;
  }
`;

const HandImg = styled.img`
  width: 80px;
`;

const MyImage = styled.img`
  position: relative;
  display: flex;
  width: 450px;
  min-width: 100px;
  object-fit: cover;
  border-radius: 50%;
  animation: ${textFade} 2s linear alternate;
`;

const Wrap = styled.div`
  height: 100vh;
  position: sticky;
  top: 0;
  background-size: contain;
`;

const Logo = styled.div<LogoProps>`
  position: relative;
  width: 40%;
  z-index: 2;
  display: flex;
  flex-direction: column;
  justify-content: center;
  padding-left: 10%;
  height: 100%;
  color: ${(props) => props.theme.color};
  transition: all 0.2s;
  opacity: ${(props) => props.fontSize == 50 && 0};
  font-size: ${(props) => props.fontSize}px;
  font-weight: 200;
  animation: ${textFade} 2s linear alternate;
  span {
    font-weight: 700;
  }
`;
