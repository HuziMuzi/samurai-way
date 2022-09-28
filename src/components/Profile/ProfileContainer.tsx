import React from 'react';
import {Profile} from "./Profile";

type ProfilePropsType = {}

export class ProfileContainer extends React.Component<ProfilePropsType> {
    render() {
        return (
            <>
                <Profile/>
            </>
        );
    }
};

