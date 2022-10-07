import s from './News.module.css'

const News = (props) => {
    let onSendCommentClick = (newsId) => {
        props.addComment(newsId)
    }

    let onNewCommentChange = (e) => {
        let body = e.target.value
        props.updateNewComment(body)

    }
    return (
        <div>
            {console.log(props.news)}
            {
                props.news.map(n => <div>
                    <div>
                        <img src={n.author[0].photoUrl} alt="avatar" />
                    </div>
                    <div>
                        {n.author[0].fullName}
                    </div>
                    <div>
                        {n.date}
                    </div>
                    <div>
                        {n.newsText}
                    </div>
                    <div>
                        <img src={n.newsPhotoUrl} alt="avatar" />
                    </div>
                    <div>
                        <button onClick={() => {props.like(n.id)}}>like {n.likeCounter}</button>
                    </div>
                    <div>
                        {
                            n.comments.map(c => <div>
                                <div>
                                    <img src={c.photoUrl} alt="avatar" />
                                </div>
                                <div>
                                    {c.fullName}
                                </div>
                                <div>
                                    {c.date}
                                </div>
                                <div>
                                    {c.comment}
                                </div>
                            </div>)
                        }
                    </div>
                        <div>
                            <textarea
                             onChange={onNewCommentChange} 
                             value={n.newCommentText}
                             />
                            <button onClick={() => {onSendCommentClick(n.id)}}>отправить</button>
                        </div>
                </div>)
            }
        </div>
    )
}

export default News;