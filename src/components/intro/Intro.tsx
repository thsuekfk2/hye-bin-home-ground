import { keyframes } from "@emotion/react";
import styled from "@emotion/styled";

export const Intro = () => {
  return (
    <>
      <Wrap>
        <LogoBox />
      </Wrap>
    </>
  );
};

const textFade = keyframes`

  100% {
    transform: translateY(-200px);
  }
`;

const Wrap = styled.div`
  display: flex;
  flex-direction: column;
  height: 100vh;
  width: 100%;
  justify-content: center;
  align-items: center;
  position: relative;
`;

const LogoBox = styled.div`
  position: relative;
  margin: 0 25px;
  width: 100%;
  height: 80%;
  max-width: 650px;
  max-height: 700px;
  color: #444;
  background-color: #eee;
  font-size: 80px;
  font-weight: 700;
  transition: all 2s;
  animation: ${textFade} 4s alternate forwards;
`;
