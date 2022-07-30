import React, {ChangeEvent} from 'react';
import {Posts} from "./Post/Posts";
import {ActionsTypes} from "../../../Redux/State";

export type PostDataType = {
    id: number
    message: string
    likesCount: number
}

type MyPostsPropsType = {
    state: {
        posts: Array<PostDataType>
    },
    // addPost: (message: string) => void,
    message: string
    // changeNewTextCallBack: (newText: string) => void
    dispatch: (action: ActionsTypes) => void
}

export const MyPosts = (props: MyPostsPropsType) => {
    let postsElement = props.state.posts.map(post => <Posts message={post.message} likes={post.likesCount}/>)

    const addPostHandler = () => {
        props.dispatch({type: 'ADD-POST', postMessage: props.message})
    }

    const onChangeTextArea = (event: ChangeEvent<HTMLTextAreaElement>) => {
        props.dispatch({type: 'CHANGE_NEW_TEXT', newText: event.currentTarget.value})
        // props.changeNewTextCallBack(event.currentTarget.value)
    }

    return (
        <>
            <div>
                <h3>My posts</h3>
                <textarea value={props.message} onChange={onChangeTextArea}></textarea>
                <div>
                    <button onClick={addPostHandler}>Add post</button>
                </div>
            </div>
            <div>New post:
                {postsElement}
            </div>
        </>
    )
        ;
};

