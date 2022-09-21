import React from 'react';
import {initialStateTypeDialogs, SendMessageAC, UpdateNewMessageTextAC} from "../../Redux/dialogs-reducer";
import Dialogs from "./Dialogs";

import {useDispatch, useSelector} from "react-redux";
import {AppRootState} from "../../Redux/redux-store";


type DialogsContainerPropsType = {
    // store: StoreType
}

const DialogsContainer = (props: DialogsContainerPropsType) => {
    const dialogsState = useSelector<AppRootState, initialStateTypeDialogs>(state => state.dialogsReducer)
    const dispatch = useDispatch()
    // const state = props.store.getState()

    const toSendMessage = () => {

        dispatch(SendMessageAC())
    }

    const onNewMessageChange = (value: string) => {
        dispatch(UpdateNewMessageTextAC(value))
    }

    return (
        <Dialogs
            state={dialogsState}
            toSendMessage={toSendMessage}
            onNewMessageChange={onNewMessageChange}
        />
    );
};

export default DialogsContainer;