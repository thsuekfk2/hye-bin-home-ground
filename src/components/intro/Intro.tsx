import { keyframes } from "@emotion/react";
import styled from "@emotion/styled";
import { TypingText } from "../TypingText";

export const Intro = () => {
  return (
    <Wrap>
      <LogoBox>
        <div className="menu-circle"></div>
        <div className="box-content">
          <TypingText
            text={`배우는 것에 가치를 두고\n 꾸준히 발전하는 개발자 \n 이혜빈입니다.           `}
          />
        </div>
      </LogoBox>
    </Wrap>
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
  display: flex;
  flex-direction: column;
  position: relative;
  margin: 0 25px;
  width: 100%;
  height: 80%;
  max-width: 650px;
  max-height: 700px;
  color: ${(props) => props.theme.color};
  font-size: 80px;
  font-weight: 700;
  transition: all 2s;
  animation: ${textFade} 4s alternate forwards;
  background-color: ${(props) => props.theme.opacityBox};
  border-radius: 20px;
  backdrop-filter: blur(2px);
  box-shadow: rgba(0, 0, 0, 0.1) 0px 24px 48px 8px;
  .menu-circle {
    width: 15px;
    height: 15px;
    background-color: #f96057;
    border-radius: 50%;
    box-shadow: 24px 0 0 0 #f8ce52, 48px 0 0 0 #5fcf65;
    margin-right: 195px;
    flex-shrink: 0;
    margin: 20px 0 20px 20px;
  }
  .box-content {
    display: flex;
    justify-content: center;
    padding-top: 100px;
    background-color: #212125;
    width: 90%;
    height: 70%;
    margin: 0 auto;
  }
`;
