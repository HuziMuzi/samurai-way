import React from 'react';
import {Posts} from "./Post/Posts";
import {useAppDispatch, useAppSelector} from "../../../../hooks/hooks";
import TextArea from "../../../components/common/TextArea/TextArea";
import Button from "../../../components/common/Button/Button";
import style from './MyPosts.module.css'
import {useForm} from "react-hook-form";
import {AddPostAC} from "../../../../Redux/profile-reducer";


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
    const {register, handleSubmit, reset} = useForm<PostFieldType>()

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
        reset()
    }

    return (
        <form onSubmit={handleSubmit(onSubmitPost)}>
            <div className={style.newPost}>
                <TextArea register={register} name='post' />
                <Button>Send</Button>
            </div>
            <div>New post:
                {postsElement}
            </div>
        </form>
    )
};
//
// type formDataType = {
//     newPostText: string
// }
//
//
// const maxLength10 = maxLengthCreator(10)
//
//
// const PostsAddForm = (props: InjectedFormProps<formDataType>) => {
//     return (
//         <Form onSubmit={props.handleSubmit}>
//             <Field
//                 name={'newPostText'}
//                 placeholder='Текст поста'
//                 component={Textarea}
//                 validate={[required, maxLength10]}
//             />
//             <div>
//                 <button>Add post</button>
//             </div>
//         </Form>
//     )
// }
//
// const PostsAddReduxForm = reduxForm<formDataType>({
//     form: "newPostText"
// })(PostsAddForm)
//
//
// type MyPostsFormPropsType = {
//     onSubmit: (value: string) => void
// }
// const MyPostsForm = (props: MyPostsFormPropsType) => {
//     const onSubmitForm = (value:formDataType) => {
//         props.onSubmit(value.newPostText)
//     }
//     return (
//         <>
//             <h3>My posts</h3>
//             <PostsAddReduxForm onSubmit={onSubmitForm}/>
//         </>
//     )
// }
