import styled from "@emotion/styled";
import { RadarChart } from "./RadarChart";
import { Logo3DImage } from "./Logo3DImage";
import { mq } from "../utils/mediaQuery";

export const Footer = () => {
  return (
    <Wrap>
      <Logo3DImage />
      <RadarChart />
    </Wrap>
  );
};

const Wrap = styled.div`
  display: flex;
  align-items: center;
  justify-content: center;
  height: 100vh;
  width: 100%;
  overflow: hidden;
  position: relative;
  background-image: url("./paper-texture.jpg");
  background-size: contain;

  ${mq[4]} {
    flex-direction: column;
  }
`;
