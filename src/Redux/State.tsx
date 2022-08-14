import {PostDataType} from "../components/Profile/MyPost/MyPosts";
import {DialogsDataType, MessageDataType} from "../components/Dialogs/Dialogs";
import {sideUserType} from "../components/Sidebar/Sidebar";

// let rerenderEntireTree = (state: stateType) => {
//     console.log('State is changed')
// }
//
// export let state: stateType = {
//     profilePage: {
//         messageForNewPost: '',
//         posts: [
//             {id: 1, message: 'Hi,how are you?', likesCount: 5},
//             {id: 2, message: "It's my first post", likesCount: 32},],
//     },
//     dialogsPage: {
//         dialogs: [
//             {id: 1, name: 'Andrei'},
//             {id: 2, name: 'Dima'},
//             {id: 3, name: 'Ilya'},
//             {id: 4, name: 'Kirill'},
//             {id: 5, name: 'Alex'}],
//         messages: [
//             {id: 1, text: 'Hi!'},
//             {id: 2, text: 'How are you?'},
//             {id: 3, text: 'Have a good day'},]
//     },
//     navBarPage: {
//         sidebar: [
//             {id: 1, name: 'Andrei', avatar: 'https://4tololo.ru/sites/default/files/images/20161912161924.jpg'},
//             {id: 2, name: 'Dima', avatar: 'https://proprikol.ru/wp-content/uploads/2020/12/kartinki-smeh-19.jpg'},
//             {
//                 id: 3,
//                 name: 'Vika',
//                 avatar: 'https://fazarosta.com/wp-content/uploads/2018/09/pikaperu-i-ne-snilos-10-sposobov-privlech-vnimanie-devushki-ot-kotoroj-vy-bez-uma-2-1.jpg'
//             },
//         ]
//     }
// }
//
// export const addPost = (postMessage: string) => {
//     const newPost: PostDataType = {
//         id: 5,
//         message: postMessage,
//         likesCount: 0
//     }
//     state.profilePage.posts.push(newPost)
//     changeNewText('')
//     rerenderEntireTree(state)
// }
//
// export const subscrube = (observer: () => void) => {
//     rerenderEntireTree = observer
// }
//
// export const changeNewText = (newText: string) => {
//     state.profilePage.messageForNewPost = newText
//     rerenderEntireTree(state)
// }

const ADD_POST = 'ADD-POST'
const CHANGE_NEW_TEXT = 'CHANGE_NEW_TEXT'

const UPDATE_NEW_POST_TEXT = "UPDATE_NEW_MESSAGE_TEXT"
const SEND_MESSAGE = 'SEND_MESSAGE'

export type stateType = {
    profilePage: {
        messageForNewPost: string
        posts: Array<PostDataType>
    }
    dialogsPage: {
        dialogs: Array<DialogsDataType>
        messages: Array<MessageDataType>
        newMessageText: string
    }
    navBarPage: {
        sidebar: Array<sideUserType>
    }
}
export type StoreType = {
    _state: stateType
    _callSubscriber: (state: stateType) => void
    // addPost: (postMessage: string) => void
    subscrube: (callback: () => void) => void
    // changeNewText: (newText: string) => void
    getState: () => stateType
    dispatch: (action: ActionsTypes) => void
}

// type AddPostActionType = {
//     type:'ADD-POST'
//     postMessage: string
// }
// type AddPostActionType = ReturnType<typeof AddPostAC>
// type ChangeNewTextActionType = ReturnType<typeof ChangeNewTextAC>

export type ActionsTypes = ReturnType<typeof AddPostAC> | ReturnType<typeof ChangeNewTextAC> |
    ReturnType<typeof UpdateNewMessageTextAC> | ReturnType<typeof SendMessageAC>

export const AddPostAC = (message: string) => {
    return {
        type: ADD_POST,
        postMessage: message
    } as const
}

export const ChangeNewTextAC = (newText: string) => {
    return {
        type: CHANGE_NEW_TEXT,
        newText: newText
    } as const
}
export const UpdateNewMessageTextAC = (newText: string) => {
    return {
        type: UPDATE_NEW_POST_TEXT,
        newText: newText
    } as const
}

export const SendMessageAC = () => {
    return {
        type: SEND_MESSAGE
    } as const
}

export let store: StoreType = {
    _state: {
        profilePage: {
            messageForNewPost: '',
            posts: [
                {id: 1, message: 'Hi,how are you?', likesCount: 5},
                {id: 2, message: "It's my first post", likesCount: 32},],
        },
        dialogsPage: {
            dialogs: [
                {id: 1, name: 'Andrei'},
                {id: 2, name: 'Dima'},
                {id: 3, name: 'Ilya'},
                {id: 4, name: 'Kirill'},
                {id: 5, name: 'Alex'}],
            messages: [
                {id: 1, text: 'Hi!'},
                {id: 2, text: 'How are you?'},
                {id: 3, text: 'Have a good day'},],
            newMessageText: ''
        },


        navBarPage: {
            sidebar: [
                {id: 1, name: 'Andrei', avatar: 'https://4tololo.ru/sites/default/files/images/20161912161924.jpg'},
                {id: 2, name: 'Dima', avatar: 'https://proprikol.ru/wp-content/uploads/2020/12/kartinki-smeh-19.jpg'},
                {
                    id: 3,
                    name: 'Vika',
                    avatar: 'https://fazarosta.com/wp-content/uploads/2018/09/pikaperu-i-ne-snilos-10-sposobov-privlech-vnimanie-devushki-ot-kotoroj-vy-bez-uma-2-1.jpg'
                },
            ]
        }
    },

    _callSubscriber(state: stateType) {
        console.log('State is changed')
    },
    subscrube(callback) {
        this._callSubscriber = callback
    },
    // changeNewText(newText: string) {
    //     this._state.profilePage.messageForNewPost = newText
    //     this._callSubscriber(this._state)
    // },
    getState() {
        return this._state
    },
    dispatch(action) {
        if (action.type === ADD_POST) {
            const newPost: PostDataType = {
                id: 5,
                message: action.postMessage,
                likesCount: 0
            }
            this._state.profilePage.posts.push(newPost)
            // this.changeNewText('')
            this._state.profilePage.messageForNewPost = '' //?
            this._callSubscriber(this._state)
        } else if (action.type === CHANGE_NEW_TEXT) {
            this._state.profilePage.messageForNewPost = action.newText
            this._callSubscriber(this._state)
        } else if (action.type === UPDATE_NEW_POST_TEXT) {
            this._state.dialogsPage.newMessageText = action.newText
            this._callSubscriber(this._state)
        } else if (action.type === SEND_MESSAGE) {
            let textMessage = this._state.dialogsPage.newMessageText
            this._state.dialogsPage.newMessageText = ''
            this._state.dialogsPage.messages.push({id: 6, text: textMessage})
            this._callSubscriber(this._state)

        }
    }
}