import React from 'react';
import {Profile} from "./Profile";
import {connect} from "react-redux";
import {AppRootState} from "../../Redux/redux-store";
import {
    getProfileThunk,
    getUserStatusThunk,
    setUserProfile,
    updateUserStatusThunk,
    userType
} from "../../Redux/profile-reducer";
import { RouteComponentProps, withRouter} from "react-router-dom";
import WithAuthRedirect from "../../hoc/withAuthRedirect";
import {compose} from "redux";


type PathParamsType = {
    userId: string
}
export type PropsType = RouteComponentProps<PathParamsType> & ownPropsType
type ownPropsType = mapStateToProps & mapDispatchToProps
export type mapStateToProps = {
    profile: userType | null
    status : string
    autorizedUserId: number | null
    isAuth : boolean
}
export type mapDispatchToProps = {
    setUserProfile: (profile: userType) => void
    getProfileThunk: (userId: string) => void
    getUserStatusThunk : (userId: string) => void
    updateUserStatusThunk : (status: string) => void
}

class ProfileContainer extends React.Component<PropsType> {

    componentDidMount() {
        let userId = this.props.match.params.userId
        if (!userId){
            userId = `${this.props.autorizedUserId}`
            if(!userId) {
                this.props.history.push('./login')
            }
    }
        this.props.getProfileThunk(userId)
        this.props.getUserStatusThunk(userId)
    }

    render() {
        return (
            <>
                <Profile
                    profile={this.props.profile}
                    status={this.props.status}
                    updateStatus={this.props.updateUserStatusThunk}
                />
            </>
        );
    }
}


const mapStateToProps = (state: AppRootState): mapStateToProps => {
    return {
        profile: state.profileReducer.profile,
        status: state.profileReducer.status,
        autorizedUserId :  state.authReducer.id,
        isAuth : state.authReducer.isAuth
    }
}

export default compose<React.ComponentType>(
    connect(mapStateToProps, {setUserProfile, getProfileThunk,
        getUserStatusThunk,updateUserStatusThunk}),
    withRouter,
    WithAuthRedirect
)(ProfileContainer)