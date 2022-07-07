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
    dialogs: Array<DialogsDataType>
    messages: Array<MessageDataType>
}

const Dialogs = (props: DialogsPropsType) => {

    // let dialogs: Array<DialogsDataType> = [
    //     {id: 1, name: 'Andrei'},
    //     {id: 2, name: 'Dima'},
    //     {id: 3, name: 'Ilya'},
    //     {id: 4, name: 'Kirill'},
    //     {id: 5, name: 'Alex'}
    // ]

    // let messages: Array<MessageDataType> = [
    //     {id: 1, text: 'Hi!'},
    //     {id: 2, text: 'How are you?'},
    //     {id: 3, text: 'Have a good day'},
    // ]

    const dialogsElements = props.dialogs.map(dialog => <DialogItem key={dialog.id} id={dialog.id} name={dialog.name}/>)
    const messagesElements = props.messages.map(mes => <Message key={mes.id} text={mes.text}/>)

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