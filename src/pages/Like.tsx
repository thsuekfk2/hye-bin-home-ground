import styled from "@emotion/styled";
import { useAtom } from "jotai";
import { useState } from "react";
import { cursorAtom } from "../states/cursorAtom";
import { useTheme } from "@emotion/react";
import { BsArrowLeftCircle, BsArrowRightCircle } from "react-icons/bs";
import { motion, AnimatePresence } from "framer-motion";

export const Like = () => {
  const [page, setPage] = useState(1);
  const [direction, setDirection] = useState(1);
  const [, setCursorColor] = useAtom(cursorAtom);
  const theme = useTheme();

  const variants = {
    enter: (direction: number) => {
      return {
        x: direction > 0 ? 1000 : -1000,
        opacity: 0,
      };
    },
    center: {
      zIndex: 1,
      x: 0,
      opacity: 1,
    },
    exit: (direction: number) => {
      return {
        zIndex: 0,
        x: direction < 0 ? 1000 : -1000,
        opacity: 0,
      };
    },
  };

  const paginate = (number: number) => {
    if (number === -1) {
      setPage((prev) => (prev > 1 ? prev - 1 : prev));
      setDirection(1);
    } else {
      setPage((prev) => (prev < 3 ? prev + 1 : prev));
      setDirection(-1);
    }
  };

  return (
    <PageWrap>
      <LikeMenu>
        <div className="menu-icon"></div>
        <div className="menu-icon"></div>
        <div className="menu-icon"></div>
      </LikeMenu>
      <AnimatePresence>
        <motion.img
          key={page}
          src={`./like/like${page}.png`}
          custom={direction}
          variants={variants}
          initial="enter"
          animate="center"
          exit="exit"
          transition={{
            x: { type: "spring", stiffness: 300, damping: 30 },
            opacity: { duration: 0.2 },
          }}
          style={{
            position: "fixed",
            objectFit: "cover",
            width: "100%",
            minHeight: "100vh",
          }}
        />
      </AnimatePresence>
      <Test>
        <div
          className="image-left"
          onClick={() => paginate(-1)}
          onMouseEnter={() => {
            setCursorColor((prev) => ({
              ...prev,
              color: theme.color,
              textColor: theme.convertColor,
              size: 60,
              text: (
                <BsArrowLeftCircle
                  style={{ width: "100px", height: "100px" }}
                />
              ),
            }));
          }}
          onMouseLeave={() => {
            setCursorColor((prev) => ({
              ...prev,
              size: 16,
              text: "",
            }));
          }}
        ></div>
        <div
          className="image-right"
          onClick={() => paginate(1)}
          onMouseEnter={() => {
            setCursorColor((prev) => ({
              ...prev,
              color: theme.color,
              textColor: theme.convertColor,
              size: 60,
              text: (
                <BsArrowRightCircle
                  style={{ width: "100px", height: "100px" }}
                />
              ),
            }));
          }}
          onMouseLeave={() => {
            setCursorColor((prev) => ({
              ...prev,
              size: 16,
              text: "",
            }));
          }}
        ></div>
      </Test>
    </PageWrap>
  );
};

const Test = styled.div`
  position: absolute;
  display: flex;
  width: 100vw;
  height: 100vh;
  top: 0;
  z-index: 1;
  .image-left {
    height: 100%;
    width: 50vw;
  }
  .image-right {
    height: 100%;
    width: 50vw;
  }
`;

const LikeMenu = styled.div`
  position: fixed;
  display: flex;
  justify-content: space-evenly;
  align-items: center;
  width: 100%;
  z-index: 2;
  top: 20px;
  .menu-icon {
    height: 2px;
    width: 100px;
    background-color: white;
    cursor: pointer;
  }
`;
const PageWrap = styled.div`
  height: 100vh;
  width: 100%;
  background-color: ${(props) => props.theme.color};
`;
