import React from 'react';
import s from './MyPosts.module.css'
import {Posts} from "./Post/Posts";

export type PostDataType = {
    id: number
    message: string
    likesCount: number
}

type MyPostsPropsType = {
    posts: Array<PostDataType>
}

export const MyPosts = (props: MyPostsPropsType) => {
    let postsElement = props.posts.map(post => <Posts message={post.message} likes={post.likesCount}/>)

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
            </div>
        </>
    )
        ;
};

