import React from 'react';
import s from './ProfileInfo.module.css'
import {userType} from "../../../Redux/users-reducer";
import {Preloader} from "../../commen/ Preloader/Preloader";


type profileInfoPropsType = {
    profile: userType | null
}
export const ProfileInfo = (props: profileInfoPropsType) => {
    if (!props.profile) {
        return <Preloader/>
    }


    return (
        <div>
            <img width={'150px'}
                 src={props.profile.photos.large}
                 alt=""/>
            <div className={s.descriptionBlock}>
                <h2 className={s.name}>{props.profile.fullName}</h2>
                <p>status:  {props.profile.lookingForAJob}</p>
                <p>followed: {props.profile.followed}</p>
                <p>About me</p>
                <p>City: Minsk</p>
                <p>Education: BSU'11</p>
                <p>Web Site: https://it-kamasutra.com</p>
            </div>
        </div>
    );
};

