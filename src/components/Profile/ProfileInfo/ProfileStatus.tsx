import React, {FC} from 'react';

type ProfileStatusType = {
    status: string
}

class ProfileStatus extends React.Component<ProfileStatusType> {

    state = {
        editMode: false
    }

    activeEditMode = () => {
        // debugger
        this.setState({
            editMode : true
        })
        // this.state.editMode = true
    }

    deactivateActiveEditMode = ()=> {
        // debugger
        this.setState({
            editMode : false
        })
    }

    render() {
        return (
            <div>
                {!this.state.editMode &&
                    <div>
                        <span onDoubleClick={this.activeEditMode }>Статус: {this.props.status}</span>
                    </div>
                }
                {this.state.editMode &&
                    <div>
                        <input autoFocus={true} onBlur={this.deactivateActiveEditMode} type="text" value={this.props.status}/>
                    </div>
                }
            </div>
        )
    }
};

export default ProfileStatus;