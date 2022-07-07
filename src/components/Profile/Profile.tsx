import React from 'react';
import s from './Profile.module.css'
import {MyPosts} from "./MyPost/MyPosts";
import {ProfileInfo} from "./ProfileInfo/ProfileInfo";


export const Profile = () => {
    return (
        <>
            <div className={s.content}>
                <div><img className={s.bg_img}
                          src="https://cdn.pixabay.com/photo/2013/11/15/13/57/road-210913_960_720.jpg" alt=""/></div>
                <ProfileInfo/>
                <MyPosts/>
            </div>
        </>
    );
};

