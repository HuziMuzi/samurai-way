import React from "react"
import s from './Header.module.scss'
import {NavLink} from "react-router-dom";
import {useAppDispatch, useAppSelector} from "../../hooks/hooks";
import {LogoutThunk} from "../../Redux/auth-reducer";
import LogOutIcon from "../common/icons/LogOut";
import Arrow from "../common/icons/Arrow";



export const Header = () => {

    const isAuth = useAppSelector(state => state.authReducer.isAuth)
    const login = useAppSelector(state => state.authReducer.login)
    const userPhoto = useAppSelector(state => state.profileReducer.profile.photos?.small)
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
                        <div className={s.userBlock} >
                            <img className={s.imgUser} src={userPhoto ? userPhoto : 'https://i.imgur.com/lqN6w1t.png'} alt='user' />
                            <Arrow/>
                                <div className={s.dropDownMenu}>
                                <div className={s.dropDownMenuText}>Login: {login}</div>
                                <button className={s.btn} onClick={logOutHandler}><span>log out</span>  <LogOutIcon/></button>
                            </div>


                        </div>
                        :
                        <NavLink to={'/login'}>Login</NavLink>
                    }
                </div>
            </header>
        </>
    )
}