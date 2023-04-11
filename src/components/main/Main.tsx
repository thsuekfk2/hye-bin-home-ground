import { keyframes } from "@emotion/react";
import styled from "@emotion/styled";
import { useEffect, useState } from "react";
interface LogoProps {
  fontSize: number;
}
export const Main = () => {
  let prevScrollPosition = window.pageYOffset;
  const [fontSize, setFontSize] = useState(80);

  const handleScroll = () => {
    const currentScrollPosition = window.pageYOffset;

    if (currentScrollPosition === 0) {
      setFontSize(80);
      return;
    }
    if (currentScrollPosition > 60) {
      setFontSize(70);
    }

    if (currentScrollPosition < 60) {
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
    <Wrap>
      <Logo fontSize={fontSize}>LEE HYE BIN</Logo>
    </Wrap>
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
    font-size: 80px;
  }
`;

const Wrap = styled.div`
  height: 100vh;
  position: sticky;
  top: 0;
  background: url("Playlist Wallpaper_PC.jpg") no-repeat center;
  background-size: cover;
  &::before {
    content: "";
    background: linear-gradient(to top, white, transparent);
    position: absolute;
    bottom: 0;
    height: 20%;
    width: 100%;
  }
`;

const Logo = styled.div<LogoProps>`
  height: 100%;
  display: flex;
  justify-content: center;
  align-items: center;
  color: white;
  transition: all 0.2s;
  opacity: ${(props) => props.fontSize == 70 && 0};
  font-size: ${(props) => props.fontSize}px;
  font-weight: 700;
  animation: ${textFade} 2s linear alternate;
`;
