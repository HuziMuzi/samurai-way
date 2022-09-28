import React from 'react';
import './App.css';
import {Header} from "./components/Header/Header";
import {Navbar} from "./components/Navbar/Navbar";
import {BrowserRouter, Route} from "react-router-dom";
import Music from "./components/Music/Music";
import Settings from "./components/Settings/Settings";
import News from "./components/News/News";
import DialogsContainer from "./components/Dialogs/DialogsContainer";
import UsersContainer from "./components/Users/UsersContainer";
import {ProfileContainer} from "./components/Profile/ProfileContainer";



type AppPropsType = {
    // store: AppPropsType

}

function App(props: AppPropsType) {

    return (
        <BrowserRouter>
            <div className='app-wrapper'>
                <Header/>
                <Navbar/>
                <div className='app-wrapper-content'>
                    <Route path={'/Profile'} render={() => <ProfileContainer/>}
                    />
                    <Route path={'/Dialogs'} render={() => <DialogsContainer/>}/>
                    <Route path={'/Users'} render={() => <UsersContainer/>}/>
                    <Route path={'/Music'} component={Music}/>
                    <Route path={'/News'} component={News}/>
                    <Route path={'/Settings'} component={Settings}/>
                </div>
            </div>
        </BrowserRouter>
    );
}

export default App;
