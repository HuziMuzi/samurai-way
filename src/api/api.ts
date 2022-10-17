import axios from "axios";


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
                console.log(response)
                return response.data
            })
    },
    deleteUnfollowUser(id: number) {
        return instance.delete(`follow/${id}`)
            .then(response => {
                console.log(response)
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
    getStatus(userId:string) {
        return instance
            .get(`/profile/status/${userId}`)
    },
    updateStatus(status: string) {
        return instance
            .put(`/profile/status/`,{status})
    }
}


export const authAPI = {
    authMe() {
        return instance.get(`auth/me`)
    }
}


// export const getUsers = (currentPage: number, pageSize: number) => {
//     return instance
//         .get(`users?page=${currentPage}&count=${pageSize}`,)
//         .then(response => response.data)
// }
//
// export const getProfile = (userId: string) => {
//     return instance
//         .get(`profile/${userId}`)
//         .then(response => response.data)
// }
//
// export const postFollowUser = (id: number) => {
//     return instance
//         .post(`follow/${id}`,
//             {})
//         .then(response => {
//             return response.data
//         })
// }
//
// export const deleteUnfollowUser = (id: number) => {
//     return instance
//         .delete(`follow/${id}`)
//         .then(response => response.data)
// }


// function someFunc  () {
//     return new Promise(resolve => {
//         resolve(5)
//     })
// }
// console.log(someFunc().then())