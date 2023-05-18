import styled from "@emotion/styled";

export const Footer = () => {
  return <Wrap></Wrap>;
};

const Wrap = styled.div`
  height: 100vh;
  width: 100%;
  overflow: hidden;
  position: relative;
  background-color: ${(props) => props.theme.background};
`;
