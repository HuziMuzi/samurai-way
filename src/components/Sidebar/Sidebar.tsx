import React from 'react';
import s from './Sidebar.module.css'

export type sideUserType = {
    id: number
    name: string
    avatar: string
}

export type SidebarPropsType = {
    state: Array<sideUserType>
}

const Sidebar = (props: SidebarPropsType) => {
    return (
        <div className={s.sidebar}>
            <div className={s.title}>Friends</div>
            <div className={s.sidebarUsers}>
                {props.state.map(user => {
                    return (<div key={user.id}>
                            <img className={s.avatar} src={user.avatar} alt=""/>
                            <div className={s.name}>{user.name}</div>
                        </div>
                    )
                })}
            </div>
        </div>
    );
};

export default Sidebar;