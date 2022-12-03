import React from 'react';
import s from './ProfileInfo.module.css'
import {Preloader} from "../../common/Preloader/Preloader";
import {savePhotoThunk, userType} from "../../../Redux/profile-reducer";
import ProfileStatus from "./ProfileStatus";
import {useAppDispatch, useAppSelector} from "../../../hooks/hooks";


type profileInfoPropsType = {
    profile: userType | null
    status : string
    updateStatus : (status: string) => any
}
export const ProfileInfo = (props: profileInfoPropsType) => {
    const dispatch = useAppDispatch()
    const isFetchingApp = useAppSelector(state => state.appReducer.isFetching)
    const userData = useAppSelector( state => state.profileReducer.profile)
    //сделать проверку и отображать кнопку добавления аватара
    if (!props.profile) {
        return <Preloader/>
    }

    const addPhotoHandler = (e: React.ChangeEvent<HTMLInputElement>) => {
        const files = e.target.files && e.target.files[0]
        console.log(files)
        dispatch(savePhotoThunk(files))
    }

    // useEffect(() => {
    //     ??
    // })
    return (
        <div>
            {isFetchingApp && <Preloader/>}
            <img width={'150px'}
                 src={   userData.photos.large || 'https://i.imgur.com/lqN6w1t.png' }
                 alt=""/>
            <input type='file' onChange={addPhotoHandler}/>
            <ProfileStatus status={props.status} updateStatus={props.updateStatus}/>
            <div className={s.descriptionBlock}>
                <h2 className={s.name}>{userData.fullName}</h2>
                <p>status Job:  {userData.lookingForAJob}</p>
                <p></p>
                <p>About me</p>
                <p>City: Minsk</p>
                <p>Education: BSU'11</p>
                <p>Web Site: https://it-kamasutra.com</p>
            </div>
        </div>
    );
};

