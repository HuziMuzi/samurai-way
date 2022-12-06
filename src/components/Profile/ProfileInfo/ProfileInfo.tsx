import React from 'react';
import s from './ProfileInfo.module.scss'
import {userType} from "../../../Redux/profile-reducer";
import {useAppDispatch, useAppSelector} from "../../../hooks/hooks";
import { useNavigate} from "react-router-dom";
import {PATH} from "../../Pages/Pages";
import {LoaderIcon} from "../../../assets/LoaderIcon/LoaderIcon";
import {ProfileData} from "./ProfileData/ProfileData";


type profileInfoPropsType = {
    profile: userType | null
}
export const ProfileInfo = (props: profileInfoPropsType) => {
    const dispatch = useAppDispatch()
    const navigate = useNavigate()
    const isFetchingApp = useAppSelector(state => state.appReducer.isFetching)
    const userPhoto = useAppSelector(state => state.profileReducer.profile.photos?.large)
    console.log(props.profile)


    return (
        <div className={s.profileInfoBlock}>
            {isFetchingApp  && <LoaderIcon positions={"positionAbsolute"}/>}
            <div className={s.profileBlockImg}>
                <img width={'150px'}
                     src={userPhoto || 'https://i.imgur.com/lqN6w1t.png'}
                     alt="" className={s.profileImg}/>
                <button onClick={() =>  navigate(PATH.settings)}>Редактировать профиль</button>
            </div>
            <ProfileData/>
        </div>
    );
};


export type TContacts = {
    contactTitle: string
    contactValue: string | null


}



