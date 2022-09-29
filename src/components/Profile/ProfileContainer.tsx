import React from 'react';
import {Profile} from "./Profile";
import axios from "axios";
import {connect} from "react-redux";
import {userType} from "../../Redux/users-reducer";
import {AppRootState} from "../../Redux/redux-store";
import {setUserProfile} from "../../Redux/profile-reducer";

type ProfilePropsType = {
    setUserProfile : (profile: userType) => void
    profile: userType |  null
}

 class ProfileContainer extends React.Component<ProfilePropsType> {

    componentDidMount() {
        axios
            .get(`https://social-network.samuraijs.com/api/1.0/profile/2`)
            .then((response) => {
                console.log(response.data)
                this.props.setUserProfile(response.data)
            })
    }

    render() {
        return (
            <>
                <Profile profile={this.props.profile}/>
            </>
        );
    }
};

const mapStateToProps = (state:AppRootState) => {
    return {
        profile: state.profileReducer.profile
    }
}

export default connect(mapStateToProps,{setUserProfile})(ProfileContainer)