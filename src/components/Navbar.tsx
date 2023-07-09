import styled from "@emotion/styled";
import { useLocation, useNavigate } from "react-router-dom";

export const Navbar = () => {
  const location = useLocation();
  const navigate = useNavigate();
  const pathName = location.pathname.split("/")[1];

  return (
    <NavbarWrap>
      <MenuLogo>
        <div className="menu-item" onClick={() => navigate("/")}>
          Hyebin's World
        </div>
      </MenuLogo>
      <MenuWrap>
        {pathName === "post" ? (
          <a className="menu-item">POST</a>
        ) : (
          <>
            <a className="menu-item" href="#about">
              내 소개
            </a>
            <a className="menu-item" href="#project">
              프로젝트
            </a>
            <a className="menu-item" href="#memory">
              회고록
            </a>
          </>
        )}
      </MenuWrap>
    </NavbarWrap>
  );
};

const NavbarWrap = styled.div`
  display: flex;
  flex-direction: row;
  position: fixed;
  top: 8px;
  width: 100%;
  height: 60px;
  z-index: 1;
  justify-content: space-between;
  align-items: center;
  background-color: transparent;
  background-color: rgba(0, 0, 0, 0.2);
  backdrop-filter: blur(5px);
  color: white;
`;

const MenuLogo = styled.div`
  margin-left: 20px;
  cursor: pointer;
  color: rgba(255, 255, 255, 0.8);
  font-size: 20px;
`;

const MenuWrap = styled.div`
  width: 30vw;
  min-width: 300px;
  display: flex;
  height: 100%;
  gap: 10%;
  padding-right: 7%;
  justify-content: end;
  align-items: center;
  .menu-item {
    text-decoration: none;
    cursor: pointer;
    color: rgba(255, 255, 255, 0.5);
  }
`;
