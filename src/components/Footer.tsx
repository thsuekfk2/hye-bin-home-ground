import styled from "@emotion/styled";

export const Footer = () => {
  return <Wrap></Wrap>;
};

const Wrap = styled.div`
  height: 100vh;
  width: 100%;
  overflow: hidden;
  position: relative;
  background-image: ${(props) =>
    props.theme.color === "#000"
      ? `url("./paper-texture-dark.jpg")`
      : `url("./paper-texture.jpg")`};
`;
