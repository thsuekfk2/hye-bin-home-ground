import styled from "@emotion/styled";
import { ProjectAnimate } from "../components/ProjectAnimate";

export const Project = () => {
  return (
    <Wrap>
      <Title>
        <span>My Project </span>
        <img src="./dinosaur-trex.gif"></img>
      </Title>
      <ProjectAnimate />
    </Wrap>
  );
};

const Wrap = styled.div`
  display: flex;
  flex-direction: column;
  justify-content: center;
  align-items: center;
  width: 100%;
  height: 100vh;
  color: ${(props) => props.theme.color};
  background-color: ${(props) => props.theme.convertColor};
`;

const Title = styled.div`
  display: flex;
  flex-direction: column;
  justify-content: center;
  align-items: center;
  gap: 20px;
  span {
    font-size: 25px;
    border-radius: 10px;
  }
  img {
    width: 140px;
  }
`;
