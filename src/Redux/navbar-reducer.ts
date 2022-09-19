import React from "react";
import {sideUserType} from "../components/Sidebar/Sidebar";


type initialStateType = {
    sidebar : Array<sideUserType>
}

let initialState = {
    sidebar: [
        {id: 1, name: 'Andrei', avatar: 'https://4tololo.ru/sites/default/files/images/20161912161924.jpg'},
        {id: 2, name: 'Dima', avatar: 'https://proprikol.ru/wp-content/uploads/2020/12/kartinki-smeh-19.jpg'},
        {
            id: 3, name: 'Vika',
            avatar: 'https://fazarosta.com/wp-content/uploads/2018/09/pikaperu-i-ne-snilos-10-sposobov-privlech-vnimanie-devushki-ot-kotoroj-vy-bez-uma-2-1.jpg'
        },
    ]
}

export const navbarReducer = (state:initialStateType = initialState, action:any) : initialStateType => {

    return state
}