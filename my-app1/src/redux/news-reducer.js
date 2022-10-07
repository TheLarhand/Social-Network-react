const LIKE = 'LIKE'
const ADD_COMMENT = 'ADD_COMMENT'
const UPDATE_NEW_COMMENT_TEXT = 'UPDATE_NEW_COMMENT_TEXT'
const SET_NEWS = 'SET_NEWS'


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
            newsText: 'Резунок',
            likeCounter: 21,
            liked: false,
            newCommentText: '',
            comments: [
                {
                    id: 1,
                    fullName: 'Dasha Z.',
                    photoUrl: 'https://i.pinimg.com/564x/c3/dd/7e/c3dd7e75aecbcce93f9ba9da4ece817f.jpg',
                    comment: 'Отличный рисунок!!!',
                    date: '30.09.2022'
                },

                {
                    id: 2,
                    fullName: 'John S.',
                    photoUrl: 'https://i.pinimg.com/564x/c3/dd/7e/c3dd7e75aecbcce93f9ba9da4ece817f.jpg',
                    comment: 'я бы лучше сделал.',
                    date: '30.09.2022'
                },

                {
                    id: 3,
                    fullName: 'Dasha Z.',
                    photoUrl: 'https://i.pinimg.com/564x/c3/dd/7e/c3dd7e75aecbcce93f9ba9da4ece817f.jpg',
                    comment: 'dfgdfgdfg',
                    date: '30.09.2022'
                }
            ]

        },
        {
            id: 2,
            author: [{
                id: 1,
                fullName: 'Igor S.',
                photoUrl: 'https://i.pinimg.com/564x/c3/dd/7e/c3dd7e75aecbcce93f9ba9da4ece817f.jpg',
            }],
            date: '30.09.2022',
            newsPhotoUrl: '',
            newsText: 'Резунок',
            likeCounter: 21,
            liked: true,
            newCommentText: '',
            comments: [
                {
                    id: 1,
                    fullName: 'Dasha Z.',
                    photoUrl: 'https://i.pinimg.com/564x/c3/dd/7e/c3dd7e75aecbcce93f9ba9da4ece817f.jpg',
                    comment: 'Отличный рисунок!!!',
                    date: ''
                },
            ]

        },


    ],
}

const newsReducer = (state = initialState, action) => {
    let stateCopy = { 
        ...state,
        news: [...state.news]
    }
    // let stateCopy = {...state}
    // stateCopy.news = [{...stateCopy.news}]
    // stateCopy.news[0].comments = { ...state.news[0].comments }

    switch (action.type) {
        case LIKE:
            return {
                ...state, news: state.news.map(n => {
                    if (n.id === action.newsId) {
                        if (n.liked === true) {
                            return { ...n, liked: false, likeCounter: n.likeCounter-- }
                            // return { ...n, liked: false}
                        } else {
                            return { ...n, liked: true, likeCounter: n.likeCounter++ }
                            // return { ...n, liked: true}
                        }
                    }
                })
            }
        case ADD_COMMENT:
            {
                const newComment = {
                    id: 4,
                    fullName: 'UserName',
                    photoUrl: 'https://i.pinimg.com/564x/c3/dd/7e/c3dd7e75aecbcce93f9ba9da4ece817f.jpg',
                    comment: action.newText,
                    date: '12.12.2022'
                }

                for (const e of stateCopy.news) {
                    console.log(action);
                    if (e.id == action.newsId){
                        e.comments.push(newComment)
                        e.newCommentText = ''
                    }
                }
                return stateCopy
            }
        case UPDATE_NEW_COMMENT_TEXT:
            {
                // let stateCopy = { ...state }
                // stateCopy.news = { ...state.news }
                stateCopy.news.newCommentText = action.newText
                return stateCopy
            }
        case SET_NEWS:
            return { ...state, news: [...state.news, ...action.news] }

        default:
            return state
    }
}

export const likeAC = (newsId) => {
    return {
        type: LIKE,
        newsId: newsId
    }
}

export const addCommentAC = (newsId) => {
    return {
        type: ADD_COMMENT,
        newsId: newsId
    }
}

export const onCommentChangeAC = (newsId, text) => {
    return {
        type: UPDATE_NEW_COMMENT_TEXT,
        newsId: newsId,
        newText: text
    }
}

export const setNewsAC = (news) => {
    return {
        type: SET_NEWS,
        news: news
    }
}

export default newsReducer