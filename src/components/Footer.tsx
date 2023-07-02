import styled from "@emotion/styled";
import { useTheme } from "@emotion/react";

export const Footer = () => {
  const theme = useTheme();

  return (
    <Wrap>
      <svg
        xmlns="http://www.w3.org/2000/svg"
        viewBox="0 0 1440 320"
        style={{
          background: theme.convertColor,
        }}
      >
        <path
          fill="#3F5130"
          fill-opacity="0.5"
          d="M0,160L80,181.3C160,203,320,245,480,224C640,203,800,117,960,96C1120,75,1280,117,1360,138.7L1440,160L1440,320L1360,320C1280,320,1120,320,960,320C800,320,640,320,480,320C320,320,160,320,80,320L0,320Z"
        ></path>
      </svg>
    </Wrap>
  );
};

const Wrap = styled.div`
  position: relative;
  bottom: 0;
  left: 0;
  width: 100%;
  svg {
    position: absolute;
    background-color: rgba(0, 0, 0, 0.2);
  }
`;
