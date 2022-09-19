import React from 'react';
import {SendMessageAC, UpdateNewMessageTextAC} from "../../Redux/dialogs-reducer";
import Dialogs from "./Dialogs";
import {StoreType} from "../../Redux/store";



type DialogsContainerPropsType = {
    store: StoreType
}

const DialogsContainer = (props: DialogsContainerPropsType) => {
    const state = props.store.getState()

    const toSendMessage = () => {

        props.store.dispatch(SendMessageAC())
    }

    const onNewMessageChange = (value: string) => {
        props.store.dispatch(UpdateNewMessageTextAC(value))
    }

    return (
        <Dialogs
            state={state.dialogsPage}
            toSendMessage={toSendMessage}
            onNewMessageChange={onNewMessageChange}
        />
    );
};

export default DialogsContainer;