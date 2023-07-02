import styled from "@emotion/styled";
import { useEffect, useRef, useState } from "react";

export const ProjectAnimate = () => {
  const [, setCount] = useState<number | undefined>(0);
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
      <BoxWrap ref={boxRef}>
        <AutoScrollBox>coming soon</AutoScrollBox>
        <AutoScrollBox>coming soon</AutoScrollBox>
        <AutoScrollBox>coming soon</AutoScrollBox>
      </BoxWrap>
    </Wrap>
  );
};

const Wrap = styled.div`
  width: 100%;
  overflow: hidden;
`;

const BoxWrap = styled.div`
  width: 100%;
  height: 100%;
  display: flex;
  gap: 20px;
  padding: 50px 0;
  white-space: nowrap;
  will-change: transform;
`;

const AutoScrollBox = styled.div`
  display: flex;
  justify-content: center;
  align-items: center;
  min-width: 400px;
  min-height: 330px;
  max-width: 500px;
  max-height: 530px;
  width: 50vw;
  height: 50vh;
  background-color: ${(props) => props.theme.opacityBox};
  border-radius: 10px;
`;
