import React from 'react';
import {Route, Routes} from "react-router-dom";
import Dialogs from "../Dialogs/DialogsContainer";
import {Users} from "../Users/Users";
import Music from "../Music/Music";
import News from "../News/News";
import Settings from "../Settings/Settings";
import Login from "../Login/Login";
import {Profile} from "../Profile/Profile";


export const PATH = {
    profile: "/profile/",
    users: "/users",
    dialogs: "/dialogs",
    news: "/news",
    music: "/music",
    settings: "/settings",
    login: "/login"
};

const Pages = () => {


    return (
        <div>
            <Routes>
                <Route path={'/'} element={<Login/>}/>
                <Route path={PATH.profile} element={<Profile/>}>
                    <Route path={':id'} element={<Profile/>}/>
                </Route>
                <Route path={PATH.dialogs} element={<Dialogs/>}/>
                <Route path={PATH.users} element={<Users/>}/>
                <Route path={PATH.music} element={<Music/>}/>
                <Route path={PATH.news} element={<News/>}/>
                <Route path={PATH.settings} element={<Settings/>}/>
                <Route path={PATH.login} element={<Login/>}/>
            </Routes>
        </div>
    );
};

export default Pages;