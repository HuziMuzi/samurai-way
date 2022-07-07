import React from 'react';
import s from './MyPosts.module.css'
import {Posts} from "./Post/Posts";

type PostDataType = {
    id: number
    message: string
    likesCount: number
}

export const MyPosts = () => {

    let posts: Array<PostDataType> = [
        {id: 1, message: 'Hi,how are you?', likesCount: 5},
        {id: 2, message: "It's my first post", likesCount: 32},
    ]

    let postsElement = posts.map(post => <Posts message={post.message} likes={post.likesCount}/>)

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
                {postsElement}
                {/*<Posts message='Hi, how are you?' likes={21}/>*/}
                {/*<Posts message="It's my first post" likes={11}/>*/}
            </div>
        </>
    )
        ;
};

