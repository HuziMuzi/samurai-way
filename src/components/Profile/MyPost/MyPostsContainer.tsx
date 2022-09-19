import React from 'react';
import {ProfileActionsTypes, AddPostAC, ChangeNewTextAC} from "../../../Redux/profile-reducer";
import {MyPosts} from "./MyPosts";
import {stateType, StoreType} from "../../../Redux/store";

export type PostDataType = {
    id: number
    message: string
    likesCount: number
}

type MyPostsPropsType = {
    store:StoreType
}

export const MyPostsContainer = (props: MyPostsPropsType) => {
    let state = props.store.getState()
    const addPostHandler = () => {
        props.store.dispatch(AddPostAC(state.profilePage.messageForNewPost))
    }
    const onChangeTextArea = (value: string) => {
        props.store.dispatch(ChangeNewTextAC(value))
    }

    return (
        <MyPosts posts={state.profilePage.posts}
                 message={state.profilePage.messageForNewPost}
                 onChangeTextArea={onChangeTextArea}
                 addPost={addPostHandler}
        />
    )
};

