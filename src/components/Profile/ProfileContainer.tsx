import React from 'react';
import {Profile} from "./Profile";
import axios from "axios";

type ProfilePropsType = {}

export class ProfileContainer extends React.Component<ProfilePropsType> {

    componentDidMount() {
        axios
            .get(`https://social-network.samuraijs.com/api/1.0/profile/2`)
            .then((response) => {
                console.log(response.data.items)
                // this.props.toggleIsFetching(false)
                // this.props.setUsers(response.data.items)
                // this.props.setTotalCount(response.data.totalCount)
            })
    }

    render() {
        return (
            <>
                <Profile/>
            </>
        );
    }
};

