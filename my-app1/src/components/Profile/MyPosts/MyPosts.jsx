import s from './MyPosts.module.css';
import Post from './Post/Post';

const MyPosts = () => {
  let posts = [
    {id: 1, message: 'I like Berserk!!!', likeCounter: 999},
    {id: 2, message: 'JoJo classic.', likeCounter: 154},
    {id: 3, message: 'Bionicle is the best Lego series.', likeCounter: 455}
  ]

  let postsElements = posts 
    .map(p => <Post likeCounter={p.likeCounter} message={p.message} />)

  return (
    <div className={s.postsBlock}>
      My posts
      <div>
        <div>
          <textarea></textarea>
        </div>
        <div>
          <button>Add post</button>
        </div>

      </div>
      <div className={s.posts}>
        { postsElements }
      </div>

    </div>
  )
}

export default MyPosts;