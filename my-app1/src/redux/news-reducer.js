// const FOLLOW = 'FOLLOW'
// const UNFOLLOW = 'UNFOLLOW'
// const SET_USERS = 'SET_USERS'

let initialState = {
    news: [
        {
            id: 1,
            author: [{
                id: 1,
                fullName: 'Igor S.',
                photoUrl: 'https://i.pinimg.com/564x/c3/dd/7e/c3dd7e75aecbcce93f9ba9da4ece817f.jpg',
            }],
            date: '30.09.2022',
            newsPhotoUrl: '',
            likeCounter: 21,
            comments: [
                {id: 1,
                fullName: 'Dasha Z.',
                photoUrl: 'https://i.pinimg.com/564x/c3/dd/7e/c3dd7e75aecbcce93f9ba9da4ece817f.jpg',
                comment: 'Отличный рисунок!!!',
                date: ''},

                {id: 2,
                fullName: 'John S.',
                photoUrl: 'https://i.pinimg.com/564x/c3/dd/7e/c3dd7e75aecbcce93f9ba9da4ece817f.jpg',
                comment: 'я бы лучше сделал.',
                date: ''},

                {id: 3,
                fullName: 'Dasha Z.',
                photoUrl: 'https://i.pinimg.com/564x/c3/dd/7e/c3dd7e75aecbcce93f9ba9da4ece817f.jpg',
                comment: '',
                date: ''}
            ]

        },


    ],
}

const newsReducer = (state = initialState, action) => {
    switch (action.type) {

        default:
            return state
    }
}

// export const followAC = (userId) => {
//     return {
//         type: FOLLOW,
//         userId: userId
//     }
// }

export default newsReducer