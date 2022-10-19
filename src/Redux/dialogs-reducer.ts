
import {DialogsDataType, MessageDataType} from "../components/Dialogs/Dialogs";

export const UPDATE_NEW_POST_TEXT = "UPDATE_NEW_MESSAGE_TEXT"
export const SEND_MESSAGE = 'SEND_MESSAGE'

export type initialStateTypeDialogs = {
    dialogs: Array<DialogsDataType>
    messages: Array<MessageDataType>
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
}

export const dialogsReducer = (state: initialStateTypeDialogs = initialState, action: DialogsActionsTypes): initialStateTypeDialogs => {
    switch (action.type) {
        case SEND_MESSAGE : {
            return {
                ...state,
                messages: [{id:6, text: action.value},...state.messages],
            }
        }
        default : {
            return state
        }
    }

}

export type DialogsActionsTypes =  SendMessageAC
type SendMessageAC = ReturnType<typeof SendMessageAC>



export const SendMessageAC = (value: string) => {
    return {
        type: SEND_MESSAGE,
        value
    } as const
}
