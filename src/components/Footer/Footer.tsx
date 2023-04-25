import styled from "@emotion/styled";

export const Footer = () => {
  return <Wrap></Wrap>;
};

const Wrap = styled.div`
  height: 30vh;
  width: 100%;
  overflow: hidden;
  position: relative;
  background-color: rgba(255, 255, 255, 0.1);
  backdrop-filter: blur(2px);
  box-shadow: rgba(0, 0, 0, 0.1) 0px 24px 48px 8px;
  opacity: 1;
`;
