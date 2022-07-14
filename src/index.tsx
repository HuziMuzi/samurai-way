import React from 'react';
import './index.css';
import {state} from "./Redux/State";
import {rerenderEntireTree} from "./render";

// let dialogs: Array<DialogsDataType> = [
//     {id: 1, name: 'Andrei'},
//     {id: 2, name: 'Dima'},
//     {id: 3, name: 'Ilya'},
//     {id: 4, name: 'Kirill'},
//     {id: 5, name: 'Alex'}
// ]
//
// let messages: Array<MessageDataType> = [
//     {id: 1, text: 'Hi!'},
//     {id: 2, text: 'How are you?'},
//     {id: 3, text: 'Have a good day'},
// ]
//
// let posts: Array<PostDataType> = [
//     {id: 1, message: 'Hi,how are you?', likesCount: 5},
//     {id: 2, message: "It's my first post", likesCount: 32},
// ]

rerenderEntireTree(state)

