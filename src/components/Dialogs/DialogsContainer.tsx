// import React from 'react';
import {
    SendMessageAC,
    UpdateNewMessageTextAC
} from "../../Redux/dialogs-reducer";
import Dialogs from "./Dialogs";
import {connect} from "react-redux";
import {AppRootState} from "../../Redux/redux-store";
import {compose, Dispatch} from "redux";

import WithAuthRedirect from "../../hoc/withAuthRedirect";
import React from "react";


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
// const AuthRedirectComponent = (props:DialogsPropsType) => {
//     if (!props.isAuth) return <Redirect to={'/login'}/>
//     return <Dialogs  {...props}/>
// }

const mapStateToProps = (state: AppRootState) => {
    return {
        dialogsState: state.dialogsReducer,
    }
}
const mapDispatchToProps = (dispatch: Dispatch) => {
    return {
        toSendMessage: () => {
            dispatch(SendMessageAC())
        },
        onNewMessageChange: (value: string) => {
            dispatch(UpdateNewMessageTextAC(value))
        }
    }
}

// compose(
//     connect(mapStateToProps, mapDispatchToProps)(Dialogs),
//     WithAuthRedirect
// )(Dialogs)

// const DialogsContainer = connect(mapStateToProps, mapDispatchToProps)(Dialogs)
// const authRedirectContainer = WithAuthRedirect(DialogsContainer)
export default compose<React.ComponentType>(
    connect(mapStateToProps, mapDispatchToProps),
    WithAuthRedirect
)(Dialogs)