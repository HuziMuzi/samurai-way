import React from 'react';
import './App.css';

import {ReactComponent as MyLogo} from './img/logo.svg'

function App() {
    return (
        <div className='app-wrapper'>
            <header className='header'>
                <img width={'100px'} height={'70px'}
                     src="https://i.pinimg.com/originals/0b/73/51/0b7351f7b132512ea28fae9d5fff1bde.png" alt=""/>
            </header>
            <nav className='nav'>
                <div><a href=''>Profile</a></div>
                <div><a href="">Messages</a></div>
                <div><a href="">News</a></div>
                <div><a href="">Music</a></div>
                <div><a href="">Settings</a></div>
            </nav>
            <div className='content'>
                <div><img src="https://cdn.pixabay.com/photo/2013/11/15/13/57/road-210913_960_720.jpg" alt=""/></div>
                <div>ava + disc</div>
                <div>my post</div>
                <div>new post</div>
                <div>post 1</div>
                <div>post 2</div>
            </div>
        </div>
    );
}

export default App;
