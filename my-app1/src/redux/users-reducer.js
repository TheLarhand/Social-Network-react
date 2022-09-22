const FOLLOW = 'FOLLOW'
const UNFOLLOW = 'UNFOLLOW'
const SET_USERS = 'SET_USERS'

let initialState = {
    users: [
    //     { id: 1, followed: false , fullName: 'Igor S.', status: 'i am gay', location:[{city: 'Prishahtinsk', country: 'Kazakhstan'}] },
    //     { id: 2, followed: false , fullName: 'Dasha Z.', status: 'cutest ded', location:[{city: 'Temirtay', country: 'Kazakhstan'}] },
    //     { id: 3, followed: true , fullName: 'John S.', status: '...', location:[{city: 'Bavaria', country: 'Germany'}] }
    // 
],
}

const usersReducer = (state = initialState, action) => {
    switch (action.type) {
        case FOLLOW: 
            return {...state, users: state.users.map(u => {
                if (u.id === action.userId) {
                    return {...u, followed: true}
                }
                return u
            }) 
        }
        
        case UNFOLLOW: 
            return {...state, users: state.users.map(u => {
                if (u.id === action.userId) {
                    return {...u, followed: false}
                }
                return u
            }) 
        }

        case SET_USERS: 
            return {...state, users: [...state.users , ...action.users]}
        

        default:
            return state
    }
}

export const followAC = (userId) => {
    return {
        type: FOLLOW,
        userId: userId
    }
}

export const unfollowAC = (userId) => {
    return {
        type: UNFOLLOW,
        userId: userId
    }
}

export const setUsersAC = (users) => {
    return {
        type: SET_USERS,
        users: users
    }
}

export default usersReducer