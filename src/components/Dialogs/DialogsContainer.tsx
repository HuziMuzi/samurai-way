import React from 'react';
import {
    SendMessageAC,
    UpdateNewMessageTextAC
} from "../../Redux/dialogs-reducer";
import Dialogs, {DialogsPropsType} from "./Dialogs";
import {connect} from "react-redux";
import {AppRootState} from "../../Redux/redux-store";
import {Dispatch} from "redux";
import {Redirect} from "react-router-dom";



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



const AuthRedirectComponent = (props:DialogsPropsType) => {
    if (!props.isAuth) return <Redirect to={'/login'}/>
    return <Dialogs  {...props}/>
}

const mapStateToProps = (state: AppRootState) => {
    return {
        dialogsState: state.dialogsReducer,
        isAuth: state.authReducer.isAuth
    }
}
const mapDispatchToProps = (dispatch: Dispatch) => {
    return {
        toSendMessage: () => {
            dispatch(SendMessageAC())},
        onNewMessageChange: (value: string) => {
            dispatch(UpdateNewMessageTextAC(value))}
    }
}

const DialogsContainer = connect(mapStateToProps, mapDispatchToProps)(AuthRedirectComponent)
export default DialogsContainer;