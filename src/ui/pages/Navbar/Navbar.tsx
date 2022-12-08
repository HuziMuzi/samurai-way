import React from 'react';
import s from './Navbar.module.scss'
import {NavLink} from "react-router-dom";

import MyProfileIcon from "../../components/common/icons/iconsNavbar/MyProfileIcon";
import UsersIcon from "../../components/common/icons/iconsNavbar/UsersIcon";
import DialogsIcon from "../../components/common/icons/iconsNavbar/DialogsIcon";
import NewsIcon from "../../components/common/icons/iconsNavbar/NewsIcon";
import MusicIcon from "../../components/common/icons/iconsNavbar/MusicIcon";
import SettingsIcon from "../../components/common/icons/iconsNavbar/SettingsIcon";
import {PATH} from "../Pages";


export const Navbar = () => {


    return (
        <>
            <nav className={s.nav}>
                <div className={s.logoBlock}>
                    <img width={'100px'} height={'70px'}
                         src="https://i.pinimg.com/originals/0b/73/51/0b7351f7b132512ea28fae9d5fff1bde.png" alt="logo"/>
                </div>
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
                {/*<Sidebar state={navBarPageState.sidebar}/>*/}
            </nav>
        </>
    );
};

