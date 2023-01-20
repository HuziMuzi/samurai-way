import React from 'react';
import {Posts} from "./Post/Posts";
import {useAppDispatch, useAppSelector} from "../../../../hooks/hooks";
import Button from "../../../components/common/Button/Button";
import style from './MyPosts.module.css'
import {useForm} from "react-hook-form";
import {AddPostAC} from "../../../../bll/profile-reducer";
import {TextAreaHookForm} from "../../../components/common/TextAreaHookForm/TextAreaHookForm";

export type PostDataType = {
    id: string
    message: string
    likesCount: number
}

export type PostFieldType = {
    post: string
}

export const MyPosts = () => {

    const dispatch = useAppDispatch()
    const posts = useAppSelector(state => state.profileReducer.posts)
    const {control, handleSubmit, reset} = useForm<PostFieldType>()

    let postsElement = posts.map((post, index) =>
        <Posts
            key={index}
            id={post.id}
            message={post.message}
            likes={post.likesCount}
        />
    )

    const onSubmitPost = (value: PostFieldType) => {
        dispatch(AddPostAC(value.post))
        reset({post: ''})
    }

    return (
        <>
            <div className={style.newPost}>
                {/*<CustomTextArea register={register} name='post'  />*/}
                <TextAreaHookForm control={control} name='post' rules={{required: 'The field is required'}}/>
                <Button onClick={handleSubmit(onSubmitPost)}>Send</Button>
            </div>
            <div>New post:
                {postsElement}
            </div>
        </>
    )
};
