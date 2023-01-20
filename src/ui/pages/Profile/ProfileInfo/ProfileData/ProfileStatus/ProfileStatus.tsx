import React, {ChangeEvent, useEffect, useState} from 'react';
import {useAppDispatch} from "../../../../../../hooks/hooks";
import {updateUserStatusThunk} from "../../../../../../bll/profile-reducer";
import style  from './ProfileStatus.module.scss'

type ProfileStatusType = {
    status: string
}

function ProfileStatus(props: ProfileStatusType) {
    const [editMode, setEditMod] = useState(false)
    const [status, setStatus] = useState(props.status)
    const dispatch = useAppDispatch()

    const activeEditMode = () => {
        setEditMod(true)
    }

    const deactivateActiveEditMode = () => {
        setEditMod(false)
        dispatch(updateUserStatusThunk(status))
    }

    const onStatusChange = (e: ChangeEvent<HTMLInputElement>) => {
        setStatus(e.currentTarget.value)
    }

    useEffect(() => {
        setStatus(props.status)
    }, [props.status])

    return (
        <div className={style.statusBlock}>
            {!editMode &&
                <div>
                    <span onDoubleClick={activeEditMode}>{props.status || '--------'}</span>
                </div>
            }
            {editMode &&
                <div>
                    <input onChange={onStatusChange} autoFocus={true} onBlur={deactivateActiveEditMode} type="text"
                           value={status}/>
                </div>
            }
        </div>
    )
};


export default ProfileStatus;
