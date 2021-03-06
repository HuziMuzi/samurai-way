import React from 'react';
import s from './Profile.module.css'
import {MyPosts, PostDataType} from "./MyPost/MyPosts";
import {ProfileInfo} from "./ProfileInfo/ProfileInfo";
import {addPost} from "../../Redux/State";

type ProfilePropsType = {
    state: {
        posts :Array<PostDataType>
    },
    addPost:(message:string) => void
    message:string
    changeNewTextCallBack:(newText : string) => void

}


export const Profile = (props: ProfilePropsType) => {

    return (
        <>
            <div className={s.content}>
                <div><img className={s.bg_img}
                          src="https://cdn.pixabay.com/photo/2013/11/15/13/57/road-210913_960_720.jpg" alt=""/></div>
                <ProfileInfo/>
                <MyPosts state={props.state} message={props.message} changeNewTextCallBack={props.changeNewTextCallBack} addPost={addPost}/>
            </div>
        </>
    );
};

