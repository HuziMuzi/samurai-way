import React from 'react';
import s from './ProfileInfo.module.scss'
import {useAppSelector} from "../../../../hooks/hooks";
import { useNavigate} from "react-router-dom";
import {PATH} from "../../Pages";
import {LoaderIcon} from "../../../assets/LoaderIcon/LoaderIcon";
import {ProfileData} from "./ProfileData/ProfileData";
import Button from "../../../components/common/Button/Button";



export const ProfileInfo = () => {
    const navigate = useNavigate()
    const isFetchingApp = useAppSelector(state => state.appReducer.isFetching)
    const userPhoto = useAppSelector(state => state.profileReducer.profile.photos?.large)


    return (
        <div className={s.profileInfoBlock}>
            {isFetchingApp  && <LoaderIcon positions={"positionAbsolute"}/>}
            <div className={s.profileBlockImg}>
                <img
                    className={s.profileImg}
                    width={'150px'}
                     src={userPhoto || 'https://i.imgur.com/lqN6w1t.png'}
                     alt="avatar" />
                <Button onClick={() =>  navigate(PATH.settings)}>edit profile</Button>
            </div>
            <ProfileData/>
        </div>
    );
};



