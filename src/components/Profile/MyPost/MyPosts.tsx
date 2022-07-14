import React from 'react';
import s from './MyPosts.module.css'
import {Posts} from "./Post/Posts";
import {addPost} from "../../../Redux/State";
import {message} from "antd";

export type PostDataType = {
    id: number
    message: string
    likesCount: number
}

type MyPostsPropsType = {
    state: {
        posts: Array<PostDataType>
    },
    addPost: (message: string) => void
}

export const MyPosts = (props: MyPostsPropsType) => {
    let postsElement = props.state.posts.map(post => <Posts message={post.message} likes={post.likesCount}/>)

    const newPostElement = React.createRef<HTMLTextAreaElement>()

    const addPost = () => {
        const text = newPostElement.current?.value
        if (text) {
            props.addPost(text)
        }
    }

    return (
        <>
            <div>
                <h3>My posts</h3>
                <textarea ref={newPostElement}></textarea>
                <div>
                    <button onClick={addPost}>Add post</button>
                </div>
            </div>
            <div>New post:
                {postsElement}
            </div>
        </>
    )
        ;
};

