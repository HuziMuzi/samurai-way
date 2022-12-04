import React from 'react';
import s from './ProfileInfo.module.css'
import {Preloader} from "../../common/Preloader/Preloader";
import {savePhotoThunk, userType} from "../../../Redux/profile-reducer";
import ProfileStatus from "./ProfileStatus";
import {useAppDispatch, useAppSelector} from "../../../hooks/hooks";


type profileInfoPropsType = {
    profile: userType | null
    status: string
    updateStatus: (status: string) => any
}
export const ProfileInfo = (props: profileInfoPropsType) => {
    const dispatch = useAppDispatch()
    const isFetchingApp = useAppSelector(state => state.appReducer.isFetching)
    const userPhoto = useAppSelector(state => state.profileReducer.profile.photos?.large)


    //сделать проверку и отображать кнопку добавления аватара
    if (!props.profile) {
        return <Preloader/>
    }

    const addPhotoHandler = (e: React.ChangeEvent<HTMLInputElement>) => {
        const files = e.target.files && e.target.files[0]
        dispatch(savePhotoThunk(files))
    }
    // const keysUserData : [keyof string] = Object.keys(userData.contacts) as keyof [keyof string]
    // useEffect(() => {
    //     ??
    // })
    // console.log(userData.contacts)
    return (
        <div>
            {isFetchingApp && <Preloader/>}
            <img width={'150px'}
                 src={userPhoto || 'https://i.imgur.com/lqN6w1t.png'}
                 alt=""/>
            <input type='file' onChange={addPhotoHandler}/>
            <ProfileStatus status={props.status} updateStatus={props.updateStatus}/>
            <ProfileData/>
        </div>
    );
};


export type TContacts = {
    contactTitle: string
    contactValue: string | null


}

const ProfileData = () => {
    const userData = useAppSelector(state => state.profileReducer.profile)


    return (
        <div className={s.descriptionBlock}>
            <div className={s.name}><b>Full name:</b> {userData.fullName}</div>
            <p><b>Looking for a Job: </b> {userData.lookingForAJob ? 'Yes' : 'No'}</p>
            {userData.lookingForAJob && <p>My professionals skills: {userData.lookingForAJobDescription}</p>}
            <p>About me</p>
            <p><b>Contact: </b></p>
            {Object.keys(userData.contacts).map((key: string) => {
                return <Contact contactTitle={key}
                                contactValue={userData.contacts[key as keyof typeof userData.contacts]}/>
            })}
        </div>
    )
}

const Contact = (props: TContacts) => {
    return (<div><b> {props.contactTitle} </b>{props.contactValue}</div>
    )
}