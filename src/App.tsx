import React, {useEffect} from 'react';
import {Navbar} from "./components/Navbar/Navbar";

import {initializeAppThunk} from "./Redux/app-reducer";
import {Header} from "./components/Header/Header";
import  style from './App.module.scss'


import Pages from "./components/Pages/Pages";
import {useAppDispatch, useAppSelector} from "./hooks/hooks";
import {Preloader} from "./components/common/Preloader/Preloader";

export const App = () => {
    const initialized = useAppSelector(state => state.appReducer.initialized)

    const dispatch = useAppDispatch()

    useEffect(() => {
        dispatch(initializeAppThunk())
    },[])

    return (
        <div className={style.appWrapper}>
            <Header/>
            {!initialized  ? <Preloader/>
                :
                <div className={style.appWrapperContent}>
                    <Navbar/>
                    <div className={style.appContent}>
                        <Pages/>
                    </div>
                </div>
            }


        </div>
    );
}