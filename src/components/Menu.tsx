import { keyframes } from "@emotion/react";
import styled from "@emotion/styled";
import { useState } from "react";
import { AiFillFolderOpen, AiFillHeart, AiFillHome } from "react-icons/ai";
import { useAtom } from "jotai";
import { cursorAtom } from "../states/cursorAtom";
import { useNavigate } from "react-router-dom";

interface MenuIconProps {
  isOpenMenu: boolean;
}

export const Menu = () => {
  const [isOpenMenu, setOpenMenu] = useState(false);
  const [, setCursorColor] = useAtom(cursorAtom);
  const navigate = useNavigate();

  return (
    <>
      <MenuIcon
        onMouseEnter={() => {
          setCursorColor((prev) => ({
            ...prev,
            size: 50,
          }));
        }}
        onMouseLeave={() => {
          setCursorColor((prev) => ({
            ...prev,
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
          <div className="menu-item" onClick={() => navigate("/")}>
            <AiFillHome />
          </div>
          <div className="menu-item" onClick={() => navigate("/like")}>
            <AiFillHeart />
          </div>
          <div className="menu-item" onClick={() => navigate("/project")}>
            <AiFillFolderOpen />
          </div>
        </MenuContent>
      )}
    </>
  );
};

const MenuIcon = styled.div<MenuIconProps>`
  position: fixed;
  z-index: 3;
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
  z-index: 2;
  right: 20px;
  top: 80px;
  width: 60px;
  height: 400px;
  background-color: ${(props) => props.theme.background};
  color: ${(props) => props.theme.convertColor};
  border-radius: 10px;
  animation: ${textFade} 0.5s linear alternate;
  backdrop-filter: brightness(1.1) blur(20px);
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
