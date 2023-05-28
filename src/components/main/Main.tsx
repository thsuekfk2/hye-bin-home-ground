import { keyframes, useTheme } from "@emotion/react";
import styled from "@emotion/styled";
import { useEffect, useRef, useState } from "react";
import { Logo3DImage } from "../Logo3DImage";
import { useAtom } from "jotai";
import { cursorAtom } from "../../states/cursorAtom";

interface LogoProps {
  fontSize: number;
}
export const Main = () => {
  let prevScrollPosition = window.pageYOffset;
  const [fontSize, setFontSize] = useState(60);
  const [, setCursorColor] = useAtom(cursorAtom);
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
    window.addEventListener("scroll", handleScroll);
    return () => {
      window.removeEventListener("scroll", handleScroll);
    };
  }, []);

  return (
    <>
      <Wrap>
        <Logo3DImage />
      </Wrap>
      <Logo fontSize={fontSize}>
        <p
          onMouseMove={() =>
            setCursorColor((prev) => ({
              ...prev,
              color: theme.convertColor,
              size: 100,
            }))
          }
          onMouseLeave={() =>
            setCursorColor((prev) => ({
              ...prev,
              color: theme.convertColor,
              size: 16,
            }))
          }
        >
          FRONTEND
          <br />
          개발자
          <br />
          <div>
            <span>이혜빈</span>입니다
          </div>
        </p>
      </Logo>
    </>
  );
};

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

const Wrap = styled.div`
  height: 100vh;
  position: sticky;
  top: 0;
  background: #3f5130;
`;
const Logo = styled.div<LogoProps>`
  position: absolute;
  top: 0;
  left: 0;
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
