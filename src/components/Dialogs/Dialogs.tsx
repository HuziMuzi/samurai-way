import React, {ChangeEvent} from 'react';
import s from './Dialogs.module.css'
import {DialogItem} from "./DialogItem/DialogItem";
import {Message} from "./Message/Message";
import {DialogsActionsTypes, SendMessageAC, UpdateNewMessageTextAC} from "../../Redux/dialogs-reducer";

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
        newMessageText : string
    }
    dispatch : (action :DialogsActionsTypes) => void
}

const Dialogs = (props: DialogsPropsType) => {

    const dialogsElements = props.state.dialogs.map(dialog => <DialogItem key={dialog.id} id={dialog.id} name={dialog.name}/>)
    const messagesElements = props.state.messages.map(mes => <Message key={mes.id} text={mes.text}/>)
    const newMessageText  = props.state.newMessageText

    // const textMessage = React.createRef<HTMLTextAreaElement>() /// ref={textMessage}
    const toSendMessage = () => {
        props.dispatch(SendMessageAC())
        // const text = textMessage.current?.value
        // alert(text)
    }

    const onNewMessageChange = (e : ChangeEvent<HTMLTextAreaElement>) => {
        let textBody = e.currentTarget.value
        props.dispatch(UpdateNewMessageTextAC(textBody))
    }

    return (
        <div className={s.dialogs}>
            <div className={s.dialogsItem}>
                {dialogsElements}
            </div>
            <div className={s.messages}>
                {messagesElements}
                <div>
                    <div>
                        <textarea value={newMessageText} placeholder={'Enter your text'} onChange={onNewMessageChange} ></textarea>
                    </div>
                    <div>
                        <button onClick={toSendMessage}>Отправить</button>
                    </div>
                </div>
            </div>

        </div>
    );
};

export default Dialogs;