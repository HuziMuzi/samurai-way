import {DialogsDataType, MessageDataType} from "../components/Dialogs/Dialogs";
import {PostDataType} from "../components/Profile/MyPost/MyPosts";

let state = {
    posts: [
        {id: 1, message: 'Hi,how are you?', likesCount: 5},
        {id: 2, message: "It's my first post", likesCount: 32},],
    dialogs: [
        {id: 1, name: 'Andrei'},
        {id: 2, name: 'Dima'},
        {id: 3, name: 'Ilya'},
        {id: 4, name: 'Kirill'},
        {id: 5, name: 'Alex'}],
    messages: [
        {id: 1, text: 'Hi!'},
        {id: 2, text: 'How are you?'},
        {id: 3, text: 'Have a good day'},]
}

export default state
