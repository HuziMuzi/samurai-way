import React from 'react';
import s from './Navbar.module.css'
import {NavLink} from "react-router-dom";
import Sidebar from "../Sidebar/Sidebar";

import {AppRootState} from "../../Redux/redux-store";
import {initialStateTypeNavBar} from "../../Redux/navbar-reducer";
import {useSelector} from "react-redux";

export type navbarPropsType = {

}

export const Navbar = (props: navbarPropsType) => {
    const navBarPageState = useSelector<AppRootState, initialStateTypeNavBar>(state => state.navbarReducer)
    return (
        <>
            <nav className={s.nav}>
                <div className={`${s.item} ${s.active}`}>
                    <NavLink to='/Profile' activeClassName={s.activeLink}>Profile</NavLink></div>
                <div className={s.item}>
                    <NavLink to="/Dialogs" activeClassName={s.activeLink}>Dialogs</NavLink></div>
                <div className={s.item}>
                    <NavLink to="/News" activeClassName={s.activeLink}>News</NavLink></div>
                <div className={s.item}>
                    <NavLink to="/Music" activeClassName={s.activeLink}>Music</NavLink></div>
                <div className={s.item}>
                    <NavLink to="/Settings" activeClassName={s.activeLink}>Settings</NavLink></div>
                <div className={`${s.item}`}>
                    <Sidebar state={navBarPageState.sidebar}/>
                </div>
            </nav>
        </>
    );
};

