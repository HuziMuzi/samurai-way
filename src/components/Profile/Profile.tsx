import React from 'react';
import s from './Profile.module.css'
import {ProfileInfo} from "./ProfileInfo/ProfileInfo";
import {MyPostsContainer} from "./MyPost/MyPostsContainer";
import {userType} from "../../Redux/profile-reducer";

type ProfilePropsType = {
    profile: userType | null
    status: string
    updateStatus : (status: string) => any
}

export const Profile = (props: ProfilePropsType) => {


    return <div className={s.content}>
                <ProfileInfo
                    profile={props.profile}
                    status={props.status}
                    updateStatus={props.updateStatus}
                />
                <MyPostsContainer/>
            </div>
}

