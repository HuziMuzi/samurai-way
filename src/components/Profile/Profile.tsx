import React from 'react';
import s from './Profile.module.css'
import {ProfileInfo} from "./ProfileInfo/ProfileInfo";
import {MyPostsContainer} from "./MyPost/MyPostsContainer";
import {userType} from "../../Redux/profile-reducer";

type ProfilePropsType = {
    profile: userType |  null

}

export const Profile = (props: ProfilePropsType) => {


    return (
        <>
            <div className={s.content}>
                <div><img className={s.bg_img}
                          src="https://cdn.pixabay.com/photo/2013/11/15/13/57/road-210913_960_720.jpg" alt=""/></div>
                <ProfileInfo profile={props.profile}/>
                <MyPostsContainer  />
            </div>
        </>
    );
};

