import styled from "@emotion/styled";
import { useAtom } from "jotai";
import { cursorAtom } from "../../states/cursorAtom";
import { darkModeAtom } from "../../states/darkModeAtom";
import { mq } from "../../utils/mediaQuery";
import { TextRotator } from "../TextRotator";

export const Main = () => {
  const [, setCursorColor] = useAtom(cursorAtom);
  const [isDarkMode] = useAtom(darkModeAtom);
  const textArray = [
    "FRONTEND 개발자",
    "배우는것을 좋아하는",
    "사용자를 생각하는",
    "계속 성장하는",
  ];
  return (
    <>
      <Wrap
        style={{
          backgroundImage: !isDarkMode ? `url("./paper-texture.jpg")` : "",
          backgroundColor: isDarkMode && "#3f5130",
        }}
      ></Wrap>
      <LogoWrap>
        <Logo>
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
            <TextRotator textArray={textArray} />
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
  ${mq[3]} {
    flex-direction: column;
    justify-content: center;
  }
`;

const HandImg = styled.img`
  width: 80px;
`;

const MyImage = styled.img`
  position: relative;
  display: flex;
  width: 100%;
  max-width: 400px;
  min-width: 80px;
  object-fit: cover;
  border-radius: 50%;
`;

const Wrap = styled.div`
  height: 100vh;
  position: sticky;
  top: 0;
  background-size: contain;
`;

const Logo = styled.div`
  font-size: 60px;
  position: relative;
  width: 40%;
  z-index: 2;
  display: flex;
  flex-direction: column;
  justify-content: center;
  height: 100%;
  color: ${(props) => props.theme.color};
  transition: all 0.2s;
  font-weight: 200;
  span {
    font-weight: 700;
  }
  ${mq[4]} {
    font-size: 40px;
  }
  ${mq[3]} {
    width: 90%;
    font-size: 50px;
    height: 200px;
    align-items: center;
  }
  ${mq[1]} {
    font-size: 30px;
  }
`;
