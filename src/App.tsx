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
import {sideUserType} from "./components/Sidebar/Sidebar";
import {addPost} from "./Redux/State";


export type stateType = {

    profilePage: {
        messageForNewPost: string
        posts: Array<PostDataType>
    }
    dialogsPage: {
        dialogs: Array<DialogsDataType>
        messages: Array<MessageDataType>
    }
    navBarPage: {
        sidebar: Array<sideUserType>
    }
}

type AppPropsType = {
    state: stateType
    addPost: (message: string) => void
    changeNewTextCallBack: (newText : string) => void
    message : string

}

function App(props: AppPropsType) {
    return (
        <BrowserRouter>
            <div className='app-wrapper'>
                <Header/>
                <Navbar state={props.state}/>
                <div className='app-wrapper-content'>
                    <Route path={'/Profile'} render={() => <Profile
                        message={props.state.profilePage.messageForNewPost}
                        changeNewTextCallBack={props.changeNewTextCallBack}
                        state={props.state.profilePage}
                        addPost={addPost}/>}/>
                    <Route path={'/Dialogs'} render={() => <Dialogs state={props.state.dialogsPage}/>}/>
                    <Route path={'/Music'} component={Music}/>
                    <Route path={'/News'} component={News}/>
                    <Route path={'/Settings'} component={Settings}/>
                </div>
            </div>
        </BrowserRouter>
    );
}

export default App;
