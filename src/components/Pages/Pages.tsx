import React from 'react';
import { Route, Routes} from "react-router-dom";
import ProfileContainer from "../Profile/ProfileContainer";
import Dialogs from "../Dialogs/DialogsContainer";
import {Users} from "../Users/Users";
import Music from "../Music/Music";
import News from "../News/News";
import Settings from "../Settings/Settings";
import Login from "../Login/Login";


export const PATH = {
    profile: "/profile",
    users: "/users",
    dialogs: "/dialogs",
    news: "/news",
    music: "/music",
    settings: "/settings",
    login: "/login"
};

const Pages = () => {


    {/*<Route path={'/Profile/:userId?'} render={() => {*/
    }
    {/*    return <React.Suspense fallback={<div>Loading...</div>}>*/
    }
    {/*        <ProfileContainer/>*/
    }
    {/*    </React.Suspense>*/
    }
    {/*}}/>*/
    }

    return (
        <div>
            <Routes>
                <Route path={'/'} element={<Login/>}/>
                <Route path={PATH.profile} element={<ProfileContainer/>}/>
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