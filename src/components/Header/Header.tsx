import React from "react"
import s from './Header.module.css'

export const Header = () => {
    return (
        <>
            <header className={s.header}>
                <img width={'100px'} height={'70px'}
                     src="https://i.pinimg.com/originals/0b/73/51/0b7351f7b132512ea28fae9d5fff1bde.png" alt=""/>
            </header>
        </>
    )
}