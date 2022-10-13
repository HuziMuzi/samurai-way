import React, {FC} from 'react';
import {Profile} from "./Profile";
import {connect} from "react-redux";
import {AppRootState} from "../../Redux/redux-store";
import {getProfileThunk, setUserProfile, userType} from "../../Redux/profile-reducer";
import {Redirect, RouteComponentProps, withRouter} from "react-router-dom";


type PathParamsType = {
    userId: string
}
export type PropsType = RouteComponentProps<PathParamsType> & ownPropsType
type ownPropsType = mapStateToProps & mapDispatchToProps
export type mapStateToProps = {
    profile: userType | null
    isAuth: boolean
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
        // console.log(userId)
        // axios
        //     .get(`https://social-network.samuraijs.com/api/1.0/profile/${userId}`)
        // userAPI.getProfile(userId).then((data) => {
        //         this.props.setUserProfile(data)
        //     })
    }

    render() {


        return (
            <>
                <Profile profile={this.props.profile}/>
            </>
        );
    }
}


type AuthRedirectComponentType = {
    history: any
location: any
match: any
profile : any
isAuth: any
setUserProfile : any
getProfileThunk: any
}


// redirect to loginPage if you don't sing in to your profile

const AuthRedirectComponent = (props: PropsType) => {
    if (!props.isAuth) return <Redirect to={'/login'}/>
    return <ProfileContainer  {...props}/>
}

const mapStateToProps = (state: AppRootState): mapStateToProps => {
    return {
        profile: state.profileReducer.profile,
        isAuth: state.authReducer.isAuth
    }
}

let withUrlDataContainerComponent = withRouter(AuthRedirectComponent)
export default connect(mapStateToProps, {setUserProfile, getProfileThunk})(withUrlDataContainerComponent)