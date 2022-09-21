import React from 'react';
import './index.css';
import ReactDOM from "react-dom";
import App from "./App";
import {BrowserRouter} from "react-router-dom";
import {store} from "./Redux/redux-store";
import {Provider} from "react-redux";



export const rerenderEntireTree = () => {
    ReactDOM.render(
        <BrowserRouter>
            <Provider store={store}>
                <App store={store}/>
            </Provider>
        </BrowserRouter>,
        document.getElementById('root')
    )
}

rerenderEntireTree()
store.subscribe(rerenderEntireTree)