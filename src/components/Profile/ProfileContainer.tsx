import React from 'react';
import {Profile} from "./Profile";
import {connect} from "react-redux";
import {AppRootState} from "../../Redux/redux-store";
import {getProfileThunk, setUserProfile, userType} from "../../Redux/profile-reducer";
import {RouteComponentProps, withRouter} from "react-router-dom";




type PathParamsType = {
    userId : string
}
type PropsType = RouteComponentProps<PathParamsType> & ownPropsType
type ownPropsType = mapStateToProps & mapDispatchToProps
type mapStateToProps = {
    profile: userType | null
}
type mapDispatchToProps = {
    setUserProfile : (profile: userType) => void
    getProfileThunk : (userId: string) => any
}

 class ProfileContainer extends React.Component<PropsType> {

    componentDidMount() {
        let userId = this.props.match.params.userId
        if(!userId) userId='2'

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
                <Profile profile={this.props.profile} />
            </>
        );
    }
};

const mapStateToProps = (state:AppRootState) : mapStateToProps => {
    return {
        profile: state.profileReducer.profile
    }
}

let withUrlDataContainerComponent = withRouter(ProfileContainer)
export default connect(mapStateToProps,{setUserProfile,getProfileThunk})(withUrlDataContainerComponent)