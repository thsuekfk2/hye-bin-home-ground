import styled from "@emotion/styled";
import { useAtom, useAtomValue } from "jotai";
import { cursorAtom } from "../states/cursorAtom";
import { darkModeAtom } from "../states/darkModeAtom";
import { mq } from "../utils/mediaQuery";
import { TextRotator } from "./TextRotator";
import { motion } from "framer-motion";

type LinkWrapProps = {
  isDarkMode: object;
};
export const Main = () => {
  const [, setCursorColor] = useAtom(cursorAtom);
  const isDarkMode = useAtomValue(darkModeAtom);

  const textArray = [
    "FRONTEND 개발자",
    "리액트를 좋아하는",
    "사용자를 생각하는",
    "꾸준함을 믿는",
    "소통을 좋아하는",
  ];
  return (
    <>
      <Wrap
        style={{
          backgroundImage: !isDarkMode ? `url("./paper-texture.jpg")` : "",
          backgroundColor: isDarkMode ? "rgb(40 53 30)" : "",
        }}
      ></Wrap>
      <LogoWrap id="about">
        <Logo>
          <div
            onMouseMove={() =>
              setCursorColor((prev) => ({
                ...prev,
                color: "#ffcc5a",
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
          <LogoSubText>
            주니어 프론트엔드 개발자 이혜빈 입니다. <br />
            리액트를 주요 기술 스택으로 다루고 있으며 빠르게 발전하는 프론트엔드
            개발 생태계 속에서 안정적으로 동작할 수 있고 사용자에게 다시 찾고
            싶은 디자인 시스템과 UI/UX를 제공하기 위해 고민합니다.
            <br />
          </LogoSubText>
          <LinkWrap isDarkMode={isDarkMode}>
            <h1
              className="menu-item"
              onClick={() => {
                window.open("https://github.com/thsuekfk2", "_blank");
              }}
            >
              github
            </h1>
            <h1
              className="menu-item"
              onClick={() => {
                window.open(
                  "https://hyebin-development-blog.tistory.com/",
                  "_blank"
                );
              }}
            >
              blog
            </h1>
          </LinkWrap>
        </Logo>
        <motion.div
          className="box"
          initial={{ opacity: 0.2 }}
          whileInView={{
            opacity: 1,
            rotate: [0, 360],
            borderRadius: ["20%", "50%"],
            transition: { delay: 0.05 },
          }}
          whileHover={{
            scale: 1.2,
            transition: { type: "spring", stiffness: 400, damping: 10 },
          }}
        >
          <MyImage src="./my.jpeg" />
        </motion.div>
      </LogoWrap>
    </>
  );
};

const LogoWrap = styled.div`
  font-family: "GmarketSansLite";
  display: flex;
  justify-content: center;
  align-items: center;
  position: absolute;
  flex-direction: row;
  width: 100%;
  height: 90%;
  top: 0;
  ${mq[3]} {
    flex-direction: column-reverse;
    justify-content: center;
  }
`;

const LogoSubText = styled.div`
  font-size: 17px;
  margin: 20px 0 20px 0;
  max-width: 500px;
`;

const HandImg = styled.img`
  width: 80px;
  ${mq[3]} {
    width: 40px;
  }
`;

const LinkWrap = styled.div<LinkWrapProps>`
  display: flex;
  flex-direction: column;
  bottom: 30vh;
  width: 100%;
  left: 0;
  font-size: 30px;
  color: ${(props) => props.theme.color};
  font-family: "GmarketSansLite";
  font-weight: 100;
  gap: 20px;

  h1 {
    font-family: "GmarketSansBold";
    font-size: 16px;
    width: 100%;
    cursor: pointer;
    line-height: 1.2;
    margin: 0.3em 0;
    color: transparent;
    -webkit-background-clip: text;
    background-clip: text;
    background-repeat: no-repeat;
    transition: 2s ease-out;
    letter-spacing: 10px;
    font-weight: 700;
    ${mq[3]} {
      font-size: 14px;
      letter-spacing: 5px;
      display: flex;
      justify-content: center;
      margin: 0;
    }
  }
  .menu-item {
    background-image: linear-gradient(
      to right,
      #ffcc5a 45%,
      ${(props) => (props.isDarkMode ? "#ffffff" : "#000000")} 55%
    );
    background-size: 220% 100%;
    background-position: 100% 50%;
    &:hover {
      background-position: 0% 50%;
    }
  }
`;

const MyImage = styled.img`
  position: relative;
  display: flex;
  width: 100%;
  max-width: 400px;
  min-width: 40px;
  object-fit: cover;
  border-radius: 50%;
  ${mq[3]} {
    width: 30vw;
    bottom: 100px;
  }
  ${mq[4]} {
    width: 40vw;
    bottom: 7px;
  }
`;

const Wrap = styled.div`
  height: 100vh;
  position: sticky;
  top: 0;
  background-size: contain;
`;

const Logo = styled.div`
  font-size: 50px;
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
    font-size: 40px;
    height: 200px;
    align-items: center;
  }
  ${mq[1]} {
    font-size: 30px;
  }
`;
