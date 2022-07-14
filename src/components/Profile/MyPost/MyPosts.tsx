import React, {ChangeEvent} from 'react';
import {Posts} from "./Post/Posts";
import {text} from "stream/consumers";
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
    addPost: (message: string) => void,
    message : string
    changeNewTextCallBack : (newText: string) => void
}

export const MyPosts = (props: MyPostsPropsType) => {
    let postsElement = props.state.posts.map(post => <Posts message={post.message} likes={post.likesCount}/>)


    const addPost = () => {
        props.addPost(props.message)
    }

    const onChangeTextArea = (event:ChangeEvent<HTMLTextAreaElement>) => {
        props.changeNewTextCallBack(event.currentTarget.value)
        console.log(props.changeNewTextCallBack(event.currentTarget.value))

    }


    return (
        <>
            <div>
                <h3>My posts</h3>
                <textarea value={props.message} onChange={onChangeTextArea}></textarea>
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

