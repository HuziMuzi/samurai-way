import axios from "axios";
import {TActiveProfile} from "../components/Settings/Settings";


const instance = axios.create({
    withCredentials: true,
    baseURL: 'https://social-network.samuraijs.com/api/1.0/',
    headers: {
        'API-KEY': 'cd84ec38-7dd0-454d-922d-422564e79a88'
    }
})

export const userAPI = {
    getUsers(currentPage: number, pageSize: number) {
        return instance
            .get(`users?page=${currentPage}&count=${pageSize}`,)
            .then(response => response.data)
    },

    postFollowUser(id: number) {
        return instance
            .post(`follow/${id}`,
                {})
            .then(response => {
                console.log(response.data)
                return response.data
            })
    },
    deleteUnfollowUser(id: number) {
        return instance.delete(`follow/${id}`)
            .then(response => {
                return response.data
            })
    },
    getProfile(userId: string) {
        console.warn('Obsolete method. Please profileAPI object')
        return profileAPI.getProfile(userId)
    },
}


export const profileAPI = {
    getProfile(userId: string) {
        return instance
            .get(`profile/${userId}`)
            .then(response => response.data)
    },
    getStatus(userId: string) {
        return instance
            .get(`/profile/status/${userId}`)
    },
    updateStatus(status: string) {
        return instance
            .put(`/profile/status/`, {status})
    },
    savePhoto(photoFile: string) {
        const formData = new FormData()
        formData.append('image',photoFile)
        return instance
            .put(`/profile/photo`, formData, {
                headers: {
                    'Content-Type': 'multipart/form-data'
                }
            })
    },
    saveProfile(values: TActiveProfile) {
        return instance.put('/profile', values)
    }



}
export const authAPI = {
    authMe() {
        return instance.get(`auth/me`)
    },
    login(email:string,password:string,rememberMe:boolean = false) {
        return instance.post(`auth/login`,{email,password,rememberMe})
    },
    logOut() {
        return instance.delete(`auth/login`)
    },
}



export type followUnfollowResponseType = {
    data: {}
    fieldsErrors: []
    messages: []
    resultCode: number
}