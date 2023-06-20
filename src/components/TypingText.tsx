import styled from "@emotion/styled";
import React, { useEffect, useRef } from "react";

export const TypingText = ({ text }: { text: string }) => {
  const textRef = useRef<any>(null);

  useEffect(() => {
    let i = 0;
    let interval: any;
    const typing = () => {
      if (textRef.current) {
        let txt = text[i++];
        textRef.current.innerHTML += txt === "\n" ? "<br/>" : txt;
        if (i > text.length) {
          textRef.current.textContent = "";
          i = 0;
        }
      }
    };
    interval = setInterval(typing, 200);
    return () => {
      clearInterval(interval);
    };
  }, [text]);

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
