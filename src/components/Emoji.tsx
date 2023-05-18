import { keyframes } from "@emotion/react";
import styled from "@emotion/styled";
import { useState } from "react";
import thinking from "../assets/thinking.png";

export const Emoji = () => {
  const [hovering, setHovering] = useState(false);

  const toggleHover = () => {
    setHovering((prev) => !prev);
  };

  return (
    <LogoBox onMouseEnter={toggleHover} onMouseLeave={toggleHover}>
      <LogoEmoji src={thinking} />
      {hovering && <BubbleBox>context me</BubbleBox>}
    </LogoBox>
  );
};

const boxFade = keyframes`
  0% {
    left: 110px;
    opacity: 0;
  }
  100% {
    left: 120px;
    opacity: 1;
  
  }
`;
const LogoBox = styled.div`
  width: 230px;
  height: 100px;
  z-index: 1;
  position: fixed;
`;

const BubbleBox = styled.div`
  position: absolute;
  display: flex;
  justify-content: center;
  align-items: center;
  left: 120px;
  top: 40px;
  width: 110px;
  height: 40px;
  background-color: #4596e5;
  color: ${(props) => props.theme.color};
  border-radius: 40px;
  animation: ${boxFade} 0.6s linear alternate;
`;

const LogoEmoji = styled.img`
  height: 100px;
  position: absolute;
  left: 10px;
  top: 10px;
  display: flex;
  justify-content: center;
  align-items: center;
  color: white;
  transition: all 0.2s;
  font-weight: 700;
  z-index: 10;
  border-radius: 100%;
  :hover {
    height: 90px;
    cursor: pointer;
    backdrop-filter: blur(10px);
    transition: all 1s;
  }
`;
