import React, {ChangeEvent} from 'react';
import s from './Dialogs.module.css'
import {DialogItem} from "./DialogItem/DialogItem";
import {Message} from "./Message/Message";
import {Redirect} from "react-router-dom";

export type DialogsDataType = {
    id: number
    name: string
}

export type MessageDataType = {
    id: number
    text: string
}

export type DialogsPropsType = {
    dialogsState: {
        dialogs: Array<DialogsDataType>
        messages: Array<MessageDataType>
        newMessageText: string
    }
    toSendMessage: () => void
    onNewMessageChange: (value: string) => void
    // isAuth: boolean
}

const Dialogs = (props: DialogsPropsType) => {

    const dialogsElements = props.dialogsState.dialogs.map(dialog => <DialogItem key={dialog.id} id={dialog.id}
                                                                          name={dialog.name}/>)
    const messagesElements = props.dialogsState.messages.map(mes => <Message key={mes.id} text={mes.text}/>)
    const newMessageText = props.dialogsState.newMessageText

    // const textMessage = React.createRef<HTMLTextAreaElement>() /// ref={textMessage}
    const toSentMessageHandler = () => {
        props.toSendMessage()
    }

    const newMessageChangeTextArea = (e: ChangeEvent<HTMLTextAreaElement>) => {
        let textBody = e.currentTarget.value
        props.onNewMessageChange(textBody)
    }

    // redirect to loginPage if you don't sing in to your profile
    // if(!props.isAuth) return <Redirect to={'/login'}/>

    return (
        
        <div className={s.dialogs}>
            <div className={s.dialogsItem}>
                {dialogsElements}
            </div>
            <div className={s.messages}>
                {messagesElements}
                <div>
                    <div>
                        <textarea value={newMessageText} placeholder={'Enter your text'}
                                  onChange={newMessageChangeTextArea}></textarea>
                    </div>
                    <div>
                        <button onClick={toSentMessageHandler}>Отправить</button>
                    </div>
                </div>
            </div>

        </div>
    );
};

export default Dialogs;