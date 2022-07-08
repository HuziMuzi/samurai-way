import React from 'react';
import './App.css';
import {Header} from "./components/Header/Header";
import {Navbar} from "./components/Navbar/Navbar";
import {Profile} from "./components/Profile/Profile";
import Dialogs, {DialogsDataType, MessageDataType} from "./components/Dialogs/Dialogs";
import {BrowserRouter, Route} from "react-router-dom";
import Music from "./components/Music/Music";
import Settings from "./components/Settings/Settings";
import News from "./components/News/News";
import {PostDataType} from "./components/Profile/MyPost/MyPosts";


type AppPropsType = {
    state: {
        posts: Array<PostDataType>
        dialogs: Array<DialogsDataType>
        messages: Array<MessageDataType>
    }



}

function App(props: AppPropsType) {
    return (
        <BrowserRouter>
            <div className='app-wrapper'>
                <Header/>
                <Navbar/>
                <div className='app-wrapper-content'>
                    <Route path={'/Profile'} render={() => <Profile posts={props.state.posts}/>}/>
                    <Route path={'/Dialogs'}
                           render={() => <Dialogs dialogs={props.state.dialogs} messages={props.state.messages}/>}/>
                    <Route path={'/Music'} component={Music}/>
                    <Route path={'/News'} component={News}/>
                    <Route path={'/Settings'} component={Settings}/>
                </div>
            </div>
        </BrowserRouter>
    );
}

export default App;
