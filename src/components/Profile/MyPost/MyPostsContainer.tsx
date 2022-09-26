import React from 'react';
import {AddPostAC, ChangeNewTextAC} from "../../../Redux/profile-reducer";
import {MyPosts} from "./MyPosts";
import {connect} from "react-redux";
import {AppRootState} from "../../../Redux/redux-store";

const mapStateToProps = (state: AppRootState) => {
    return {
        posts: state.profileReducer.posts,
        message: state.profileReducer.messageForNewPost
    }
}

const mapDispatchToProps = (dispatch: any) => {
    return {
        onChangeTextArea: (value: string) => {
            dispatch(ChangeNewTextAC(value))
        },
        addPost: () => {
            dispatch(AddPostAC())
        }
    }
}

export const MyPostsContainer = connect(mapStateToProps,mapDispatchToProps)(MyPosts)

