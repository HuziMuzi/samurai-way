import React from "react"
import s from './Header.module.css'
import {NavLink} from "react-router-dom";
import {useAppDispatch, useAppSelector} from "../../hooks/hooks";
import {LogoutThunk} from "../../Redux/auth-reducer";



export const Header = () => {

    const isAuth = useAppSelector(state => state.authReducer.isAuth)
    const login = useAppSelector(state => state.authReducer.login)
    const dispatch = useAppDispatch()


    const logOutHandler = () => {
        dispatch(LogoutThunk())
    }


    return (
        <>
            <header className={s.header}>
                <img width={'100px'} height={'70px'}
                     src="https://i.pinimg.com/originals/0b/73/51/0b7351f7b132512ea28fae9d5fff1bde.png" alt=""/>

                <div className={s.loginBlock}>
                    {isAuth
                        ?
                        <div>{login && login}
                            <button onClick={logOutHandler}> Log Out</button>
                        </div>
                        :
                        <NavLink to={'/login'}>Login</NavLink>
                    }
                </div>
            </header>
        </>
    )
}