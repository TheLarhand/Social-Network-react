import { connect } from "react-redux"
import { addCommentAC, likeAC, onCommentChangeAC, setNewsAC } from "../../redux/news-reducer"
import News from "./News"

let mapStateToProps = (state) => {
    return {
        news: state.newsPage.news
    }
}

let mapDispatchToProps = (dispatch) => {
    return {
        like: (newsId) => {
            dispatch(likeAC(newsId))
        },
        addComment: (newsId) => {
            dispatch(addCommentAC(newsId))
        },
        updateNewComment: (newsId, text) => {
            dispatch(onCommentChangeAC(newsId, text))
        },
        setNews: (news) => {
            dispatch(setNewsAC(news))
        },
    }
}

export default connect(mapStateToProps, mapDispatchToProps)(News)