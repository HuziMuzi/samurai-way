import React from 'react';
import s from './Dialogs.module.css'
import {NavLink} from "react-router-dom";

type DialogItem = {
    id: number
    name: string
}

const DialogItem = (props: DialogItem) => {
    return (
        <div className={s.dialog + ' ' + s.active}>
            <NavLink to={`/dialogs/${props.id}`}>{props.name}</NavLink>
        </div>
    )
}

type MessagePropsType = {
    text: string
}

type DialogsDataType = {
    id: number
    name: string
}

type MessageDataType = {
    id: number
    text: string
}

const Message = (props: MessagePropsType) => {
    return <div className={s.message}>{props.text}</div>
}
const Dialogs = () => {

    let dialogs: Array<DialogsDataType> = [
        {id: 1, name: 'Andrei'},
        {id: 2, name: 'Dima'},
        {id: 3, name: 'Ilya'},
        {id: 4, name: 'Kirill'},
        {id: 5, name: 'Alex'}
    ]

    let messages: Array<MessageDataType> = [
        {id: 1, text: 'Hi!'},
        {id: 2, text: 'How are you?'},
        {id: 3, text: 'Have a good day'},
    ]

    const dialogsElements = dialogs.map(dialog => <DialogItem key={dialog.id} id={dialog.id} name={dialog.name}/>)
    const messagesElements = messages.map(mes => <Message key={mes.id} text={mes.text}/>)

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