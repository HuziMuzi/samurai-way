import React, {useEffect} from 'react';
import {Navbar} from "./ui/pages/Navbar/Navbar";

import {initializeAppThunk} from "./Redux/app-reducer";
import {Header} from "./ui/pages/Logout/Logout";
import style from './App.module.scss'


import Pages from "./ui/pages/Pages";
import {useAppDispatch, useAppSelector} from "./hooks/hooks";
import {Preloader} from "./ui/components/common/Preloader/Preloader";
import {ThemeProvider} from "styled-components";
import {DefaultTheme} from "./ui/styles/themes/defaultTheme";

export const App = () => {
    const initialized = useAppSelector(state => state.appReducer.initialized)
    const dispatch = useAppDispatch()

    useEffect(() => {
        dispatch(initializeAppThunk())
    }, [])


    return <ThemeProvider theme={DefaultTheme}>
        <div className={style.appWrapper}>
            {/*<Logout/>*/}
            <div className={style.appWrapperContent}>
                {!initialized ? <Preloader/>
                    :
                    <>
                        <Navbar/>
                        <div className={style.appContent}>
                            <Pages/>
                        </div>
                    </>
                }
                <Header/>
            </div>
        </div>
        )
    </ThemeProvider>
}
