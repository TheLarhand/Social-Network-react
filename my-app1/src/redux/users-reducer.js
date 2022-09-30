const FOLLOW = 'FOLLOW'
const UNFOLLOW = 'UNFOLLOW'
const SET_USERS = 'SET_USERS'

let initialState = {
    users: [
        { id: 1,photoUrl: 'https://i.pinimg.com/564x/c3/dd/7e/c3dd7e75aecbcce93f9ba9da4ece817f.jpg' ,
        followed: false , fullName: 'Igor S.', status: 'i am gay', location:[{city: 'Prishahtinsk', country: 'Kazakhstan'}] },
        { id: 2,photoUrl: 'http://sun9-52.userapi.com/s/v1/if1/PzSsCVRn0_syL_qXfAvJt02CLXiHHEhRpd2tOIpUymIMyXEkvnauT-x7k86o6DJYS84PTQ.jpg?size=200x277&quality=96&crop=0,0,402,558&ava=1' ,
        followed: false , fullName: 'Dasha Z.', status: 'cutest ded', location:[{city: 'Temirtay', country: 'Kazakhstan'}] },
        { id: 3,photoUrl: 'https://i.pinimg.com/originals/ca/de/e3/cadee33064939403108e93249da17207.jpg' , 
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