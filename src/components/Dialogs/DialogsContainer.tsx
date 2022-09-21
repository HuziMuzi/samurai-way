import React from 'react';
import {initialStateTypeDialogs, SendMessageAC, UpdateNewMessageTextAC} from "../../Redux/dialogs-reducer";
import Dialogs from "./Dialogs";

import {connect, useDispatch, useSelector} from "react-redux";
import {AppRootState} from "../../Redux/redux-store";


type DialogsContainerPropsType = {
    // store: StoreType
}

// const DialogsContainer = (props: DialogsContainerPropsType) => {
//     const dialogsState = useSelector<AppRootState, initialStateTypeDialogs>(state => state.dialogsReducer)
//     const dispatch = useDispatch()
//
//     const toSendMessage = () => {
//         dispatch(SendMessageAC())
//     }
//
//     const onNewMessageChange = (value: string) => {
//         dispatch(UpdateNewMessageTextAC(value))
//     }
//
//     return (
//
//         <Dialogs
//             dialogsState={dialogsState}
//             toSendMessage={toSendMessage}
//             onNewMessageChange={onNewMessageChange}
//         />
//     );
// };

const mapStateToProps = (state:AppRootState) => {
    return {
        dialogsState: state.dialogsReducer
    }
}
const mapDispatchToProps = (dispatch: any) => {
    return {
        toSendMessage : () => {
            dispatch(SendMessageAC())
        },
        onNewMessageChange : (value: string) => {
            dispatch(UpdateNewMessageTextAC(value))
        }
    }
}

const DialogsContainer = connect(mapStateToProps,mapDispatchToProps)(Dialogs)

export default DialogsContainer;