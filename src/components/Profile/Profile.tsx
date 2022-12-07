import React, {useEffect} from 'react';
import s from './Profile.module.css'
import {ProfileInfo} from "./ProfileInfo/ProfileInfo";
import {MyPostsContainer} from "./MyPost/MyPostsContainer";
import {getProfileThunk, getUserStatusThunk} from "../../Redux/profile-reducer";
import {useAppDispatch, useAppSelector} from "../../hooks/hooks";
import { useNavigate, useParams} from "react-router-dom";
import {PATH} from "../Pages/Pages";


export const Profile = () => {
    const params = useParams()
    const navigate = useNavigate()
    const dispatch = useAppDispatch()
    const ownId = useAppSelector(state => state.authReducer.id)
    let userId = params.id


    useEffect(() => {
        if (!userId) {
            userId = String(ownId)
            if (!userId) {
                navigate(PATH.login)
            }
        }
        dispatch(getProfileThunk(userId))
        dispatch(getUserStatusThunk(userId))

    },[params])

    return <div className={s.content}>
                <ProfileInfo />
                <MyPostsContainer/>
            </div>
}

