import React from 'react';
import s from '../Dialogs.module.css'

export type MessagePropsType = {
    text: string
}

export const Message = (props: MessagePropsType) => {
    return <div className={s.message}>{props.text}</div>
}

