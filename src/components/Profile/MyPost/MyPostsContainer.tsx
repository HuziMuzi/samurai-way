import React from 'react';
import {AddPostAC} from "../../../Redux/profile-reducer";
import {MyPosts} from "./MyPosts";
import {connect} from "react-redux";
import {AppRootState} from "../../../Redux/redux-store";
import {Dispatch} from "redux";

const mapStateToProps = (state: AppRootState) => {
    return {
        posts: state.profileReducer.posts,
    }
}

const mapDispatchToProps = (dispatch: Dispatch) => {
    return {
        addPost: (value: string) => {
            dispatch(AddPostAC(value))
        }
    }
}

export const MyPostsContainer = connect(mapStateToProps,mapDispatchToProps)(MyPosts)

