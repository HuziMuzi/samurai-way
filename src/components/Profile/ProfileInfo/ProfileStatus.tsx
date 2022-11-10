import React, {ChangeEvent, useEffect, useState} from 'react';

type ProfileStatusType = {
    status: string
    updateStatus: (status: string) => any
}

function ProfileStatus(props: ProfileStatusType) {
    debugger
    const [editMode, setEditMod] = useState(false)
    const [status, setStatus] = useState(props.status)

    const activeEditMode = () => {
        setEditMod(true)
    }

    const deactivateActiveEditMode = () => {
        setEditMod(false)
        props.updateStatus(status)
    }

    const onStatusChange = (e: ChangeEvent<HTMLInputElement>) => {
        setStatus(e.currentTarget.value)
    }

    useEffect(() => {
        debugger
        setStatus(props.status)
    }, [props.status])

    return (
        <div>
            {!editMode &&
                <div>
                    <span onDoubleClick={activeEditMode}>Статус: {props.status || '--------'}</span>
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