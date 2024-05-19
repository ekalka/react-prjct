import React from "react";
import { NavLink } from "react-router-dom";
import { HOME_ROUTE, STUD_ROUTE, ABOUT_ROUTE, PRJ_ROUTE, PDF_ROUTE, PAGINATION_ROUTE } from "../routing/configs";
import { useAuth } from "../hooks/useAuth";
import { useCurrentTheme } from "../hooks/useCurrentTheme";
import styled from "styled-components";

const Button = styled.button`
  color: --text-color;
  width: 150px;
  height: 50px;
  border: 0;
  border-radius: 10px;
  font-size: 20px;
  cursor: pointer;
`;
const NavBarStyle = styled.nav`
  margin: 0 auto;
  display: flex;
  justify-content: space-around;
  padding-inline: 1rem;

  @media (max-width: 800px) {
    flex-direction: column;
    align-items: center;
    
    a, button {
      margin: 0.5rem 0;
    }
  }
`;
const ChangeThemeButton = styled.button`
  color: --text-color;
  width: 70px;
  height: 50px;
  border: 0;
  border-radius: 10px;
  cursor: pointer;
`;

export const Navbar = () => {
  const { isAuth, setIsAuth } = useAuth();

  const handleLogin = () => {
    setIsAuth(!isAuth);
  };
  const { changeTheme } = useCurrentTheme();
  return (
    <header>
      <NavBarStyle>
        <NavLink className={"link"} to={HOME_ROUTE}>
          Главная
        </NavLink>
        <NavLink className={"link"} to={ABOUT_ROUTE}>
          О нас
        </NavLink>
        <NavLink className={"link"} to={PRJ_ROUTE}>
          Наши проекты
        </NavLink>
        <NavLink className={"link"} to={PAGINATION_ROUTE}>
          Пагинация
        </NavLink>
        <NavLink className={"link"} to={PDF_ROUTE}>
          PDF
        </NavLink>
        {isAuth && (
          <NavLink className={"link"} to={STUD_ROUTE}>
            Наши студенты
          </NavLink>
        )}
        <button onClick={handleLogin}>{!isAuth ? "Войти" : "Выйти"}</button>
        <ChangeThemeButton onClick={() => changeTheme()}></ChangeThemeButton>
      </NavBarStyle>
    </header>
  );
};
