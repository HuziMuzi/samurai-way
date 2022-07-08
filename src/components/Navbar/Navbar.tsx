import React from 'react';
import s from './Navbar.module.css'
import {NavLink} from "react-router-dom";
import Sidebar, {sideUserType} from "../Sidebar/Sidebar";

export type navbarPropsType = {
    state: {
        navBarPage: {
            sidebar: Array<sideUserType>
        }
    }
}

export const Navbar = (props: navbarPropsType) => {
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
                    <Sidebar state={props.state.navBarPage.sidebar}/>
                </div>
            </nav>
        </>
    );
};

