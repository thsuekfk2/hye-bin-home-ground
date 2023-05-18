import styled from "@emotion/styled";
import React, { useEffect, useRef } from "react";

export const TypingText = () => {
  const content =
    "배우는 것에 가치를 두고\n 꾸준히 발전하는 개발자 \n 이혜빈입니다.";
  const textRef = useRef<any>(null);

  useEffect(() => {
    let i = 0;
    let interval: any;
    function typing() {
      if (textRef.current) {
        let txt = content[i++];
        textRef.current.innerHTML += txt === "\n" ? "<br/>" : txt;
        if (i > content.length) {
          textRef.current.textContent = "";
          i = 0;
        }
      }
    }
    interval = setInterval(typing, 200);
    return () => {
      clearInterval(interval);
    };
  }, []);

  return (
    <TextBox>
      <span className="text" ref={textRef}></span>
      <span className="blink">|</span>
    </TextBox>
  );
};

const TextBox = styled.div`
  text-align: center;
  font-size: 20px;
  color: #ffffff;
  font-weight: 500;
  line-height: 30px;

  .blink {
    animation: blink 0.5s infinite;
    font-size: 20px;
  }

  @keyframes blink {
    to {
      opacity: 0;
    }
  }
`;
