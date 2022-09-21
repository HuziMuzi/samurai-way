import React, {ChangeEvent} from 'react';
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
    dialogsState: {
        dialogs: Array<DialogsDataType>
        messages: Array<MessageDataType>
        newMessageText: string
    }
    toSendMessage: () => void
    onNewMessageChange: (value: string) => void
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