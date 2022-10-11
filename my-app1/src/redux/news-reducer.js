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
            newsPhotoUrl: 'https://memepedia.ru/wp-content/uploads/2022/10/mudroe-tainstvennoe-derevo-mem-9.jpg',
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

    switch (action.type) {
        case LIKE:
            {
            for (const e of stateCopy.news) {
                if (e.id === action.newsId) {
                    if (e.liked === true) {
                        e.liked = false
                        e.likeCounter = e.likeCounter - 1
                    } else {
                        e.liked = true
                        e.likeCounter = e.likeCounter + 1
                    }
                    console.log(e.likeCounter);
                }
            }
            return stateCopy
        }
        
        case ADD_COMMENT:
            {
                for (const e of stateCopy.news) {
                    if (e.id == action.newsId) {
                        const newComment = {
                            id: 4,
                            fullName: 'UserName',
                            photoUrl: 'https://i.pinimg.com/564x/c3/dd/7e/c3dd7e75aecbcce93f9ba9da4ece817f.jpg',
                            comment: e.newCommentText,
                            date: '12.12.2022'
                        }
                        console.log(newComment);
                        e.comments.push(newComment)
                        e.newCommentText = ''
                    }
                }
                return stateCopy
            }
        case UPDATE_NEW_COMMENT_TEXT:
            {
                for (const e of stateCopy.news) {
                    if (e.id == action.newsId) {
                        e.newCommentText = action.newText
                    }
                }
                return stateCopy
                // let stateCopy = { ...state }
                // stateCopy.news = { ...state.news }
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