import React from 'react';
import s from './Dialogs.module.css'
import {NavLink} from "react-router-dom";

type DialogItem = {
    id: string
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

const Message = (props: MessagePropsType) => {
    return <div className={s.message}>{props.text}</div>
}

const Dialogs = () => {
    return (
        <div className={s.dialogs}>
            <div className={s.dialogsItem}>
                <DialogItem id={'1'} name={'Andrei'}/>
                <DialogItem id={'2'} name={'Dima'}/>
                <DialogItem id={'3'} name={'Ilya'}/>
                <DialogItem id={'4'} name={'Kirill'}/>
                <DialogItem id={'5'} name={'Alex'}/>
            </div>
            <div className={s.messages}>
                <Message text={'Hi!'}/>
                <Message text={'How are you?'}/>
                <Message text={'Have a good day'}/>
            </div>
        </div>
    );
};

export default Dialogs;