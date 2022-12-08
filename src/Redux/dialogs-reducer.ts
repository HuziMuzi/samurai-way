
import {DialogsDataType, MessageDataType} from "../ui/pages/Dialogs/Dialogs";
import {v1} from "uuid";


export type initialStateTypeDialogs = {
    dialogs: Array<DialogsDataType>
    messages: Array<MessageDataType>
}

let initialState = {
    dialogs: [
        {id: v1(), name: 'Andrei'},
        {id: v1(), name: 'Dima'},
        {id: v1(), name: 'Ilya'},
        {id: v1(), name: 'Kirill'},
        {id: v1(), name: 'Alex'}],
    messages: [
        {id: v1(), text: 'Hi!'},
        {id: v1(), text: 'How are you?'},
        {id: v1(), text: 'Have a good day'},],
}

export const dialogsReducer = (state: initialStateTypeDialogs = initialState, action: DialogsActionsTypes): initialStateTypeDialogs => {
    switch (action.type) {
        case 'DIALOG/SEND_MESSAGE' : {
            return {
                ...state,
                messages: [{id:v1(), text: action.value},...state.messages],
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
        type: 'DIALOG/SEND_MESSAGE',
        value
    } as const
}
