import React from 'react';
import axios from "axios";

// type getUsersType = {
//     currentPage: number
//     pageSize: number
// }

const instance = axios.create({
    withCredentials: true,
    baseURL: 'https://social-network.samuraijs.com/api/1.0/',
    headers: {
        'API-KEY': 'cd84ec38-7dd0-454d-922d-422564e79a88'
    }
})


export const getUsers = (currentPage: number, pageSize: number) => {
    return instance
        .get(`users?page=${currentPage}&count=${pageSize}`,)
        .then(response => response.data)
}

export const getProfile = (userId: string) => {
    return instance
        .get(`profile/${userId}`)
        .then(response => response.data)
}

export const postFollowUser = (id: number) => {
    return instance
        .post(`follow/${id}`,
            {})
        .then(response => {
            return response.data
        })
}

export const deleteUnfollowUser = (id: number) => {
    return instance
        .delete(`follow/${id}`)
        .then(response => response.data)
}