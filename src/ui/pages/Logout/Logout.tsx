import React from "react"
import s from './Logout.module.scss'
import {useNavigate} from "react-router-dom";
import {useAppDispatch, useAppSelector} from "../../../hooks/hooks";
import {LogoutThunk} from "../../../Redux/auth-reducer";
import LogOutIcon from "../../components/common/icons/LogOut";
import Button from "../../components/common/Button/Button";
import {PATH} from "../Pages";



export const Header = () => {

    const isAuth = useAppSelector(state => state.authReducer.isAuth)
    // const login = useAppSelector(state => state.authReducer.login)
    // const userPhoto = useAppSelector(state => state.profileReducer.profile.photos?.small)
    const dispatch = useAppDispatch()
    const navigate = useNavigate()



    const logOutHandler = () => {
        dispatch(LogoutThunk()).then(() => {
            navigate(PATH.login)
        })
    }


    return (
        <>
                <div className={s.logOutBlock}>
                    {isAuth && <div className={s.userBlock} >
                            <Button className={s.btn} onClick={logOutHandler}><span></span>  <LogOutIcon/></Button>
                        </div>

                        // <NavLink to={'/login'}>Login</NavLink>
                    }
                </div>
        </>
    )
}