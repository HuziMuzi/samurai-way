import React, {FC} from 'react';
import {Profile} from "./Profile";
import {connect} from "react-redux";
import {AppRootState} from "../../Redux/redux-store";
import {getProfileThunk, setUserProfile, userType} from "../../Redux/profile-reducer";
import {Redirect, RouteComponentProps, withRouter} from "react-router-dom";
import WithAuthRedirect from "../../hoc/withAuthRedirect";


type PathParamsType = {
    userId: string
}
export type PropsType = RouteComponentProps<PathParamsType> & ownPropsType
type ownPropsType = mapStateToProps & mapDispatchToProps
export type mapStateToProps = {
    profile: userType | null
    // isAuth: boolean
}
export type mapDispatchToProps = {
    setUserProfile: (profile: userType) => void
    getProfileThunk: (userId: string) => any
}

class ProfileContainer extends React.Component<PropsType> {

    componentDidMount() {
        let userId = this.props.match.params.userId
        if (!userId) userId = '2'
        this.props.getProfileThunk(userId)
    }

    render() {
        return (
            <>
                <Profile profile={this.props.profile}/>
            </>
        );
    }
}

// redirect to loginPage if you don't sing in to your profile

// let AuthRedirectComponent = WithAuthRedirect(ProfileContainer)

const mapStateToProps = (state: AppRootState): mapStateToProps => {
    return {
        profile: state.profileReducer.profile,
    }
}
debugger

let withUrlDataContainerComponent = withRouter(ProfileContainer)
export default WithAuthRedirect(connect(mapStateToProps,
    {setUserProfile, getProfileThunk})(withUrlDataContainerComponent))