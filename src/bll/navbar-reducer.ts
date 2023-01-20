import {sideUserType} from "../ui/pages/Sidebar/Sidebar";


export type initialStateTypeNavBar = {
    sidebar : Array<sideUserType>
}

export type navbarActionsType = {
    type:  string
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

export const navbarReducer = (state:initialStateTypeNavBar = initialState, action:navbarActionsType) : initialStateTypeNavBar => {
switch (action.type) {
    default:
        return state

}
}