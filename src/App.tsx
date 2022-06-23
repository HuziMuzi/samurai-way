import React from 'react';
import './App.css';
import {ReactComponent as MyLogo} from './img/logo.svg'
import {Header} from "./components/Header";
import {Navbar} from "./components/Navbar";
import {Profile} from "./components/Profile";

function App() {
    return (
        <div className='app-wrapper'>
            <Header/>
            <Navbar/>
           <Profile/>
        </div>
    );
}

export default App;
