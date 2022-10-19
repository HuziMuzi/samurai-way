import React, {ChangeEvent} from 'react';
import s from './Dialogs.module.css'
import {DialogItem} from "./DialogItem/DialogItem";
import {Message} from "./Message/Message";
import DialogsForm, {formDataType} from "./DialogsForm";

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
    }
    toSendMessage: (value: string) => void
}

const Dialogs = (props: DialogsPropsType) => {

    const dialogsElements = props.dialogsState.dialogs.map(dialog => <DialogItem key={dialog.id} id={dialog.id}
                                                                          name={dialog.name}/>)
    const messagesElements = props.dialogsState.messages.map(mes => <Message key={mes.id} text={mes.text}/>)




    const addNewMessage = (values:formDataType) => {
        props.toSendMessage(values.message)
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
                    {/*<form>*/}
                    {/*    <div>*/}
                    {/*    <textarea value={newMessageText} placeholder={'Enter your text'}*/}
                    {/*              onChange={newMessageChangeTextArea}></textarea>*/}
                    {/*    </div>*/}
                    {/*    <div>*/}
                    {/*        <button onClick={toSentMessageHandler}>Отправить</button>*/}
                    {/*    </div>*/}
                    {/*</form>*/}
                </div>
            </div>

        </div>
    );
};

export default Dialogs;