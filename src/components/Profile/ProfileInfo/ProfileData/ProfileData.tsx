import {useAppSelector} from "../../../../hooks/hooks";
import ProfileStatus from "./ProfileStatus/ProfileStatus";
import React from "react";
import {TContacts} from "../ProfileInfo";
import  style from './ProfileData.module.scss'

export const ProfileData = () => {
    const userData = useAppSelector(state => state.profileReducer.profile)
    const status = useAppSelector(state => state.profileReducer.status)

    return (
        <div className={style.descriptionBlock}>
            <div className={style.name}> {userData.fullName}</div>
            <ProfileStatus status={status} />

            <p>Looking for a Job: {userData.lookingForAJob ? 'Yes' : 'No'}</p>
            {userData.lookingForAJob && <p>My professionals skills: {userData.lookingForAJobDescription}</p>}
            {Object.keys(userData.contacts).map((key: string) => {
                if (userData.contacts[key as keyof typeof userData.contacts]) {
                    return <Contact key={key} contactTitle={key}
                                    contactValue={userData.contacts[key as keyof typeof userData.contacts]}/>
                }

            })}
        </div>
    )
}



const Contact = (props: TContacts) => {
    return (<div><b> {props.contactTitle} </b>{props.contactValue}</div>)
}