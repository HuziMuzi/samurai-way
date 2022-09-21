import React from 'react';
import {ProfileActionsTypes, AddPostAC, ChangeNewTextAC, initialStateTypeProfile} from "../../../Redux/profile-reducer";
import {MyPosts} from "./MyPosts";
import {stateType, StoreType} from "../../../Redux/store";
import {useDispatch, useSelector} from "react-redux";
import {AppRootState} from "../../../Redux/redux-store";

export type PostDataType = {
    id: number
    message: string
    likesCount: number
}

type MyPostsPropsType = {
    store:StoreType
}

export const MyPostsContainer = (props: MyPostsPropsType) => {
    // let state = props.store.getState()
    const dispatch = useDispatch()
    const profilePageState = useSelector<AppRootState, initialStateTypeProfile>(state => state.profileReducer)
    const addPostHandler = () => {
        dispatch(AddPostAC(profilePageState.messageForNewPost))
    }
    const onChangeTextArea = (value: string) => {
        dispatch(ChangeNewTextAC(value))
    }

    return (
        <MyPosts posts={profilePageState.posts}
                 message={profilePageState.messageForNewPost}
                 onChangeTextArea={onChangeTextArea}
                 addPost={addPostHandler}
        />
    )
};

