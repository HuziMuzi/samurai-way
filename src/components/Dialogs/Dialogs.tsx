import React from 'react';
import s from './Dialogs.module.css'
import {DialogItem} from "./DialogItem/DialogItem";
import {Message} from "./Message/Message";

export type DialogsDataType = {
    id: number
    name: string
}

export type MessageDataType = {
    id: number
    text: string
}

type DialogsPropsType = {
    state: {
        dialogs: Array<DialogsDataType>
        messages: Array<MessageDataType>
    }
}

const Dialogs = (props: DialogsPropsType) => {

    const dialogsElements = props.state.dialogs.map(dialog => <DialogItem key={dialog.id} id={dialog.id} name={dialog.name}/>)
    const messagesElements = props.state.messages.map(mes => <Message key={mes.id} text={mes.text}/>)

    return (
        <div className={s.dialogs}>
            <div className={s.dialogsItem}>
                {dialogsElements}
            </div>
            <div className={s.messages}>
                {messagesElements}
            </div>
        </div>
    );
};

export default Dialogs;