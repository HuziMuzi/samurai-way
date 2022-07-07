import React from 'react';
import s from './Posts.module.css'

type PostsPropsMessage = {
    message: string
    likes : number
}

export const Posts = (props:PostsPropsMessage) => {
    return (
        <>
            <div className={s.postman}>
                <img  width={'150px'}
                     src="https://www.thehedgescompany.com/hedges/wp-content/uploads/2016/04/Man-at-computer-no-attribution.jpg"
                     alt="avatar"/>
                <p>{props.message}</p>

            </div>
            <div> Likes:{props.likes}</div>
        </>
    )
};

