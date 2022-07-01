import React from 'react';
import s from './MyPosts.module.css'
import {Posts} from "./Post/Posts";


export const MyPosts = () => {
    return (
        <>
        <div>
            <h3>My posts</h3>
            <input type="text"/>
            <div>
                <button>Send</button>
            </div>
        </div>
            <div>New post:
                <Posts message='Hi, how are you?'/>
                <Posts message="It's my first post"/>
            </div>
</>
)
    ;
};

