import styled from "@emotion/styled";

interface DarkModeToggleProps {
  darkMode: boolean;
}

export const DarkModeToggle = ({ handleTheme, darkMode }: any) => {
  return (
    <Total darkMode={darkMode} onClick={() => handleTheme()}>
      <div className="dark-light">
        <svg viewBox="0 0 24 24">
          <path d="M21 12.79A9 9 0 1111.21 3 7 7 0 0021 12.79z" />
        </svg>
      </div>
    </Total>
  );
};

const Total = styled.div<DarkModeToggleProps>`
  .dark-light {
    position: fixed;
    bottom: 30px;
    right: 30px;
    background-color: ${(props) => (props.darkMode ? "black" : "white")};
    box-shadow: -1px 3px 8px -1px rgba(0, 0, 0, 0.2);
    padding: 8px;
    border-radius: 50%;
    z-index: 2;
    cursor: pointer;
    svg {
      width: 24px;
      flex-shrink: 0;
      fill: #ffce45;
      stroke: ${(props) => (props.darkMode ? "#ffce45" : "black")};
      transition: 0.5s;
    }
  }
`;
