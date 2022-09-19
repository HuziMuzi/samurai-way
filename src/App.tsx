import React from 'react';
import './App.css';
import {Header} from "./components/Header/Header";
import {Navbar} from "./components/Navbar/Navbar";
import {Profile} from "./components/Profile/Profile";
import Dialogs from "./components/Dialogs/Dialogs";
import {BrowserRouter, Route} from "react-router-dom";
import Music from "./components/Music/Music";
import Settings from "./components/Settings/Settings";
import News from "./components/News/News";
import {StoreType} from "./Redux/store";


type AppPropsType = {
    store: any
        // StoreType
}

function App(props: AppPropsType) {
    const state = props.store.getState()
    return (
        <BrowserRouter>
            <div className='app-wrapper'>
                <Header/>
                <Navbar state={state}/>
                <div className='app-wrapper-content'>
                    <Route path={'/Profile'} render={() => <Profile
                        message={state.profilePage.messageForNewPost}
                        dispatch={props.store.dispatch.bind(props.store)}
                        // changeNewTextCallBack={props.store.changeNewText.bind(props.store)}
                        // addPost={props.store.addPost.bind(props.store)}
                        state={state.profilePage}
                    />}
                    />
                    <Route path={'/Dialogs'} render={() => <Dialogs
                        state={state.dialogsPage}
                        dispatch={props.store.dispatch.bind(props.store)}
                    />}/>
                    <Route path={'/Music'} component={Music}/>
                    <Route path={'/News'} component={News}/>
                    <Route path={'/Settings'} component={Settings}/>
                </div>
            </div>
        </BrowserRouter>
    );
}

export default App;
