
import {DialogsDataType, MessageDataType} from "../components/Dialogs/Dialogs";

export const UPDATE_NEW_POST_TEXT = "UPDATE_NEW_MESSAGE_TEXT"
export const SEND_MESSAGE = 'SEND_MESSAGE'

export type initialStateTypeDialogs = {
    dialogs: Array<DialogsDataType>
    messages: Array<MessageDataType>
    newMessageText: string
}

let initialState = {
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
}

export const dialogsReducer = (state: initialStateTypeDialogs = initialState, action: DialogsActionsTypes): initialStateTypeDialogs => {
    switch (action.type) {
        case UPDATE_NEW_POST_TEXT : {
            state.newMessageText = action.newText
            return state
        }
        case SEND_MESSAGE : {
            let textMessage = state.newMessageText
            state.newMessageText = ''
            state.messages.push({id: 6, text: textMessage})

            return state
        }
        default : {
            return state
        }
    }

}

export type DialogsActionsTypes = ReturnType<typeof UpdateNewMessageTextAC> | ReturnType<typeof SendMessageAC>

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
