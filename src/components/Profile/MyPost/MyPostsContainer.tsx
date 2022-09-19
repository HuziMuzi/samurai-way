import React from 'react';
import {ProfileActionsTypes, AddPostAC, ChangeNewTextAC} from "../../../Redux/profile-reducer";
import {MyPosts} from "./MyPosts";

export type PostDataType = {
    id: number
    message: string
    likesCount: number
}

type MyPostsPropsType = {
    state: {
        posts: Array<PostDataType>
    },
    message: string
    dispatch: (action: ProfileActionsTypes) => void
}

export const MyPostsContainer = (props: MyPostsPropsType) => {
    const addPostHandler = () => {
        props.dispatch(AddPostAC(props.message))
    }
    const onChangeTextArea = (value: string) => {
        props.dispatch(ChangeNewTextAC(value))
    }

    return (
        <MyPosts posts={props.state.posts}
                 message={props.message}
                 onChangeTextArea={onChangeTextArea}
                 addPost={addPostHandler}
        />
    )
};

