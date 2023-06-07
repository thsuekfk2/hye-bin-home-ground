import styled from "@emotion/styled";
import { useEffect, useRef } from "react";

interface DropStyle {
  left: string;
  top: string;
}

export const Rain = () => {
  const numDrops = 100;
  const rainRef = useRef<HTMLDivElement>(null);

  const objToStyleString = (styleObj: React.CSSProperties) => {
    return Object.entries(styleObj)
      .map(([key, value]) => `${key}:${value}`)
      .join(";");
  };

  const startRain = () => {
    const rainSection = rainRef.current;

    if (rainSection) {
      let dropsHTML = "";

      for (let i = 1; i <= numDrops; i++) {
        const dropLeft = randRange(0, 1600);
        const dropTop = randRange(-1000, 1400);

        const dropStyle: DropStyle = {
          left: `${dropLeft}px`,
          top: `${dropTop}px`,
        };

        const drop = `<div class="drop" id="drop${i}" style="${objToStyleString(
          dropStyle
        )}"></div>`;

        dropsHTML += drop;
      }

      rainSection.innerHTML = dropsHTML;
    }
  };

  const stopRain = () => {
    const rainSection = rainRef.current;

    if (rainSection) {
      rainSection.innerHTML = "";
    }
  };

  const randRange = (minNum: number, maxNum: number) => {
    return Math.floor(Math.random() * (maxNum - minNum + 1)) + minNum;
  };

  useEffect(() => {
    startRain();

    return () => {
      stopRain();
    };
  }, [numDrops]);

  return (
    <Total>
      <div id="Rain" ref={rainRef}></div>
    </Total>
  );
};

const Total = styled.div`
  height: 100px;
  position: fixed;
  z-index: 2;

  .drop {
    background: linear-gradient(
      to bottom,
      rgba(13, 52, 58, 1),
      rgba(255, 255, 255, 0.5)
    );

    width: 1px;
    height: 89px;
    position: absolute;
    bottom: 200px;
    animation: fall 0.63s linear infinite;
  }

  @keyframes fall {
    to {
      margin-top: 900px;
    }
  }
`;
