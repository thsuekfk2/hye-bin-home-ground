import styled from "@emotion/styled";
import React, { useEffect, useRef } from "react";

export const ScrollProgressbar = () => {
  const scrollRef = useRef<any>(null);

  useEffect(() => {
    window.onscroll = function () {
      progressScrollHandler();
    };

    const progressScrollHandler = () => {
      var winScroll =
        document.body.scrollTop || document.documentElement.scrollTop;
      var height =
        document.documentElement.scrollHeight -
        document.documentElement.clientHeight;
      var scrolled = (winScroll / height) * 100;
      if (scrollRef.current) {
        scrollRef.current.style.width = scrolled + "%";
      }
    };
  }, []);

  return (
    <ScrollProgressbarBox>
      <div className="progress-container">
        <div className="progress-bar" id="myBar" ref={scrollRef}></div>
      </div>
    </ScrollProgressbarBox>
  );
};

const ScrollProgressbarBox = styled.div`
  position: fixed;
  top: 0;
  z-index: 1;
  width: 100%;
  background-color: #f1f1f1;

  .progress-container {
    width: 100%;
    height: 8px;
    background: #ccc;
  }

  .progress-bar {
    height: 8px;
    background: #04aa6d;
    width: 0%;
  }
`;
