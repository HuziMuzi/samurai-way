import React from 'react';
import s from './Dialogs.module.css'
import {DialogItem} from "./DialogItem/DialogItem";
import {Message} from "./Message/Message";
import DialogsForm, { TFormData} from "./DialogsForm";
import {useAppDispatch, useAppSelector} from "../../../hooks/hooks";
import {SendMessageAC} from "../../../bll/dialogs-reducer";
import {usersDemo} from "../../../bll/demo/usersDemo";

export type DialogsDataType = {
    id: string
    name: string
}

export type MessageDataType = {
    id: string
    text: string
}


const Dialogs = () => {

    const dialogs = useAppSelector(state => state.dialogsReducer.dialogs)
    const messages = useAppSelector(state => state.dialogsReducer.messages)
    const dispatch = useAppDispatch()
    const users = usersDemo

    const dialogsElements = users.map(user => <DialogItem key={user.id} id={user.id} user={user}/>)
    const messagesElements = messages.map(mes => <Message key={mes.id} text={mes.text}/>)

    const addNewMessage = (values: TFormData) => {
        dispatch(SendMessageAC(values.message))
    }
    return (

        <div className={s.dialogs}>
            <div className={s.dialogsItem}>
                {dialogsElements}
            </div>
            <div className={s.messages}>
                {messagesElements}
                <div>
                    <DialogsForm onSubmit={addNewMessage}/>
                </div>
            </div>

        </div>
    );
};

export default Dialogs;
