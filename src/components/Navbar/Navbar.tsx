import React from 'react';
import s from './Navbar.module.scss'
import {NavLink} from "react-router-dom";
import Sidebar from "../Sidebar/Sidebar";

import {AppRootState} from "../../Redux/redux-store";
import {initialStateTypeNavBar} from "../../Redux/navbar-reducer";
import {useSelector} from "react-redux";
import MyProfileIcon from "../common/icons/iconsNavbar/MyProfileIcon";
import UsersIcon from "../common/icons/iconsNavbar/UsersIcon";
import DialogsIcon from "../common/icons/iconsNavbar/DialogsIcon";
import NewsIcon from "../common/icons/iconsNavbar/NewsIcon";
import MusicIcon from "../common/icons/iconsNavbar/MusicIcon";
import SettingsIcon from "../common/icons/iconsNavbar/SettingsIcon";
import {PATH} from "../Pages/Pages";


export const Navbar = () => {
    const navBarPageState = useSelector<AppRootState, initialStateTypeNavBar>(state => state.navbarReducer)
    return (
        <>
            <nav className={s.nav}>
                <div className={`${s.item} ${s.active}`}>
                    <NavLink to={PATH.profile} className={({isActive}) => isActive ? s.activeLink : ''}>
                        <MyProfileIcon/>
                        <span> Profile </span></NavLink></div>
                <div className={s.item}>
                    <NavLink to={PATH.users} className={({isActive}) => isActive ? s.activeLink : ''}>
                        <UsersIcon/>
                        <span>Users </span></NavLink></div>
                <div className={s.item}>
                    <NavLink to={PATH.dialogs} className={({isActive}) => isActive ? s.activeLink : ''}>
                        <DialogsIcon/>
                        <span>Dialogs </span></NavLink></div>
                <div className={s.item}>
                    <NavLink to={PATH.news} className={({isActive}) => isActive ? s.activeLink : ''}>
                        <NewsIcon/>
                        <span>News </span></NavLink></div>
                <div className={s.item}>
                    <NavLink to={PATH.music} className={({isActive}) => isActive ? s.activeLink : ''}>
                        <MusicIcon/>
                        <span>Music </span></NavLink></div>
                <div className={s.item}>
                    <NavLink to={PATH.settings} className={({isActive}) => isActive ? s.activeLink : ''}>
                        <SettingsIcon/>
                        <span>Settings </span></NavLink></div>
                {/*<div className={`${s.item}`}>*/}
                <Sidebar state={navBarPageState.sidebar}/>
                {/*</div>*/}
            </nav>
        </>
    );
};

