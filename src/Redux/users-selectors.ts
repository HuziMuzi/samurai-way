import {AppRootState} from "./redux-store";

export const getUsers = (state: AppRootState) => {
    return state.usersReducer.users
};

export const getPageSize = (state: AppRootState) => {
    return state.usersReducer.pageSize
};

export const getTotalUsersCount = (state: AppRootState) => {
    return state.usersReducer.totalUsersCount
};

export const getCurrentPage = (state: AppRootState) => {
    return state.usersReducer.currentPage
};

export const getIsFetching = (state: AppRootState) => {
    return state.usersReducer.isFetching
};

export const getFollowingInProgress = (state: AppRootState) => {
    return state.usersReducer.followingInProgress};

