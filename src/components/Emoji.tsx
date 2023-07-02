import styled from "@emotion/styled";
import thinking from "../assets/thinking.png";
import { mq } from "../utils/mediaQuery";

export const Emoji = () => {
  return (
    <LogoBox>
      <LogoEmoji src={thinking} />
    </LogoBox>
  );
};

const LogoBox = styled.div`
  z-index: 3;
`;

const LogoEmoji = styled.img`
  height: 100px;
  display: flex;
  justify-content: center;
  align-items: center;
  color: white;
  transition: all 0.2s;
  font-weight: 700;
  z-index: 10;
  border-radius: 100%;

  ${mq[3]} {
    width: 60px;
    height: 60px;
  }
`;
