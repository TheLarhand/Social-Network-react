const FOLLOW = 'FOLLOW'
const UNFOLLOW = 'UNFOLLOW'
const SET_USERS = 'SET_USERS'

let initialState = {
    users: [
        { id: 1,photoUrl: 'https://klike.net/uploads/posts/2019-03/1551511801_1.jpg' ,
        followed: false , fullName: 'Igor S.', status: 'i am gay', location:[{city: 'Prishahtinsk', country: 'Kazakhstan'}] },
        { id: 2,photoUrl: 'https://sun9-1.userapi.com/impg/C5Jj2Zqu-xzOmhvbc_-rVZqQGQMpqNsWbt3apg/ADWwTJxfpyQ.jpg?size=564x550&quality=96&sign=361ed471335b8509654658509df29c0d&type=album' ,
        followed: false , fullName: 'Dasha Z.', status: 'cutest ded', location:[{city: 'Temirtay', country: 'Kazakhstan'}] },
        { id: 3,photoUrl: 'https://rus-pic.ru/wp-content/uploads/2021/12/avatarki-dlja-malchikov-41-foto-e7202eb.jpg' , 
        followed: true , fullName: 'John S.', status: '...', location:[{city: 'Bavaria', country: 'Germany'}] }
    
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