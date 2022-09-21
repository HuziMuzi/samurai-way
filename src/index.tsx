import React from 'react';
import './index.css';
import ReactDOM from "react-dom";
import App from "./App";
import {BrowserRouter} from "react-router-dom";
import {Prov} from "./StoreContext";
import {store} from "./Redux/redux-store";
import {Provider} from "react-redux";



export const rerenderEntireTree = () => {
    ReactDOM.render(
        <BrowserRouter>
            {/*<Prov store={store}>*/}
            <Provider store={store}>
                <App/>
            </Provider>
            {/*</Prov>*/}
        </BrowserRouter>,
        document.getElementById('root')
    )
}

rerenderEntireTree()
store.subscribe(rerenderEntireTree)