import s from './News.module.css'

const News = (props) => {
    let like = (newsId) => {
        props.like(newsId)
    }

    let onSendCommentClick = (newsId) => {
        props.addComment(newsId)
    }

    let onNewCommentChange = (e) => {
        console.log(e);
        let body = e.target.value
        let newsId = e.target.id
        props.updateNewComment(newsId, body)

    }
    return (
        <div>
            {
                props.news.map(n => <div>
                    <div className={s.info}>
                        <div>
                            <img className={s.avatar} src={n.author[0].photoUrl} alt="avatar" />
                        </div>
                        <div>
                            <div>
                                {n.author[0].fullName}
                            </div>
                            <div>
                                {n.date}
                            </div>
                        </div>

                    </div>

                    <div>
                        <div>
                            {n.newsText}
                        </div>
                        <div>
                            <img className={s.newsPhoto} src={n.newsPhotoUrl} alt="news" />
                        </div>
                        <div>
                            <button onClick={() => { like(n.id) }}>like {n.likeCounter}</button>
                        </div>
                    </div>

                    <div>
                        {
                            n.comments.map(c => <div className={s.comment}>
                                <div>
                                        <img className={s.avatar} src={c.photoUrl} alt="avatar" />
                                    </div>
                                <div className={s.commentInfo}>
                                    
                                    <div>
                                        <div>
                                            {c.fullName}
                                        </div>
                                        <div>
                                    {c.comment}
                                </div>
                                        <div>
                                            {c.date}
                                        </div>
                                    </div>
                                </div>

                                
                            </div>)
                        }
                    </div>
                    <div>
                        <textarea
                            onChange={onNewCommentChange}
                            value={n.newCommentText}
                            id={n.id}
                        />
                        <button onClick={() => { onSendCommentClick(n.id) }}>отправить</button>
                    </div>
                </div>)
            }
        </div>
    )
}

export default News;