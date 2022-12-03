import {AddPostAC, deletePost, profileReducer, userType} from "./profile-reducer";


test('new post sjould be added', () => {
    let action = AddPostAC('newText')
    let state = {
        posts: [
            {id: 1, message: 'Hi,how are you?', likesCount: 5},
            {id: 2, message: "It's my first post", likesCount: 32},

        ],
        profile: {} as userType,
        status: ''
    }

    let newState = profileReducer(state, action)

    // 3 expectation

    expect(newState.posts.length).toBe(3)
    expect(newState.posts[4]).toBe(3)

})

test('aftel deleted length should be decrement ', () => {
    let action = deletePost(1)
    let state = {
        posts: [
            {id: 1, message: 'Hi,how are you?', likesCount: 5},
            {id: 2, message: "It's my first post", likesCount: 32},

        ],
        profile: {} as userType,
        status: ''
    }

    let newState = profileReducer(state, action)

    expect(newState.posts.length).toBe(1)
    expect(newState.posts[0].message).toBe('It\'s my first post')
})




