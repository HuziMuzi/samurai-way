import React from 'react';
import {NavLink} from "react-router-dom";
import s from './DialogItem.module.css'

export type DialogItem = {
    id: string
    name: string
}

export const DialogItem = (props: DialogItem) => {
    return (
        <div className={s.dialog + ' ' + s.active}>
            <NavLink to={`/Dialogs/${props.id}`}>{props.name}</NavLink>
        </div>
    )
}
