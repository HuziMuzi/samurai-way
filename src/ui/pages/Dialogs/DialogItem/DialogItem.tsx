import React from 'react';
import {DialogsWrapper} from "./styles";
import {userDemoType} from "../../../../bll/demo/usersDemo";
import {SAvatar} from "../../../components/common/AvatarBox";

export type DialogItem = {
    id: number
    user: userDemoType
}

export const DialogItem = ({id, user}: DialogItem) => {
    return (
        <DialogsWrapper>
            <SAvatar  size={"small"}
                      img={user?.photos.small || 'https://i.imgur.com/lqN6w1t.png'}/>
           <div>
               <div>{user.name}</div>
               <div>{user.id}</div>
           </div>
            {/*<NavLink to={`/Dialogs/${props.id}`}>{props.name}</NavLink>*/}
        </DialogsWrapper>
    )
}
