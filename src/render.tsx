import ReactDOM from "react-dom";
import App, {stateType} from "./App";
import {addPost, changeNewText} from "./Redux/State";
import {BrowserRouter} from "react-router-dom";
import React from "react";

// export type rerenderEntireTreePropsType = {
//     state : stateType
// }

export const rerenderEntireTree = (state:stateType) => {
    ReactDOM.render(
        <BrowserRouter>
            <App state={state} addPost={addPost} message={state.profilePage.messageForNewPost} changeNewTextCallBack={changeNewText}/>
        </BrowserRouter>,
        document.getElementById('root')
    )
}