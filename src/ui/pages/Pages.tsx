import React from 'react';
import {Navigate, Outlet, Route, Routes} from "react-router-dom";
import {Users} from "./Users/Users";
import Music from "./Music/Music";
import News from "./News/News";
import Settings from "./Settings/Settings";
import {Profile} from "./Profile/Profile";
import {useAppSelector} from "../../hooks/hooks";
import Dialogs from "./Dialogs/Dialogs";
import {Login} from "./Login/Login";


export const PATH = {
    profile: "/profile/",
    users: "/users",
    dialogs: "/dialogs",
    news: "/news",
    music: "/music",
    settings: "/settings",
    login: "/login"
};


const RequireAuth = ({redirectPath = PATH.login}) => {
    const isAuth = useAppSelector((state) => state.authReducer.isAuth);

    if (!isAuth) return <Navigate to={redirectPath} replace/>;
    return <Outlet/>;
};

const LoginRoute = ({redirectPath = PATH.profile}) => {
    const isAuth = useAppSelector((state) => state.authReducer.isAuth);

    if (isAuth) return <Navigate to={redirectPath} replace/>;
    return <Outlet/>;
};


const Pages = () => {
    return (
        <Routes>
            <Route path={'/'} element={<Navigate to={`${PATH.profile}`}/>}/>
            <Route element={<RequireAuth/>}>
                <Route path={PATH.profile} element={<Profile/>}>
                    <Route path={':id'} element={<Profile/>}/>
                </Route>
                <Route path={PATH.dialogs} element={<Dialogs/>}/>
                <Route path={PATH.users} element={<Users/>}/>
                <Route path={PATH.music} element={<Music/>}/>
                <Route path={PATH.news} element={<News/>}/>
                <Route path={PATH.settings} element={<Settings/>}/>
            </Route>
            <Route element={<LoginRoute/>}>
                <Route path={PATH.login} element={<Login/>}/>
            </Route>
        </Routes>
    );
};

export default Pages;
