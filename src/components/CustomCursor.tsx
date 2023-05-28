import styled from "@emotion/styled";
import React, { useEffect, useState } from "react";
import { CursorState, cursorAtom } from "../states/cursorAtom";
import { useAtom } from "jotai";

interface cursorAtomProps {
  cursorColor: CursorState;
}

export const CustomCursor = () => {
  const [cursorColor] = useAtom(cursorAtom);
  const [mousePosition, setMousePosition] = useState({
    x: 0,
    y: 0,
  });

  const mouseMove = (e: any) => {
    const { clientX: x, clientY: y } = e;
    const cursorRadius = cursorColor.size ? cursorColor.size / 2 : 16;
    setMousePosition({ x: x - cursorRadius, y: y - cursorRadius });
  };

  useEffect(() => {
    window.addEventListener("mousemove", mouseMove);
    return () => {
      window.removeEventListener("mousemove", mouseMove);
    };
  }, [cursorColor]);

  return (
    <CursorWrap
      cursorColor={cursorColor}
      style={{
        transform: `translate(${mousePosition.x}px,${mousePosition.y}px)`,
      }}
    >
      {cursorColor.text}
    </CursorWrap>
  );
};

const CursorWrap = styled.div<cursorAtomProps>`
  z-index: 1;
  background-color: ${(props) => props.cursorColor.color};
  width: ${(props) => props.cursorColor.size + "px" ?? "32px"};
  height: ${(props) => props.cursorColor.size + "px" ?? "32px"};
  border-radius: 50%;
  position: fixed;
  top: 0;
  left: 0;
  pointer-events: none;
  display: flex;
  justify-content: center;
  align-items: center;
  transition: all 0.1s;
`;
