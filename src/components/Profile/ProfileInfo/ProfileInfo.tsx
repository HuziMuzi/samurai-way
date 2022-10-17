import React from 'react';
import s from './ProfileInfo.module.css'
import {Preloader} from "../../commen/ Preloader/Preloader";
import {userType} from "../../../Redux/profile-reducer";
import ProfileStatus from "./ProfileStatus";


type profileInfoPropsType = {
    profile: userType | null
    status : string
    updateStatus : (status: string) => any
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
            <ProfileStatus status={props.status} updateStatus={props.updateStatus}/>
            <div className={s.descriptionBlock}>
                <h2 className={s.name}>{props.profile.fullName}</h2>
                <p>status Job:  {props.profile.lookingForAJob}</p>
                <p></p>
                <p>About me</p>
                <p>City: Minsk</p>
                <p>Education: BSU'11</p>
                <p>Web Site: https://it-kamasutra.com</p>
            </div>
        </div>
    );
};

