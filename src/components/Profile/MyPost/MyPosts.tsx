import React, {ChangeEvent} from 'react';
import {Posts} from "./Post/Posts";
import {ProfileActionsTypes, AddPostAC, ChangeNewTextAC} from "../../../Redux/profile-reducer";

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
    // dispatch: (action: ActionsTypes) => void
    dispatch: (action: ProfileActionsTypes) => void
}

// let AddPostActionCreate = ( message:string) => {
//     return {
//         type: 'ADD-POST',
//         postMessage : message
//     }
// }

export const MyPosts = (props: MyPostsPropsType) => {
    let postsElement = props.state.posts.map(post => <Posts message={post.message} likes={post.likesCount}/>)

    const addPostHandler = () => {
        // props.dispatch({type: 'ADD-POST', postMessage: props.message})
        props.dispatch(AddPostAC(props.message))
    }

    const onChangeTextArea = (event: ChangeEvent<HTMLTextAreaElement>) => {
        props.dispatch(ChangeNewTextAC(event.currentTarget.value))
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

