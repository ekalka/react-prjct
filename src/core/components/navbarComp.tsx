import React from "react";
import { NavLink } from 'react-router-dom';
import { HOME_ROUTE, STUD_ROUTE, ABOUT_ROUTE, PRJ_ROUTE } from "../routing/configs";
import { useAuth } from "../hooks/useAuth";


export const Navbar = () => {
    const { isAuth, setIsAuth } = useAuth();

    const handleLogin = () => {
        setIsAuth(!isAuth);
    }

    return (
            <header>
                <nav>
                    <NavLink className={'link'} to={HOME_ROUTE}>Главная</NavLink>
                    <NavLink className={'link'} to={ABOUT_ROUTE}>О нас</NavLink>
                    <NavLink className={'link'} to={PRJ_ROUTE}>Наши проекты</NavLink>
                    { isAuth && <NavLink className={'link'} to={STUD_ROUTE}>Наши студенты</NavLink> }
                    <button onClick={handleLogin}>{!isAuth ? 'Войти' : 'Выйти'}</button>
                </nav>
            </header>
    )
}



