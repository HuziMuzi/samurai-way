import React from 'react';
import s from './Navbar.module.css'



export const Navbar = () => {
    return (
        <>
            <nav className={s.nav}>
                <div ><a className={`${s.item} ${s.active}`} href='/Profile'>Profile</a></div>
                <div ><a className={s.item} href="/Dialogs">Dialogs</a></div>
                <div ><a className={s.item} href="/News">Settings</a></div>
                <div ><a className={s.item} href="/Music">Music</a></div>
                <div ><a className={s.item} href="/Settings">Settings</a></div>
            </nav>
        </>
    );
};

