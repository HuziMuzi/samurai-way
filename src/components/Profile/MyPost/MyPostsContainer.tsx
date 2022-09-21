import React from 'react';
import {AddPostAC, ChangeNewTextAC, initialStateTypeProfile} from "../../../Redux/profile-reducer";
import {MyPosts} from "./MyPosts";
import {connect, useDispatch, useSelector} from "react-redux";
import {AppRootState} from "../../../Redux/redux-store";

export type PostDataType = {}

type MyPostsPropsType = {
    // store:StoreType
}

// export const MyPostsContainer = (props: MyPostsPropsType) => {
//     const dispatch = useDispatch()
//     const profilePageState = useSelector<AppRootState, initialStateTypeProfile>(state => state.profileReducer)
//
//     const addPostHandler = () => {
//         dispatch(AddPostAC())
//     }
//     const onChangeTextArea = (value: string) => {
//         dispatch(ChangeNewTextAC(value))
//     }
//
//     return (
//         <MyPosts posts={profilePageState.posts}
//                  message={profilePageState.messageForNewPost}
//                  onChangeTextArea={onChangeTextArea}
//                  addPost={addPostHandler}
//         />
//     )
// };

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

