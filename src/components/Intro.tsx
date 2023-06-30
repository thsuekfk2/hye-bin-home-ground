import { keyframes } from "@emotion/react";
import styled from "@emotion/styled";
import { TypingText } from "./TypingText";

export const Intro = () => {
  return (
    <Wrap>
      <LogoBox>
        <div className="menu-circle"></div>
        <div className="box-content">
          <TypingText
            text={`<hb> \n 코드 앞에서는 겸손하자 \n 매일의 점을 찍고 나아가 점들을 연결하자 \n </hb>`}
          />
        </div>
      </LogoBox>
    </Wrap>
  );
};

const textFade = keyframes`
  100% {
    transform: translateY(-70px);
  }
`;

const Wrap = styled.div`
  display: flex;
  flex-direction: column;
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
  height: 350px;
  max-width: 650px;
  max-height: 700px;
  color: ${(props) => props.theme.color};
  font-size: 80px;
  font-weight: 700;
  transition: all 1s;
  animation: ${textFade} 2.3s alternate forwards;
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
    padding-top: 60px;
    background-color: #212125;
    width: 90%;
    height: 200px;
    margin: 0 auto;
  }
`;
