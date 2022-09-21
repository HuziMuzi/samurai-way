import React, {ChangeEvent} from 'react';
import {Posts} from "./Post/Posts";

export type PostDataType = {
    id: number
    message: string
    likesCount: number
}

type MyPostsPropsType = {
    // state: {
    //     posts: Array<PostDataType>
    // },
    posts : Array<PostDataType>
    // addPost: (message: string) => void,
    message: string
    // changeNewTextCallBack: (newText: string) => void
    // dispatch: (action: ActionsTypes) => void
    onChangeTextArea: (value : string) => void
    addPost: () => void
}



export const MyPosts = (props: MyPostsPropsType) => {
    let postsElement = props.posts.map((post, index) => <Posts key={index} message={post.message} likes={post.likesCount}/>)

    const addAddPost = () => {
        props.addPost()

    }

    const onChangeMessage = (event: ChangeEvent<HTMLTextAreaElement>) => {
        props.onChangeTextArea(event.currentTarget.value)
    }

    return (
        <>
            <div>
                <h3>My posts</h3>
                <textarea value={props.message} onChange={onChangeMessage}></textarea>
                <div>
                    <button onClick={addAddPost}>Add post</button>
                </div>
            </div>
            <div>New post:
                {postsElement}
            </div>
        </>
    )
        ;
};

