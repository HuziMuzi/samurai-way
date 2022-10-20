import React from 'react';
import {Posts} from "./Post/Posts";
import {Field, Form, InjectedFormProps, reduxForm} from "redux-form";
import {maxLengthCreator, required} from "../../../utils/validators/validator";
import {Textarea} from "../../common/FormsControls/FormsControls";


export type PostDataType = {
    id: number
    message: string
    likesCount: number
}

type MyPostsPropsType = {
    posts: Array<PostDataType>
    addPost: (value: string) => void
}


export const MyPosts = (props: MyPostsPropsType) => {
    let postsElement = props.posts.map((post, index) =>
        <Posts
            key={index}
            message={post.message}
            likes={post.likesCount}
        />
    )

    const onSubmitPost = (value:string) => {
        props.addPost(value)
    }

    return (
        <>
            <div>
                <MyPostsForm onSubmit={onSubmitPost}/>
            </div>
            <div>New post:
                {postsElement}
            </div>
        </>
    )
};

type formDataType = {
    newPostText: string
}


const maxLength10 = maxLengthCreator(10)


const PostsAddForm = (props: InjectedFormProps<formDataType>) => {
    return (
        <Form onSubmit={props.handleSubmit}>
            <Field
                name={'newPostText'}
                placeholder='Текст поста'
                component={Textarea}
                validate={[required, maxLength10]}
            />
            <div>
                <button>Add post</button>
            </div>
        </Form>
    )
}

const PostsAddReduxForm = reduxForm<formDataType>({
    form: "newPostText"
})(PostsAddForm)


type MyPostsFormPropsType = {
    onSubmit: (value: string) => void
}
const MyPostsForm = (props: MyPostsFormPropsType) => {
    const onSubmitForm = (value:formDataType) => {
        props.onSubmit(value.newPostText)
    }
    return (
        <>
            <h3>My posts</h3>
            <PostsAddReduxForm onSubmit={onSubmitForm}/>
        </>
    )
}