import React from 'react';
import s from './ProfileInfo.module.scss'
import {savePhotoThunk, userType} from "../../../Redux/profile-reducer";
import ProfileStatus from "./ProfileStatus";
import {useAppDispatch, useAppSelector} from "../../../hooks/hooks";
import { useNavigate} from "react-router-dom";
import {PATH} from "../../Pages/Pages";
import {LoaderIcon} from "../../../assets/LoaderIcon/LoaderIcon";


type profileInfoPropsType = {
    profile: userType | null
    status: string
}
export const ProfileInfo = (props: profileInfoPropsType) => {
    const dispatch = useAppDispatch()
    const navigate = useNavigate()
    const isFetchingApp = useAppSelector(state => state.appReducer.isFetching)
    const userPhoto = useAppSelector(state => state.profileReducer.profile.photos?.large)
    console.log(props.profile)

    const addPhotoHandler = (e: React.ChangeEvent<HTMLInputElement>) => {
        const files = e.target.files && e.target.files[0]
        dispatch(savePhotoThunk(files))
    }
    return (
        <div className={s.profileInfoBlock}>
            {isFetchingApp  && <LoaderIcon positions={"positionAbsolute"}/>}
            <div className={s.profileBlockImg}>
                <img width={'150px'}
                     src={userPhoto || 'https://i.imgur.com/lqN6w1t.png'}
                     alt="" className={s.profileImg}/>
                <button onClick={() =>  navigate(PATH.settings)}>Редактировать профиль</button>
            </div>

            <input type='file' onChange={addPhotoHandler}/>
            <ProfileStatus status={props.status} />
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
                if (userData.contacts[key as keyof typeof userData.contacts]) {
                    return <Contact key={key} contactTitle={key}
                                    contactValue={userData.contacts[key as keyof typeof userData.contacts]}/>
                }

            })}
        </div>
    )
}

const Contact = (props: TContacts) => {
    return (<div><b> {props.contactTitle} </b>{props.contactValue}</div>
    )
}