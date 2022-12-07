import {useAppSelector} from "../../../../hooks/hooks";
import ProfileStatus from "./ProfileStatus/ProfileStatus";
import React from "react";
import style from './ProfileData.module.scss'
import {iconsDictionary} from "../../../common/icons/iconsDictionary";

export const ProfileData = () => {
    const userData = useAppSelector(state => state.profileReducer.profile)
    const status = useAppSelector(state => state.profileReducer.status)

    return (
        <div className={style.descriptionBlock}>
            <div className={style.name}> {userData.fullName}</div>
            <div className={style.statusBlock}>Status: <ProfileStatus status={status}/></div>
            <div className={style.looking}>
                <p className={style.lookingJob}>Looking for a Job: {userData.lookingForAJob ? 'Yes' : 'No'}</p>
                {userData.lookingForAJobDescription &&
                    <p>My professionals skills: {userData.lookingForAJobDescription}</p>}
            </div>
            <Contact/>
        </div>
    )
}


const Contact = () => {

    const userData = useAppSelector(state => state.profileReducer.profile.contacts)
    const mappedContacts = Object.entries(userData).map(contact => {
        if (contact[1]) return {
            label: contact[0],
            link: contact[1],
            icon: contact[0]
        }
    }).filter(el => el)

    return (<div className={style.contact}>
        {mappedContacts.map((contact, index) =>
                contact &&
                <span className={style.iconContact} key={index}>
            <a href={contact.link} target={'_blank'}> {iconsDictionary[contact.icon]} </a>
            </span>
        )}

    </div>)


}