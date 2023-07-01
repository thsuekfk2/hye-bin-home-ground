import { keyframes } from "@emotion/react";
import styled from "@emotion/styled";

export const ProjectAnimate = () => {
  return (
    <Wrap>
      <BoxWrap>
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
  overflow-x: auto;
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
