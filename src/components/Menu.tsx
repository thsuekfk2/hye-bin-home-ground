import styled from "@emotion/styled";

export const Menu = () => {
  return (
    <MenuBox onClick={() => {}}>
      <div className="hamburger-menu">
        <div className="bar-top"></div>
        <div className="bar-middle"></div>
        <div className="bar-bottom"></div>
      </div>
    </MenuBox>
  );
};

const MenuBox = styled.div`
  position: fixed;
  z-index: 2;
  right: 0;
  top: 0;
  .hamburger-menu {
    margin: 20px;
    display: flex;
    flex-flow: column wrap;
    justify-content: space-between;
    height: 40px;
    width: 40px;
    cursor: pointer;
  }
  .bar-top,
  .bar-middle,
  .bar-bottom {
    height: 5px;
    background: ${(props) => props.theme.text};
    border-radius: 5px;
    margin: 3px 0;
    transform-origin: left;
    transition: all 0.5s;
  }
  .hamburger-menu:hover .bar-top {
    transform: rotate(45deg);
  }
  .hamburger-menu:hover .bar-middle {
    transform: translateX(10px);
    opacity: 0;
  }
  .hamburger-menu:hover .bar-bottom {
    transform: rotate(-45deg);
  }
`;
