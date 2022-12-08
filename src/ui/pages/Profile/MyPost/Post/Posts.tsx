import React from 'react';
import style from './Posts.module.scss'
import {useAppSelector} from "../../../../../hooks/hooks";
import Likes2 from "../../../../components/common/icons/Likes2";

type PostsPropsMessage = {
    message: string
    likes: number
}

export const Posts = (props: PostsPropsMessage) => {
    const photoUser = useAppSelector(state => state.profileReducer.profile.photos?.small)
    const name  = useAppSelector(state => state.profileReducer.profile.fullName)


    const likeHandler = () => {

    }
    return (
        <>
            <div className={style.popup}>
                <img className={style.avatar} src={photoUser? photoUser: 'https://i.imgur.com/lqN6w1t.png'} alt=""/>
                <div className={style.corner}></div>
                <div className={style.info}>
                    <div className={style.name}>{name}</div>
                    <div className={style.message}>{props.message}</div>
                </div>
                <div className={style.likes} onClick={likeHandler}><Likes2/> <span>{props.likes}</span></div>

            </div>
        </>
    )
};

