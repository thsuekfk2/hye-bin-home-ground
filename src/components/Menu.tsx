import { keyframes, useTheme } from "@emotion/react";
import styled from "@emotion/styled";
import { useState } from "react";
import { AiFillGithub, AiFillHeart, AiFillHome } from "react-icons/ai";
import { FaBloggerB } from "react-icons/fa";
import { useAtom } from "jotai";
import { cursorAtom } from "../states/cursorAtom";

interface MenuIcon {
  isOpenMenu: boolean;
}

export const Menu = () => {
  const [isOpenMenu, setOpenMenu] = useState(false);
  const [, setCursorColor] = useAtom(cursorAtom);
  const theme = useTheme();

  return (
    <>
      <MenuIcon
        onMouseEnter={() => {
          setCursorColor((prev) => ({
            ...prev,
            color: theme.convertColor,
            size: 50,
          }));
        }}
        onMouseLeave={() => {
          setCursorColor((prev) => ({
            ...prev,
            color: "black",
            size: 16,
          }));
        }}
        isOpenMenu={isOpenMenu}
        onClick={() => {
          setOpenMenu((prev) => !prev);
        }}
      >
        <div className="hamburger-menu">
          <div className="bar-top"></div>
          <div className="bar-middle"></div>
          <div className="bar-bottom"></div>
        </div>
      </MenuIcon>
      {isOpenMenu && (
        <MenuContent>
          <div className="menu-item">
            <AiFillHome />
          </div>
          <div className="menu-item">
            <AiFillHeart />
          </div>
          <div
            className="menu-item"
            onClick={() =>
              window.open("https://github.com/thsuekfk2", "_blank")
            }
          >
            <AiFillGithub />
          </div>
          <div
            className="menu-item"
            onClick={() =>
              window.open(
                "https://hyebin-development-blog.tistory.com/",
                "_blank"
              )
            }
          >
            <FaBloggerB />
          </div>
        </MenuContent>
      )}
    </>
  );
};

const MenuIcon = styled.div<MenuIcon>`
  position: fixed;
  z-index: 2;
  right: 0;
  top: 0;
  .hamburger-menu {
    margin: 20px;
    display: flex;
    flex-flow: column wrap;
    justify-content: space-between;
    height: 40px;
    width: 40px;
    cursor: pointer;
  }
  .bar-top,
  .bar-middle,
  .bar-bottom {
    height: 5px;
    background: ${(props) => props.theme.color};
    border-radius: 5px;
    margin: 3px 0;
    transform-origin: left;
    transition: all 0.5s;
  }

  .bar-top {
    transform: ${(props) => props.isOpenMenu && "rotate(45deg)"};
  }
  .bar-middle {
    transform: ${(props) => props.isOpenMenu && "translateX(10px)"};
    opacity: ${(props) => props.isOpenMenu && 0};
  }
  .bar-bottom {
    transform: ${(props) => props.isOpenMenu && "rotate(-45deg)"};
  }
`;

const textFade = keyframes`
  0% {
    opacity: 0;
  }
  50% {
    opacity: 0;
  }
  100% {
    opacity: 0.7;
  }
`;

const MenuContent = styled.div`
  position: fixed;
  display: flex;
  flex-direction: column;
  align-items: center;
  justify-content: space-around;
  z-index: 1;
  right: 20px;
  top: 80px;
  width: 60px;
  height: 400px;
  background-color: ${(props) => props.theme.background};
  color: ${(props) => props.theme.convertColor};
  border-radius: 10px;
  opacity: 0.7;
  animation: ${textFade} 0.5s linear alternate;
  .menu-item {
    cursor: pointer;
    width: 90%;
    font-size: 30px;
    font-weight: 800;
    display: flex;
    justify-content: center;
    align-items: center;
    height: 20%;
    border-radius: 3px;
    &:hover {
      background-color: #4dc00028;
    }
  }
`;
