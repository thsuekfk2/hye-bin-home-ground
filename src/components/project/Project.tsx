import styled from "@emotion/styled";
import { useEffect, useRef, useState } from "react";

export const Project = () => {
  const [count, setCount] = useState<number | undefined>(0);
  const boxRef = useRef<HTMLDivElement>(null);

  const marqueeText = (
    count: number | undefined,
    element: React.RefObject<HTMLDivElement>,
    direction: number
  ) => {
    if (element?.current && count) {
      if (count > element.current.scrollWidth / 2) {
        element.current.style.transform = `translate3d(0, 0, 0)`;
        count = 0;
      }
      element.current.style.transform = `translate3d(${
        direction * count
      }px, 0, 0)`;

      return count;
    }
  };

  const animate = () => {
    setCount((prev: number | undefined) =>
      marqueeText((prev as number) + 0.5, boxRef, -1)
    );
    window.requestAnimationFrame(animate);
  };

  const scrollHandler = () => {
    setCount((prev: number | undefined) => (prev as number) + 3);
  };

  useEffect(() => {
    window.addEventListener("scroll", scrollHandler);
    animate();

    return () => {
      window.removeEventListener("scroll", scrollHandler);
    };
  }, []);

  return (
    <Wrap>
      <Logo>Project</Logo>
      <BoxWrap ref={boxRef}>
        <AutoScrollBox />
        <AutoScrollBox />
        <AutoScrollBox />
      </BoxWrap>
    </Wrap>
  );
};

const Wrap = styled.div`
  height: 100vh;
  width: 100%;
  background-color: black;
  overflow: hidden;
`;

const Logo = styled.div`
  position: relative;
  color: #fff;
  font-size: 80px;
  font-weight: 700;
`;

const BoxWrap = styled.div`
  width: 100%;
  height: 100%;
  display: flex;
  justify-content: center;
  gap: 20px;
  padding-top: 50px;
`;

const AutoScrollBox = styled.div`
  flex: 1;
  min-width: 500px;
  height: 330px;
  background-color: white;
  color: #444;
  border-radius: 10px;
`;
