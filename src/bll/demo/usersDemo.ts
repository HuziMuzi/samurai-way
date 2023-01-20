export const usersDemo = [
    {
        id: 1,
        name: "Dima",
        status: 'Ooh, yer not enduring me without a faith!',
        photos: {
            small: "https://cdn.pixabay.com/photo/2016/11/21/12/42/beard-1845166__480.jpg",
            large: "https://cdn.pixabay.com/photo/2016/11/21/12/42/beard-1845166__480.jpg"
        },
        followed: false
    },
    {
        id: 2,
        name: "Alex",
        status: 'Ooh, yer not enduring me without a faith!',
        photos: {
            small: "https://cdn.pixabay.com/photo/2017/04/01/21/06/portrait-2194457__480.jpg",
            large: "https://cdn.pixabay.com/photo/2017/04/01/21/06/portrait-2194457__480.jpg"
        },
        followed: false
    },
    {
        id: 3,
        name: "Tom",
        status: 'Ooh, yer not enduring me without a faith!',
        photos: {
            small: "https://cdn.pixabay.com/photo/2018/10/29/21/46/human-3782189__480.jpg",
            large: "https://cdn.pixabay.com/photo/2018/10/29/21/46/human-3782189__480.jpg"
        },
        followed: false
    },
    {
        id: 4,
        name: "Ryan",
        status: 'Ooh, yer not enduring me without a faith!',
        photos: {
            small: "https://cdn.pixabay.com/photo/2016/11/29/03/15/man-1867009__480.jpg",
            large: "https://cdn.pixabay.com/photo/2016/11/29/03/15/man-1867009__480.jpg"
        },
        followed: false
    },
]

export type userDemoType = {
    id: number
    name: string
    status: string
    photos: {
        small: string
        large: string
    },
    followed: boolean
}
