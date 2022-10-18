import React, {ChangeEvent, useEffect, useState} from 'react';

type ProfileStatusType = {
    status: string
    updateStatus: (status: string) => any
}

function ProfileStatus(props: ProfileStatusType) {

    const [editMode, setEditMod] = useState(false)
    const [status, setStatus] = useState(props.status)

    const activeEditMode = () => {
        setEditMod(true)
    }

    const deactivateActiveEditMode = () => {
        setEditMod(false)
        props.updateStatus(status)
    }

    const onStatusChange = (e:ChangeEvent<HTMLInputElement>) => {
        setStatus(e.currentTarget.value)
    }

    useEffect(()=>{
        // debugger
        setStatus(props.status)
    },[props.status])

    return (
        <div>
            {!editMode &&
                <div>
                    <span onDoubleClick={activeEditMode}>Статус: {props.status || '--------'}</span>
                </div>
            }
            {editMode &&
                <div>
                    <input onChange={onStatusChange} autoFocus={true} onBlur={deactivateActiveEditMode} type="text" value={status}/>
                </div>
            }
        </div>
    )
};
// class ProfileStatus extends React.Component<ProfileStatusType> {
//
//     state = {
//         editMode: false,
//         status: this.props.status
//     }
//
//     activeEditMode = () => {
//         this.setState({
//             editMode : true
//         })
//     }
//
//     deactivateActiveEditMode = ()=> {
//         this.setState({
//             editMode : false
//         })
//     }
//
//     render() {
//         return (
//             <div>
//                 {!this.state.editMode &&
//                     <div>
//                         <span onDoubleClick={this.activeEditMode }>Статус: {this.props.status}</span>
//                     </div>
//                 }
//                 {this.state.editMode &&
//                     <div>
//                         <input autoFocus={true} onBlur={this.deactivateActiveEditMode} type="text" value={this.props.status}/>
//                     </div>
//                 }
//             </div>
//         )
//     }
// };

export default ProfileStatus;